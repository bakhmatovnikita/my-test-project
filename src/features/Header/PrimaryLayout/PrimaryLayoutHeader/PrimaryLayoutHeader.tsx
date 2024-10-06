import { Layout, Space } from "antd";
import Header from "../../../../components/Header/Header";

const PrimaryLayoutHeader = () => {
  return (
    <Layout.Header>
      <Space>
        <Header />
      </Space>
    </Layout.Header>
  );
};
export default PrimaryLayoutHeader;
