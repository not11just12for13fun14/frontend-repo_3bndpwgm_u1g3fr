import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-900">Bluecrest University</h3>
            <p className="mt-2">Empowering learners to lead, innovate, and make a difference.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900">Explore</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="#programs" className="hover:text-blue-600">Programs</a></li>
                <li><a href="#campus" className="hover:text-blue-600">Campus Life</a></li>
                <li><a href="#admissions" className="hover:text-blue-600">Admissions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Resources</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="#visit" className="hover:text-blue-600">Visit</a></li>
                <li><a href="#apply" className="hover:text-blue-600">Apply</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right">
            <p>&copy; {new Date().getFullYear()} Bluecrest University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
