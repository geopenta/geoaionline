export interface BasePost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export interface FeaturedPost extends BasePost {
  image: string;
}

export type Post = BasePost;