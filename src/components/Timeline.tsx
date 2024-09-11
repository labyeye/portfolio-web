import React from 'react';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const educationItems: TimelineItem[] = [
  {
    type: 'education',
    title: 'Class X (CBSE)',
    organization: 'SelaQui International School',
    date: 'March 2019 - March 2020',
    description: 'Scored 90%',
    skills: ['Social Science', 'Science', 'Maths', 'Hindi']
  },
  {
    type: 'education',
    title: 'Class XII (CBSE)',
    organization: 'SelaQui International School',
    date: 'March 2021 - March 2022',
    description: 'Scored 90%',
    skills: ['Physics', 'Chemistry', 'Maths', 'Painting']
  },
  {
    type: 'education',
    title: 'Bachelor of Technology in Computer Science and Engineering',
    organization: 'Christ University',
    date: 'August 2022 - May 2026',
    description: 'CGPA - 9.5 SEM I -> SEM IV',
    skills: ['Database', 'Cryptography', 'Full Stack', 'Game Development', 'Project Management', 'Operating System']
  },
  
];

const experienceItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Web Developer',
    organization: 'IEEE Computer Society',
    date: 'Aug 2023 - Jan 2024 · 6 months',
    location: 'Bengaluru, India · Hybrid',
    description: 'Designed a website for IEEE Computer Society inc4 conference, optimising user experience and management with a team.',
    skills: ['PHP','JavaScript', 'HTML', 'CSS']
  },
  {
    type: 'experience',
    title: 'Web Developer',
    organization: 'Christ Incubation Center',
    date: 'April 2024 - July 2024 · 4 months',
    location: 'Bengaluru, India · Hybrid',
    description: 'Developed the Christ Incubation Center website to effectively showcase their initiatives and enhance online presence.',
    skills: ['PHP','JavaScript', 'HTML', 'CSS']
  },
  {
    type: 'experience',
    title: 'Frontend Devleoper',
    organization: 'TIE SSO',
    date: 'Aug 2024 - Oct 2024 · 2 months',
    location: 'Bengaluru, India · Hybrid',
    description: 'Contributed the TIE SSO India frontend, improving the UI and reducing support requests by 15%, in collaboration with a team.',
    skills: ['JavaScript', 'HTML', 'CSS','BootStrap']
  },
  {
    type: 'experience',
    title: 'App Developer',
    organization: 'Self',
    date: 'Aug 2023 - Present',
    location: 'Bengaluru, India · Hybrid',
    description: 'Launched four apps, including Notes Sphere, GradeMaster Pro, CalcMate Pro, and Background Remover App, all published on the App Store, enhancing user experience and functionality.',
    skills: ['JavaScript', 'HTML', 'CSS','API','Node.js','Express.js']
  }
];

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="mb-8 relative">
    <div className="absolute top-0 left-0 w-2 h-full bg-gray-200 dark:bg-gray-700" />
    <div className="ml-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="absolute left-0 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800" />
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{item.organization}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{item.date}</p>
      {item.location && (
        <p className="text-sm text-gray-500 dark:text-gray-500">{item.location}</p>
      )}
      {item.description && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
      )}
      {item.skills && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">My Career Path</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          {experienceItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
          {educationItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
