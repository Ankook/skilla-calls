import { $api } from "../../http";
import { IGetList } from "../../models/calls";

export const login = async (dto: any) => {
    const response = await $api.post('user/login', dto);
    localStorage.setItem('user_id', response.data.id);
    return response.data;
}

export const getListOfCalls = async (dto: IGetList) => {
  const response = await $api.post('/getList', dto);
  return response.data;
}