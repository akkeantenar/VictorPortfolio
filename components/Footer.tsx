import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-blue-200/50 bg-white/80 backdrop-blur-md mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Victor Li</h3>
            <p className="text-sm text-gray-700">
              Senior UX/UI Engineer focused on AI-assisted prototyping and internal tools.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact</h3>
            <p className="text-sm text-gray-700 mb-2">
              <a 
                href="mailto:victor.li0936@gmail.com" 
                className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                victor.li0936@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-700">
              <a 
                href="https://linkedin.com/in/victor-li-820b23229" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Navigation</h3>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
              <Link href="/" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded w-fit">
                Home
              </Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded w-fit">
                About
              </Link>
              <Link href="/projects/mntn" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded w-fit">
                MNTN Project
              </Link>
              <Link href="/projects/snap" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded w-fit">
                Snap Project
              </Link>
              <Link href="/projects/netflix" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded w-fit">
                Netflix Project
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-200/50 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Victor Li. Built with Next.js and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}

