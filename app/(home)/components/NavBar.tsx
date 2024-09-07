import { socials } from '@/utils/data';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-400 -rotate-2">
        {' '}
        Wycliff Kimutai 🥷🏽
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => (
          <Link href={social.link} key={index} aria-label={social.label}>
            <social.Icon className='w-5 h-5 hover:scale-125 transition-all'/>
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default NavBar;
