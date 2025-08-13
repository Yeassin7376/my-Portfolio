import React from 'react';

const Skills = () => {
  const skills = {
    Frontend: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', logo: '/src/assets/tailwindcss.svg' }
    ],
    Backend: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ],
    Tools: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
    ]
  };

  return (
    <div id="skills" className="w-10/12 mx-auto py-5 md:py-10">
      <h2 className="text-xl md:text-4xl font-bold text-center my-5 md:my-10 text-amber-300 mb-12">Skills</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {skillList.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center group transition-transform duration-300 ease-out
                             hover:scale-110 hover:-translate-y-1">
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain transition-transform duration-300 ease-out group-hover:rotate-3" />
                  <span
                    className="mt-2 text-sm font-medium opacity-80 transition-colors duration-300
                               group-hover:text-amber-400 group-hover:opacity-100">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
