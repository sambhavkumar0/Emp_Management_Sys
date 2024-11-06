import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import FeaturesSection from './FeaturesSection'
import Footer from './Footer'
import Navbar from "./Navbar";

export default function Features() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <Navbar/>
      <FeaturesSection/>
      <Footer/>
    </div>
  )
}
