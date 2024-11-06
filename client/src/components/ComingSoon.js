import { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
export default function ComingSoon() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar/>
        
      <main className="relative isolate px-6 pt-14 lg:px-8 text-center">
        {/* Background Shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Coming Soon Content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Coming Soon
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
            Our website is currently under construction. Stay tuned for updates!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
