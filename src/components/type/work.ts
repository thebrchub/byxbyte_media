export type YoutubeVideo = {
  url: string;
  title: string;
};

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  category: "Advertisement" | "Music Video" | "Corporate";
  tag: string;
  img: string;
  albums: {
    title: string;
    cover: string;
    images: string[];
  }[];
  youtubeLinks: YoutubeVideo[];
  beforeAfterPairs: { before: string; after: string }[];
  year?: number;
};
