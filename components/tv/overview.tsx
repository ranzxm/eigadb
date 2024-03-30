import React from "react";
import TitleSection from "../title-section";

interface OverviewProps {
  text: string;
}

export default function Overview({ text }: OverviewProps) {
  return (
    <div id="overview">
      <TitleSection>Overview</TitleSection>
      <p>{text}</p>
    </div>
  );
}
