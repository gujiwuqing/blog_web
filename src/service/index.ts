import request from '@/utils/request';

export function GetArticleInfo(id: string) {
  return request.get(`/article/${id}`);
}