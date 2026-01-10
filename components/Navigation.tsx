'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <nav className="border-b border-blue-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="text-xl font-bold text-gradient hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded" 
              aria-label="Home - Portfolio"
            >
              Portfolio
            </Link>
            <div className="flex space-x-8" role="list">
              <Link 
                href="/" 
                className={`font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 ${
                  pathname === '/' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                )}
                <span className="absolute bottom-0 left-2 right-2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/about" 
                className={`font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 ${
                  pathname === '/about' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-current={pathname === '/about' ? 'page' : undefined}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                )}
                <span className="absolute bottom-0 left-2 right-2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/projects/mntn" 
                className={`font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 ${
                  pathname === '/projects/mntn' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-current={pathname === '/projects/mntn' ? 'page' : undefined}
              >
                MNTN
                {pathname === '/projects/mntn' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                )}
                <span className="absolute bottom-0 left-2 right-2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/projects/snap" 
                className={`font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 ${
                  pathname === '/projects/snap' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-current={pathname === '/projects/snap' ? 'page' : undefined}
              >
                Snap
                {pathname === '/projects/snap' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                )}
                <span className="absolute bottom-0 left-2 right-2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/projects/netflix" 
                className={`font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 ${
                  pathname === '/projects/netflix' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-current={pathname === '/projects/netflix' ? 'page' : undefined}
              >
                Netflix
                {pathname === '/projects/netflix' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                )}
                <span className="absolute bottom-0 left-2 right-2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

