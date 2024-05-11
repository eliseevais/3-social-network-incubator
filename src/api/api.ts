import axios from "axios";
import {UserType} from "../redux/store-all-props-types";

const instance = axios.create({

  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7baa0947-f1d6-498f-bd5d-ed507ad6475a"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<{
      totalCount: number,
      items: UserType[]
    }>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userId: number) {
    return instance.post(`/follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`/follow/${userId}`)
  },
  getProfile(userId: number) {
    return instance.get(`/profile/${userId}`)
  }
}

export const authAPI = {
  me() {
    return instance.get(`/auth/me`)
  }
}
