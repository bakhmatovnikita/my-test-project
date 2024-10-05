import { LayoutProps } from 'antd';

export type DefaultLayoutProps = LayoutProps & {
  loading?: boolean;
};

export type PrimaryLayoutProps = DefaultLayoutProps & {
  contentWrapperClassName?: string;
  contentClassName?: string;
};
