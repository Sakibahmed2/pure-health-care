"use server";

import { TLoginFormData } from "@/app/login/page";

export const userLogin = async (data: TLoginFormData) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();

  return userInfo;
};
