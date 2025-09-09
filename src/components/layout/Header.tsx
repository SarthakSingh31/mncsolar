'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gradient-to-r from-primary-200/50 to-accent-200/50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 to-accent-50/30"></div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 48 48" 
                className="group-hover:scale-105 transition-transform duration-300"
              >
                {/* Background circle with gradient */}
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <circle cx="24" cy="24" r="22" fill="url(#bgGradient)" className="drop-shadow-lg" />
                
                {/* Sun rays */}
                <g stroke="url(#sunGradient)" strokeWidth="2" strokeLinecap="round">
                  <line x1="24" y1="8" x2="24" y2="12" />
                  <line x1="24" y1="36" x2="24" y2="40" />
                  <line x1="8" y1="24" x2="12" y2="24" />
                  <line x1="36" y1="24" x2="40" y2="24" />
                  <line x1="13.86" y1="13.86" x2="16.69" y2="16.69" />
                  <line x1="31.31" y1="31.31" x2="34.14" y2="34.14" />
                  <line x1="13.86" y1="34.14" x2="16.69" y2="31.31" />
                  <line x1="31.31" y1="16.69" x2="34.14" y2="13.86" />
                </g>
                
                {/* Sun center */}
                <circle cx="24" cy="24" r="8" fill="url(#sunGradient)" className="drop-shadow-md" />
                
                {/* Company initial 'M' */}
                <text 
                  x="24" 
                  y="29" 
                  textAnchor="middle" 
                  className="fill-white font-bold text-sm" 
                  style={{ fontSize: '14px' }}
                >
                  M
                </text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent leading-tight">
                MNC Solar
              </span>
              <span className="text-xs text-slate-500 font-medium -mt-0.5">
                Solar Solutions
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-2 font-semibold transition-all duration-300 group text-sm ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-slate-700 hover:text-primary-600'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 rounded-full ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </Link>
              );
            })}
          </nav>

          {/* Medium screens nav */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-slate-700 hover:text-primary-600'
                  }`}
                >
                  <span>{item.label}</span>
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 rounded-full ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <div className="h-4 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <Link
              href="/contact"
              className="relative overflow-hidden group px-6 py-2 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Book Appointment
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          <button
            className="md:hidden relative p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 shadow-md hover:shadow-lg group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">
              {isMenuOpen ? (
                <X className="h-5 w-5 text-primary-600 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-primary-200 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <nav className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group relative px-2 py-3 font-semibold transition-all duration-300 ${
                        isActive
                          ? 'text-primary-600'
                          : 'text-slate-700 hover:text-primary-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span>{item.label}</span>
                      <div className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 rounded-full ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}></div>
                    </Link>
                  );
                })}
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="relative overflow-hidden group w-full flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      Book Appointment
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
