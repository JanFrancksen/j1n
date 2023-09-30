import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded flex gap-x-2 lg:gap-x-4 items-center p-4 border drop-shadow-md bg-white uppercase z-50">
      <Link href="#home" className="text-base lg:text-xl font-bold text-black">
        j1n.dev
      </Link>
      <ul className="flex gap-x-2 md:gap-x-4 items-center text-black text-xs md:text-sm">
        <li>
          <a href="#philosophy">Philosophy</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="px-2 py-1 lg:px-4 lg:py-2 border border-neutral-500 hover:bg-neutral-300 transition-colors rounded">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
