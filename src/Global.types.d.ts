interface FrontMatter {
  title: string;
  date: string;
  path: string;
  spoiler: string;
  tags: string[];
}

type Theme = "LIGHT" | "DARK";

type SocialName = "twitter" | "github" | "instagram";

interface SitePathType {
  name: string;
  path: string;
}
interface SocialType {
  name: SocialName;
  account: string;
}
