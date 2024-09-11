import React from 'react';
import ProjectCard from './ProjectCard';

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  stars: number;
  forks: number;
  lastUpdated: string;
}

const projects: Omit<ProjectCardProps, 'stars' | 'forks' | 'lastUpdated'>[] = [
  {
    title: "Full Stack website for school-to-parent communication",
    description: "Manual communication with parents was inefficient and error-prone.",
    technologies: ["React.js", "Next.js", "Firebase", "Email Js"],
    githubLink: "https://github.com/labyeye/school-frontend",
    liveLink: "https://labhbothra.com"
  },
  {
    title: "Attendance App",
    description: "Full Stack AttendanceApp",
    technologies: ["React", "Firebase", "Node.js"],
    githubLink: "https://github.com/labyeye/attendance-app",
    liveLink: "#"
  }
];

const ProjectsDisplay: React.FC = () => {
  return (
    <div className="rounded-lg shadow-md md:col-span-2 lg:col-span-3">
      <div className="p-4">
        <h2 className="text-xl font-bold">Featured Projects</h2>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            stars={0} 
            forks={0} 
            lastUpdated={new Date().toISOString()}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsDisplay;