import http, { HttpQuery } from "@/services/http.service";
import { AxiosResponse } from "axios";

const path = "posts";

export interface IPost {
  body?: string;
  id?: number;
  title?: string;
  userId?: number;
}

const PostRepository = {
  all: (params: HttpQuery): Promise<AxiosResponse<IPost[], unknown>> => {
    return http.get<IPost[]>(path, {
      params,
    });
  },

  find: (
    id: string,
    params: HttpQuery
  ): Promise<AxiosResponse<IPost, unknown>> => {
    return http.get<IPost>(`${path}/${id}`, {
      params,
    });
  },

  create: (
    data: IPost,
    params: HttpQuery
  ): Promise<AxiosResponse<IPost, unknown>> => {
    return http.post<IPost>(path, data, {
      params,
    });
  },

  update: (
    id: string,
    data: IPost,
    params: HttpQuery
  ): Promise<AxiosResponse<IPost, unknown>> => {
    return http.put<IPost>(`${path}/${id}`, data, {
      params,
    });
  },

  delete: (
    id: string,
    params: HttpQuery
  ): Promise<AxiosResponse<unknown, unknown>> => {
    return http.delete(`${path}/${id}`, {
      params,
    });
  },
};

export default PostRepository;
