import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Compass, FolderKanban } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingDock() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [clickedIdx, setClickedIdx] = useState(null);

  const items = [
    {
      label: 'Trang chủ',
      path: '/',
      icon: <Home className="w-4 h-4" />,
      action: () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: 'Sản phẩm',
      path: '/projects',
      icon: <FolderKanban className="w-4 h-4" />,
      action: () => {
        navigate('/projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: 'Về tôi',
      path: '/profile',
      icon: <Compass className="w-4 h-4" />,
      action: () => {
        navigate('/profile');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
  ];

  const handleClick = (item, idx) => {
    // Trigger bounce animation
    setClickedIdx(idx);
    setTimeout(() => setClickedIdx(null), 500);
    item.action();
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="flex items-end gap-2 px-3 py-2.5 rounded-full bg-[#111114]/90 text-neutral-300 border border-amber-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-xl"
        role="navigation"
        aria-label="Thanh điều hướng nổi"
      >
        {items.map((item, idx) => {
          const isActive = !item.isTheme && location.pathname === item.path;
          const isHovered = hoveredIdx === idx;
          const isClicked = clickedIdx === idx;

          return (
            <div
              key={idx}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.88 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap bg-[#18181c] text-amber-200 border border-amber-500/30 shadow-lg pointer-events-none"
                  >
                    {item.label}
                    {/* Tooltip arrow */}
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[#18181c] border-r border-b border-amber-500/30 rotate-45"></span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Button with jump-up effect */}
              <motion.button
                onClick={() => handleClick(item, idx)}
                aria-label={item.label}
                animate={
                  isClicked
                    ? { y: [-14, 0], scale: [1.18, 1] }
                    : isHovered
                    ? { y: -8, scale: 1.1 }
                    : isActive
                    ? { y: -4, scale: 1.05 }
                    : { y: 0, scale: 1 }
                }
                transition={
                  isClicked
                    ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                    : { type: 'spring', stiffness: 400, damping: 18 }
                }
                className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                  isActive
                    ? 'bg-gradient-to-tr from-amber-500 to-amber-300 text-neutral-950 font-bold shadow-md'
                    : 'text-neutral-400 hover:text-amber-200 hover:bg-neutral-800/80'
                }`}
              >
                {item.icon}
              </motion.button>

              {/* Active dot indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-amber-400"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
