const path = require("path");
/**
 *
 * @param {Function} createPage
 * @param {Array} posts
 */
const createTagPages = (createPage, posts) => {
  const allTagIndexTemplate = path.resolve("src/templates/all-tags.tsx");
  const singleTagIndexTemplate = path.resolve("src/templates/single-tag.tsx");

  const postsByTag = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }

        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);
  createPage({
    path: "/tags",
    component: allTagIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach(tag => {
    const posts = postsByTag[tag];
    createPage({
      path: `/tags/${tag}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tag,
      },
    });
  });
};

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const postListTemplate = path.resolve("src/templates/post-list.tsx");
  const postItemTemplate = path.resolve("src/templates/post-item.tsx");

  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 10000
      ) {
        edges {
          node {
            frontmatter {
              title
              tags
              path
              date(formatString: "MMMM DD, YY")
              spoiler
            }
            excerpt
            body
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running Graphql query.`);
    return;
  }

  const posts = result.data.allMdx.edges;

  const postPerPage = 4;
  const numPages = Math.ceil(posts.length / postPerPage);

  createTagPages(createPage, posts);

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/posts` : `/posts/${index + 1}`,
      component: postListTemplate,
      context: {
        limit: postPerPage,
        skip: index * numPages,
        numPages,
        currentPage: index + 1,
      },
    });
  });

  posts.forEach(({ node }, index) => {
    const { path } = node.frontmatter;

    createPage({
      path: `/posts${path}`,
      component: postItemTemplate,
      context: {
        postPath: path,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });
};
