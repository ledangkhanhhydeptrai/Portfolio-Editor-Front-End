import React from "react";

import { Slide, SlideProps } from "@mui/material";

interface SlideTransitionsProps extends Omit<
  SlideProps,
  "direction" | "children"
> {
  children: React.ReactElement;
}

export default function SlideTransitions({
  children,
  ...props
}: SlideTransitionsProps) {
  return (
    <Slide
      easing={{
        enter: "cubic-bezier(0.22, 1, 0.36, 1)",
        exit: "ease-in"
      }}
      {...props}
      direction="left"
    >
      {children}
    </Slide>
  );
}
