import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { API_URL } from "../settings/constant";


const useAxios = () => {
  const { userTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    API_URL,
    headers: { Authorization: `Bearer ${userTokens?.access}` }
  });

  axiosInstance.interceptors.request.use(async req => {
    const user = jwt_decode(userTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    console.log(isExpired)
    if (!isExpired) return req;

    const response = await axios.post(`${API_URL}api/token/refresh/`, {
      refresh: userTokens.refresh
    });

    localStorage.setItem("userTokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;