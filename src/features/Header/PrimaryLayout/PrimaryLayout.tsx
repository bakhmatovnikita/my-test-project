import { Layout, Spin } from "antd";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { PrimaryLayoutHeader } from "./PrimaryLayoutHeader/PrimaryLayoutHeader";
import { PrimaryLayoutProps } from "./types";

export const PrimaryLayout = (props: PrimaryLayoutProps) => {
  const { children, ...rest } = props;

  return (
    <DefaultLayout {...rest}>
      <PrimaryLayoutHeader />
      <Layout.Content>{children}</Layout.Content>
    </DefaultLayout>
  );
};
