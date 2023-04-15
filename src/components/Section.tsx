import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ children, title = "This is subheading" }: SectionProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Section;
