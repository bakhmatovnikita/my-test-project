import Link from "next/link";

const Header = () => {
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
export default Header;
