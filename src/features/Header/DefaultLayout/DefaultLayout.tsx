import { Layout } from "antd";
import { DefaultLayoutProps } from "../PrimaryLayout/types";

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, ...rest } = props;

  return (
    <div>
      <Layout {...rest}>{children}</Layout>
    </div>
  );
};
export default DefaultLayout;
