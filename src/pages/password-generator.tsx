import type { NextPage } from "next";
import Head from "next/head";
import { PasswordGenerator } from "../components/Password";
import PrimaryLayout from "../features/Header/PrimaryLayout/PrimaryLayout";

const PasswordGeneratorPage: NextPage = () => {
  return (
    <PrimaryLayout>
      <div className="password-generator-page">
        <Head>
          <title>Генератор паролей</title>
        </Head>
        <h1>Генератор паролей</h1>
        <PasswordGenerator />
      </div>
    </PrimaryLayout>
  );
};

export default PasswordGeneratorPage;
