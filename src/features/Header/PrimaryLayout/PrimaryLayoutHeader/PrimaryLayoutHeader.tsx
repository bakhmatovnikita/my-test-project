import { Layout, Space } from "antd";
import { Header } from "../../../../components/Header";

export const PrimaryLayoutHeader = () => {
  return (
    <Layout.Header>
      <Space>
        <Header />
      </Space>
    </Layout.Header>
  );
};
