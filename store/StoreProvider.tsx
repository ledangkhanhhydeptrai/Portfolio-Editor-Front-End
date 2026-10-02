"use client";

import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import { restoreAuthRequest } from "@/features/auth/authSlice";

function AuthInitializer({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    store.dispatch(restoreAuthRequest());
  }, []);

  return <>{children}</>;
}

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
}
