import { Link } from 'react-router';

const projects = [
  {
    id: 'library',
    name: 'Library Management',
    image: 'https://i.ibb.co.com/nHbNNRT/Screenshot-2025-08-14-123038.png',
    repo: 'https://github.com/Yeassin7376/library-management-client.git',
    live: 'https://b11a11-library-management.web.app/',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    description: 'Full-stack Library Management application where users and admins can manage books, issue/return, and track inventory.',
    challenges: 'Handling state synchronization between front-end and backend during concurrent book issue/returns.',
    improvements: 'Add user roles, advanced search, better UI/UX, and notifications.'
  },
  {
    id: 'hobbio',
    name: 'HobbyHub (Hobbio)',
    image: 'https://i.ibb.co.com/HvZPxpP/Screenshot-2025-08-14-122824.png',
    repo: 'https://github.com/Yeassin7376/hobbyhub-hobbio-client.git',
    live: 'https://b11a10-hobbyhub-auth.web.app/',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    description: 'Community hobby sharing platform where users can showcase, share, and join hobby events.',
    challenges: 'Implementing real-time updates and organizing event data efficiently.',
    improvements: 'Add messaging, profiles, and social media integration.'
  },
  {
    id: 'appstore',
    name: 'AppStore Clone',
    image: 'https://i.ibb.co.com/GfqQhLFT/Screenshot-2025-08-14-122653.png',
    repo: 'https://github.com/Yeassin7376/AppStore-client.git',
    live: 'https://a9-appstore-react-authentica.web.app',
    tech: ['React', 'Redux', 'Styled Components'],
    description: 'Front-end clone of an app store with listings, search, and detail views.',
    challenges: 'Managing complex state with Redux and ensuring UI responsiveness.',
    improvements: 'Add backend, real live data, search filters, and user authentication.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-10/12 mx-auto py-10 md:py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold text-center text-amber-300 mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* {projects.map(proj => (
            <div key={proj.id} className="card bg-base-100 shadow-xl image-full">
              <figure className="h-48 overflow-hidden">
                <img src={proj.image} alt={`${proj.name} screenshot`} className="object-cover w-full h-full" />
              </figure>
              <div className="card-body justify-end bg-opacity-50 ">
                <h3 className="card-title text-white">{proj.name}</h3>
                <div className="card-actions">
                  <Link
                    to={`/projects/${proj.id}`}
                    className="btn bg-gray-800 text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))} */}

          {projects.map((project) => (
            <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-slate-900 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              {/* Project Screenshot Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Project Details Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200">{project.name}</h3>
                <div className='flex items-center gap-4'>
                {
                  project.tech.map(tch=> <p className="mt-2 text-sm font-medium badge text-gray-200">{tch}</p> )
                }
                </div>
                
                <p className="mt-4 text-base text-gray-300">{project.description}</p>
              </div>

              {/* Buttons Section */}
              <div className="flex items-center justify-between p-6 pt-0">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 ease-in-out hover:bg-indigo-700">
                  Live Link
                </a>
                <Link
                  to={`/projects/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 ease-in-out hover:text-black hover:bg-gray-100">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
