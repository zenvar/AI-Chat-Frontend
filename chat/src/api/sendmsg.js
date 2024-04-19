import serviceAxios from "./axios";


export const getUserInfo = (params) => {
  return serviceAxios({
    url: "/api/website/queryMenuWebsite",
    method: "post",
    params,
  });
};
export const login = (data) => {
  return serviceAxios({
    url: "/api/user/login",
    method: "post",
    data,
  });
};

export const sendmsg = (data) => {
    return serviceAxios(
        {
            url:"/api/chat",
            method:"post",
            data,
        }
    );
};