import {$api} from "../../http";

export const login = async (dto: IAuth) => {
    const response = await $api.post('user/login', dto);
    localStorage.setItem('user_id', response.data.id);
    return response.data;
}

export const getList = async (dto: IGetList) => {
  const response = await $api.post('/getList', dto);
  return response.data;
}