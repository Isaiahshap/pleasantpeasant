'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        height: isOpen ? 'auto' : '64px'
      }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black border border-pp-cream"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="w-80 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-display font-normal text-pp-cream hover:no-underline tracking-wide transition-colors duration-300 hover:text-white"
          >
            Pleasant Peasant
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pp-cream hover:text-white transition-colors duration-300 flex items-center space-x-2"
          >
            <span className="text-sm">Menu</span>
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>
        
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-pp-cream/20 mt-4">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-pp-cream hover:text-white transition-colors duration-300 font-display text-lg tracking-wide "
            >
              About
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
