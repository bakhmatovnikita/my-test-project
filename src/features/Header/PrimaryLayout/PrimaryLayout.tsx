import { Layout } from "antd";
import { PrimaryLayoutProps } from "./types";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import PrimaryLayoutHeader from "./PrimaryLayoutHeader/PrimaryLayoutHeader";

const PrimaryLayout = (props: PrimaryLayoutProps) => {
  const { children, ...rest } = props;

  return (
    <DefaultLayout {...rest}>
      <PrimaryLayoutHeader />
      <Layout.Content>{children}</Layout.Content>
    </DefaultLayout>
  );
};
export default PrimaryLayout;
