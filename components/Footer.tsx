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
              <a href="mailto:victor.li0936@gmail.com" className="hover:text-blue-600 transition-colors font-medium">
                victor.li0936@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-700">
              <a href="https://linkedin.com/in/victor-li-820b23229" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-medium">
                LinkedIn
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <a href="/about" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="/projects/mntn" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium">
                MNTN Project
              </a>
              <a href="/projects/snap" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Snap Project
              </a>
              <a href="/projects/netflix" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Netflix Project
              </a>
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

