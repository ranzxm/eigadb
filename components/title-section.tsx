import React from "react";

interface TitleSectionProps {
  children?: React.ReactNode;
}
export default function TitleSection({ children }: TitleSectionProps) {
  return (
    <div className="relative my-5">
      <div className="absolute left-0 bg-cyan-800 h-full w-3"></div>
      <div className="text-lg sm:text-xl font-bold uppercase pl-5">{children}</div>
    </div>
  );
}
