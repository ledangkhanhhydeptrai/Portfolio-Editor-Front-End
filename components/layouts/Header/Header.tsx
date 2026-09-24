"use client";

import React from "react";

import { usePathname } from "next/navigation";

import HeaderContent from "./components/HeaderContent";

const Header: React.FC = () => {
  const pathname = usePathname();

  return <HeaderContent key={pathname} pathname={pathname} />;
};

export default Header;
