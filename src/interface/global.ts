export interface ArticleItem {
  id: string;
  title: string;
  cover: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  loveCount: number | string;
  readCount: number | string;
  isTop: number;
  tags: any[];
  categorys: any[];
}
