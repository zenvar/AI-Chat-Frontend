import serviceAxios from "./axios";


export const getUserInfo = (params) => {
  return serviceAxios({
    url: "/api/website/queryMenuWebsite",
    method: "post",
    params,
  });
};
export const loginapi = (data) => {
  return serviceAxios({
    url: "/test/login",
    method: "post",
    data,
  });
};

export const registry = (data) => {
  return serviceAxios({
    url: "/test/registry",
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