import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
      name: 'Employee Record Management',
      description: 'Efficiently manage employee records with comprehensive CRUD operations.',
      detailedDescription: 'Easily add, edit, delete, and view employee details including personal information, job roles, and salary, ensuring up-to-date records.',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Department and Role Management',
      description: 'Organize your workforce by managing departments and job roles.',
      detailedDescription: 'Add and assign departments and job roles to employees for better organizational structure and clarity across the company.',
      iconColor: 'text-green-600',
    },
    {
      name: 'Secure Admin Login',
      description: 'Ensure data security with a robust login system for administrators.',
      detailedDescription: 'Admin accounts are protected by secure authentication methods, granting access only to authorized personnel.',
      iconColor: 'text-purple-600',
    },
    {
      name: 'Advanced Search and Filtering',
      description: 'Quickly find specific employee data with advanced search and filter options.',
      detailedDescription: 'Use various search parameters to locate employees by department, role, salary, and more, simplifying data retrieval.',
      iconColor: 'text-orange-600',
    },
    {
      name: 'External REST API',
      description: 'Easily connect to external systems via a RESTful API.',
      detailedDescription: 'Allows seamless integration with other platforms, providing flexibility for expanding system functionality.',
      iconColor: 'text-indigo-600',
    },
    {
      name: 'JWT Authentication and Role-Based Access Control',
      description: 'Ensure enhanced security with JWT authentication and role-based permissions.',
      detailedDescription: 'Only authorized users can access specific data and functionalities based on their role, ensuring a secure environment.',
      iconColor: 'text-red-600',
    },
    {
      name: 'Automated Reporting',
      description: 'Generate detailed reports for better insight into workforce metrics.',
      detailedDescription: 'Gain insights through automated reporting on employee statistics, turnover, and other key metrics.',
      iconColor: 'text-yellow-600',
    },
  ];
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FeaturesSection() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-indigo-600">Features</h2>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Discover What Sets Us Apart
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl">
          Explore our unique features that enhance productivity and streamline your workflow.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-8 sm:gap-y-12 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-12">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative bg-white p-8 rounded-3xl ring-1 ring-gray-200 shadow-md"
          >
            <div className="flex items-center gap-x-3">
              <CheckIcon className={classNames(feature.iconColor, 'h-6 w-6')} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
            </div>
            <p className="mt-4 text-gray-600 text-base">{feature.description}</p>
            <p className="mt-2 text-gray-500 text-sm">{feature.detailedDescription}</p>
            <a
              href="#"
              className="mt-6 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
