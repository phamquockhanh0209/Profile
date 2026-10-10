import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Đóng menu khi chuyển trang
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Đóng menu khi click ngoài
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('#mobile-navbar-collapse') && !e.target.closest('#navbar-toggler-btn')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const navLinks = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Sản phẩm & Dự án', path: '/projects' },
    { label: 'Về tôi', path: '/profile' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/15 bg-[#09090b]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 text-[#09090b] font-display font-bold flex items-center justify-center text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform">
            QK
          </div>
          <div>
            <span className="font-editorial text-base tracking-wide text-white group-hover:text-amber-300 transition-colors leading-tight">
              {personalInfo.name}
            </span>
            <span className="block text-[10px] tracking-widest uppercase text-amber-400/80 font-medium">
              Web & Google Sites
            </span>
          </div>
        </Link>

        {/* Desktop: Status Pill */}
        <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium border border-amber-500/20 bg-amber-500/5 text-amber-300">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'text-amber-300 bg-amber-500/10 font-medium border border-amber-500/20'
                    : 'text-neutral-400 hover:text-amber-200 hover:bg-neutral-800/40'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={personalInfo.contact.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 hover:brightness-110 transition-all shadow-sm"
          >
            Nhắn Zalo
          </a>
        </nav>

        {/* Mobile: Bootstrap-style Navbar Toggler (3 thanh gạch ngang) */}
        <button
          id="navbar-toggler-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-neutral-700/80 hover:border-amber-400/60 p-2 gap-1 focus:outline-none transition-all bg-neutral-900/60"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className={`w-4 h-0.5 bg-neutral-200 rounded-full transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-1.5 bg-amber-400' : ''
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-neutral-200 rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-neutral-200 rounded-full transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-1.5 bg-amber-400' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile: Bootstrap-style Navbar Collapse Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navbar-collapse"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-amber-500/15 bg-[#09090b]/98 backdrop-blur-xl shadow-2xl"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm transition-all ${
                      isActive
                        ? 'text-amber-300 bg-amber-500/15 font-semibold border-l-2 border-amber-400 pl-3'
                        : 'text-neutral-300 hover:text-amber-200 hover:bg-neutral-800/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-2 pb-1 border-t border-neutral-800/80 mt-2 flex flex-col gap-2">
                <a
                  href={personalInfo.contact.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 hover:brightness-110 transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Nhắn Zalo: {personalInfo.contact.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
