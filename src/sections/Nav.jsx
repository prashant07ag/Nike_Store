import {headerLogo} from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
const Nav = () => {
  return (
    <header className='px-5 py-5  absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={120} height={28}/>
        </a>
        <ul className='flex justify-center items-center gap-16 max-md:hidden'>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-600'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-md:block hover:shadow-3xl">
          <img src={hamburger} alt="menuicon"  width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav