interface Edges {
  node: Node;
}

interface Node {
  frontmatter: FrontMatter;
}

type EdgesType = Array<Edges>;

function createTags(edges: EdgesType) {
  const map: { [key: string]: Node[] } = {};

  for (const post of edges) {
    const { tags } = post.node.frontmatter;
    tags.forEach((tag: string) => {
      if (!map[tag]) {
        map[tag] = [];
      }
      map[tag].push(post.node);
    });
  }
  return map;
}

export default createTags;
