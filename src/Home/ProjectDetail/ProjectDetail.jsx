import { useParams, Link } from "react-router";


const projects = [
    {
      id: "library",
      name: "Library Management",
      image: "https://i.ibb.co.com/nHbNNRT/Screenshot-2025-08-14-123038.png",
      repo: "https://github.com/Yeassin7376/library-management-client.git",
      live: "https://b11a11-library-management.web.app/", 
      tech: ["React", "Node.js", "Express", "MongoDB"],
      description:
        "Full-stack Library Management application where users and admins can manage books, issue/return, and track inventory.",
      challenges:
        "Handling state synchronization between front-end and backend during concurrent book issue/returns.",
      improvements:
        "Add user roles, advanced search, better UI/UX, and notifications."
    },
    {
      id: "hobbio",
      name: "HobbyHub (Hobbio)",
      image: "https://i.ibb.co.com/HvZPxpP/Screenshot-2025-08-14-122824.png",
      repo: "https://github.com/Yeassin7376/hobbyhub-hobbio-client.git",
      live: "https://b11a10-hobbyhub-auth.web.app/",
      tech: ["React", "Firebase", "Tailwind CSS"],
      description:
        "Community hobby sharing platform where users can showcase, share, and join hobby events.",
      challenges:
        "Implementing real-time updates and organizing event data efficiently.",
      improvements:
        "Add messaging, profiles, and social media integration."
    },
    {
      id: "appstore",
      name: "AppStore Clone",
      image: "https://i.ibb.co.com/GfqQhLFT/Screenshot-2025-08-14-122653.png",
      repo: "https://github.com/Yeassin7376/AppStore-client.git",
      live: "https://a9-appstore-react-authentica.web.app",
      tech: ["React", "Redux", "Styled Components"],
      description:
        "Front-end clone of an app store with listings, search, and detail views.",
      challenges:
        "Managing complex state with Redux and ensuring UI responsiveness.",
      improvements:
        "Add backend, real live data, search filters, and user authentication."
    }
  ];

export default function ProjectDetail() {
  const { id } = useParams();
  const proj = projects.find(p => p.id === id);
  if (!proj) return <div className="p-8">Project not found.</div>;

  return (
    <section className="py-16 container mx-auto px-4">
      <Link to="/#projects" className="btn btn-ghost mb-4">← Back to Projects</Link>
      <h2 className="text-3xl font-bold mb-4">{proj.name}</h2>
      <img src={proj.image} alt={proj.name} className="w-full rounded-lg mb-6" />
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Tech Stack</h3>
        <ul className="list-disc list-inside">
          {proj.tech.map(t => <li key={t}>{t}</li>)}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Description</h3>
        <p>{proj.description}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Challenges</h3>
        <p>{proj.challenges}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Potential Improvements</h3>
        <p>{proj.improvements}</p>
      </div>
      <div className="flex gap-4">
        {proj.live && <a href={proj.live} target="_blank" rel="noopener" className="btn btn-success">Live Demo</a>}
        <a href={proj.repo} target="_blank" rel="noopener" className="btn btn-secondary">GitHub Repo</a>
      </div>
    </section>
  );
}
