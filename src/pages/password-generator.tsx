
import type { NextPage } from 'next';
import Head from 'next/head';
import { PasswordGenerator } from '../components/Password';

const PasswordGeneratorPage: NextPage = () => {
  return (
    <div className="password-generator-page">
      <Head>
        <title>Генератор паролей</title>
      </Head>
      <h1>Генератор паролей</h1>
      <PasswordGenerator />
    </div>
  );
};

export default PasswordGeneratorPage;

