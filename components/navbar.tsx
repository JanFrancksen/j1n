import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded flex gap-x-4 items-center p-4 border drop-shadow-md bg-white uppercase z-50">
      <div className="flex items-center gap-x-4">
        <Link href="/" className="text-xl font-bold text-black">
          j1n.dev
        </Link>
      </div>
      <ul className="flex gap-x-4 items-center text-black text-sm">
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Projects</Link>
        </li>
        <li className="px-4 py-2 border border-neutral-500 hover:bg-neutral-300 transition-colors rounded">
          <Link href="">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
