import React from "react";
import "./style.scss";

interface Props {
  children: React.ReactNode;
  columns?: "3" | "4";
}

export function Grid({ children, columns = '3' }: Props) {
  return (
    <div
      className={
        columns === "3" ? "grid grid--columns-3" : "grid grid--columns-4"
      }
    >
      {children}
    </div>
  );
}
