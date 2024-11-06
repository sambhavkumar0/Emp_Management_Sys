import { useState } from 'react'
import Navbar from "./Navbar";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AlertCircle } from 'lucide-react'
import Footer from './Footer'


const countries = [
  { code: 'US', dialCode: '+1', name: 'United States' },
  { code: 'GB', dialCode: '+44', name: 'United Kingdom' },
  { code: 'IN', dialCode: '+91', name: 'India' },
  { code: 'DE', dialCode: '+49', name: 'Germany' },
  { code: 'FR', dialCode: '+33', name: 'France' },
  { code: 'IT', dialCode: '+39', name: 'Italy' },
  { code: 'ES', dialCode: '+34', name: 'Spain' },
  { code: 'CA', dialCode: '+1', name: 'Canada' },
  { code: 'AU', dialCode: '+61', name: 'Australia' },
  { code: 'JP', dialCode: '+81', name: 'Japan' },
  { code: 'CN', dialCode: '+86', name: 'China' },
  { code: 'BR', dialCode: '+55', name: 'Brazil' },
  { code: 'RU', dialCode: '+7', name: 'Russia' },
  { code: 'KR', dialCode: '+82', name: 'South Korea' },
  { code: 'SG', dialCode: '+65', name: 'Singapore' },
].sort((a, b) => a.name.localeCompare(b.name));

// Error Popup Component
const ErrorPopup = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="bg-red-50 p-4 rounded-lg shadow-lg border border-red-100 flex items-start max-w-md">
        <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <div className="mt-2 text-sm text-red-700">{message}</div>
        </div>
        <button
          onClick={onClose}
          className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-100 inline-flex items-center justify-center h-8 w-8"
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'US',
    phoneNumber: '',
    message: ''
  })
  const [formError, setFormError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError('')

    if (!agreed) {
      setFormError('Please agree to the privacy policy before submitting.')
      return
    }

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
      setFormError('Please fill in all required fields.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.')
      return
    }

    // Phone number validation (basic)
    const phoneRegex = /^\+?[\d\s-]{8,}$/
    if (!phoneRegex.test(formData.phoneNumber)) {
      setFormError('Please enter a valid phone number.')
      return
    }

    // If all validations pass, log the data
    console.log('Form submitted successfully:', {
      ...formData,
      agreed
    })

    // Reset form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      country: 'US',
      phoneNumber: '',
      message: ''
    })
    setAgreed(false)
  }

  return (
    <div>
      <div className="bg-white">
       <Navbar/>
      </div>
      <main className="isolate">
    
        <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Need more information? Fill out the form below and we’ll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <select
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="absolute inset-y-0 left-0 h-full w-20 rounded-md border-0 bg-transparent bg-none pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.dialCode}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone"
                    autoComplete="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="agreed"
                    id="agreed"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <label htmlFor="agreed" className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </main>
      <ErrorPopup message={formError} onClose={() => setFormError('')} />
      <Footer />
    </div>
  )
}
