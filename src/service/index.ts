import request from '@/utils/request';

export function GetArticleInfo(id: string) {
  return request.get(`/article/${id}`);
}

export function GetArticlePage(params: any) {
  return request.get('/article', { params });
}

export function GetArticleList() {
  return request.get('/article/list');
}

export function GetLinkList(params: any) {
  return request.get('/link', { params });
}

export function GetCategoryList() {
  return request.get('/category/list');
}

export function GetArticleListById(id: string) {
  return request.get(`/category/${id}`);
}
