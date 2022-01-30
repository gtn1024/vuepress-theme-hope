import type { Author } from "@mr-hope/vuepress-shared";
import { ReadingTime } from "vuepress-plugin-reading-time2";

export interface ArticleMeta {
  /**
   * Type
   */
  type: "article" | "page" | "slide";

  /**
   * Article title
   */
  title: string;

  /**
   * Article author
   */
  author?: Author | false;

  /**
   * writing date info
   */
  date?: Date;

  /**
   * article category
   */
  category?: string[] | string;

  /**
   * Article tag
   */
  tag?: string[] | string;

  /**
   * Reading time info
   */
  readingTime?: ReadingTime;

  /**
   * article excerpt
   */
  excerpt: string;

  /**
   * Sticky info
   */
  sticky?: number | boolean;

  /**
   * Start info
   */
  star?: number | boolean;

  /**
   * Cover image
   */
  cover?: string;
}

export interface ArticleDetail extends ArticleMeta {
  path: string;
}