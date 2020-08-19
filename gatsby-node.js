const path = require("path");
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

  const postPerPage = 5;
  const numPages = Math.ceil(posts.length / postPerPage);

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
