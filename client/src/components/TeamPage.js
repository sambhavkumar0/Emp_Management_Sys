import { useState } from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
// Example team members (you can replace these with actual data)
const team = [
  {
    name: 'Satya Suranjeet Jena',
    role: 'Full-Stack Developer',
    imageUrl: 'https://i.ibb.co/Vt7h61w/profile-pic.png',
    bio: 'Passionate developer with experience in React, Tailwind CSS, Spring, and AI/ML solutions.',
    id: '2141010033',
  },
  {
    name: 'Kanha Jena',
    role: 'Repo Manager',
    imageUrl: 'https://i.ibb.co/pZ8Z8C0/20240831-205332-903.jpg',
    bio: 'Experienced in managing large codebases and ensuring smooth collaboration on GitHub.',
    id: '2141010034',
  },
  {
    name: 'Prashant Kumar Sah',
    role: 'Database Expert',
    imageUrl: 'https://i.ibb.co/HtJKxnT/IMG-6598.png',
    bio: 'Specializes in database design, optimization, and management for scalable applications.',
    id: '2141019505',
  },
  {
    name: 'Aditya Thakur',
    role: 'Backend Developer (Spring Boot Expert)',
    imageUrl: 'https://i.ibb.co/ZKd8YxW/1000041075.jpg',
    bio: 'Backend developer with expertise in Spring Boot, building efficient and robust APIs.',
    id: '2141020016',
  },
];


export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar/>

      {/* Add padding to the main content */}
      <main className="pt-24 pb-16 px-6 lg:px-8 mt-5">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Meet Our Team
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Passionate professionals dedicated to driving innovation and collaboration.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                src={member.imageUrl}
                alt={member.name}
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h2>
              <p className="text-indigo-600 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
