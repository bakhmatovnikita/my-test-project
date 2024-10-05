import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Главная страница</Link>
        <Link href="/calculator">Калькулятор</Link>
        <Link href="/password-generator">Генератор паролей</Link>
      </nav>
    </header>
  );
};
