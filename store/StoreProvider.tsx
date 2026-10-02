"use client";

import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

import { finishAuthRestore, restoreAuth } from "@/features/auth/authSlice";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");

    if (!storedUser) {
      store.dispatch(finishAuthRestore());
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);

      if (typeof parsedUser.username !== "string" || typeof parsedUser.email !== "string") {
        localStorage.removeItem("auth_user");
        store.dispatch(finishAuthRestore());
        return;
      }

      store.dispatch(
        restoreAuth({
          username: parsedUser.username,
          email: parsedUser.email,
        }),
      );
    } catch {
      localStorage.removeItem("auth_user");
      store.dispatch(finishAuthRestore());
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
