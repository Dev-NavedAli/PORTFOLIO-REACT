import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Stripe integration.',
      image: '/placeholder.svg',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['React', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: '/placeholder.svg',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS.',
      image: '/placeholder.svg',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['React', 'Tailwind CSS', 'TypeScript'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-[#FF7051] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-[#FF7051] bg-[#FF7051]/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FF7051] text-[#FF7051] px-3 py-2 rounded hover:bg-[#FF7051] hover:text-white transition"
                  >
                    <Github className="w-4 h-4 mr-2 inline" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF7051] text-white px-3 py-2 rounded hover:bg-[#FF7051]/90 transition"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 inline" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;