
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/calculator">Калькулятор</Link>
        <Link href="/password-generator">Генератор паролей</Link>
      </nav>
    </header>
  );
};


