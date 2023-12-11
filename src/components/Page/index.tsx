import React from "react";
import { PageTitle, PageWrapper } from "./styles";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Page = ({ title, children }: Props) => {
  return (
    <PageWrapper>
      <PageTitle>{title}</PageTitle> {children || ""}
    </PageWrapper>
  );
};

export default Page;
