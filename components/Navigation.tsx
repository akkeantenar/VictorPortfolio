import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="border-b border-blue-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gradient hover:scale-105 transition-transform" aria-label="Home - Portfolio">
            Portfolio
          </Link>
          <div className="flex space-x-8" role="list">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group" aria-current="page">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects/mntn" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              MNTN
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects/snap" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Snap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects/netflix" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Netflix
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

