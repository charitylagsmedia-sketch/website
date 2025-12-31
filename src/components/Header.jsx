import React from 'react';
import cmnLogo from '../assets/logos/cmnLogo.svg';
import hamburgerMenu from '../assets/icons/hamburgerMenu.svg';
import { motion } from 'motion/react';
import close from '../assets/icons/whiteClose.svg';

export default function Header() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const links = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Acknowledgements', id: 'acknowledgement' },
    { name: 'Team', id: 'team' },
    { name: 'Contact Us', id: 'contactUs' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 90;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setToggleMenu(false);
  };

  return (
    <nav className="fixed top-0 z-20 w-full">
      <div className="flex justify-between p-6">
        <button onClick={() => {scrollToSection('hero')}}>
          <img src={cmnLogo} alt="CMN Logo" className="h-14" />
        </button>

        <button onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? 
          <img src={close} alt="Close Menu" className="h-14 w-14 rotate-90" /> 
            :
          <img src={hamburgerMenu} alt="Menu" className="h-14 w-14" />
          }
        </button>
      </div>

      {toggleMenu && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{opacity:1, y:20}} className="absolute right-5 top-20 w-72 bg-black/90 rounded-lg">
          {links.map((link) => (
            <div key={link.name} className="p-4 border-b border-white/20">
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-white font-quantico text-xl w-full text-left"
              >
                {link.name}
              </button>
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
