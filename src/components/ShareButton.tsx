import { useState, useRef, useEffect } from 'react';
import { FiShare2, FiCopy, FiCheck } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareOption {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [menuPosition, setMenuPosition] = useState<'right' | 'left' | 'center'>('right');
  const [menuLeftOffset, setMenuLeftOffset] = useState('0px');
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle menu positioning to avoid going off-screen
  useEffect(() => {
    const updatePosition = () => {
      if (isOpen && buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const menuWidth = window.innerWidth < 640 ? 192 : 224;
        const viewportWidth = window.innerWidth;

        // Check if menu fits on the right side
        const fitsRight = buttonRect.right + menuWidth <= viewportWidth;

        // Check if menu fits on the left side
        const fitsLeft = buttonRect.left - menuWidth >= 0;

        let position: 'right' | 'left' | 'center';
        let leftOffset: string;

        if (fitsRight) {
          position = 'right';
          leftOffset = '0px';
        } else if (fitsLeft) {
          position = 'left';
          leftOffset = `-${menuWidth}px`;
        } else {
          // If neither side fits, center it on the button
          position = 'center';
          leftOffset = `-${menuWidth / 2}px`;
        }

        setMenuPosition(position);
        setMenuLeftOffset(leftOffset);
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && buttonRef.current) {
        const target = event.target as Node;
        const isOutsideMenu = !menuRef.current.contains(target);
        const isOutsideButton = !buttonRef.current.contains(target);

        if (isOutsideMenu && isOutsideButton) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleCopyLink = () => {
    const portfolioUrl = window.location.origin;
    navigator.clipboard.writeText(portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const portfolioUrl = window.location.origin;
    const text = `Check out my portfolio: ${portfolioUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLinkedIn = () => {
    const portfolioUrl = window.location.origin;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`;
    window.open(linkedinUrl, '_blank');
  };

  const handleTwitter = () => {
    const portfolioUrl = window.location.origin;
    const text = `Check out my portfolio - built with React & Vite`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(portfolioUrl)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOptions: ShareOption[] = [
    {
      icon: <FiCopy className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: 'Copy Link',
      color: 'hover:text-slate-600 dark:hover:text-slate-300',
      onClick: handleCopyLink,
    },
    {
      icon: <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: 'WhatsApp',
      color: 'hover:text-green-500 dark:hover:text-green-400',
      onClick: handleWhatsApp,
    },
    {
      icon: <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      onClick: handleLinkedIn,
    },
    {
      icon: <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: 'Twitter',
      color: 'hover:text-sky-500 dark:hover:text-sky-400',
      onClick: handleTwitter,
    },
  ];

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      {/* Share Button */}
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/90 text-slate-950 shadow-lg shadow-slate-900/10 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-300 hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-cyan-300/50 dark:hover:shadow-cyan-500/10"
        aria-label="Share portfolio"
      >
        <FiShare2 className="h-4 w-4 sm:h-5 sm:w-5" />
      </motion.button>

      {/* Share Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-14 sm:top-16 w-48 sm:w-56 rounded-2xl border border-slate-200/70 bg-white/95 p-2 sm:p-3 shadow-xl shadow-slate-900/20 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/95 dark:shadow-slate-950/40"
            style={{
              left: menuLeftOffset
            }}
          >
            <div className="space-y-1 sm:space-y-2">
              <h3 className="px-2 sm:px-3 py-1 sm:py-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Share Portfolio
              </h3>
              {shareOptions.map((option) => (
                <motion.button
                  key={option.label}
                  onClick={() => {
                    option.onClick();
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex w-full items-center gap-2 sm:gap-3 rounded-lg px-2 sm:px-3 py-2 sm:py-3 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 ${option.color}`}
                >
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-slate-100 transition-colors duration-200 group-hover:bg-slate-200 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                    {copied && option.label === 'Copy Link' ? (
                      <FiCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    ) : (
                      option.icon
                    )}
                  </div>
                  <span className="font-medium text-xs sm:text-sm">
                    {copied && option.label === 'Copy Link' ? 'Copied!' : option.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-lg dark:bg-slate-800 pointer-events-none"
          >
            Share
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
