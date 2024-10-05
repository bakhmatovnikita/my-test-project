import type { NextPage } from "next";
import Head from "next/head";
import { Calculator } from "../components/Calculator";
import { PrimaryLayout } from "../features/Header/PrimaryLayout";

const CalculatorPage: NextPage = () => {
  return (
    <PrimaryLayout>
      <div className="calculator-page">
        <Head>
          <title>Калькулятор</title>
        </Head>

        <h1>Калькулятор</h1>

        <div className="content">
          <div className="description">
            <p>
              Очень Простой калькулятор обычный - только стандартные функции
              калькулятора: сложение, вычитание, умножение и деление. Простой
              калькулятор работает на смартфонах и ПК даже без интернета, не
              требует установки, быстро загружается и работает онлайн.
            </p>
          </div>

          <Calculator />
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default CalculatorPage;
