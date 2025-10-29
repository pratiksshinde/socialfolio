'use client';

import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      description: "Developed a task management system for employees, allowing real-time task tracking. Implemented authentication & dynamic data handling, enhancing user experience.",
      tech: ["React.js", "HTML", "CSS", "Tailwind CSS", "Redux", "Context API"],
      link: "#",
      github: "#"
    }
  ];

  const skills = {
    frontend: ["Next.js", "React.js", "Material UI", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Sequelize"],
    data: ["MongoDB", "SQL", "PostgreSQL", "Redux"],
    versionControl: ["Git", "GitHub"],
    design: ["Power BI", "Figma", "Canva"]
  };

  const experience = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Codiasticsoft",
      period: "Jan 2025 - Present",
      description: [
        "Developed production-grade REST APIs using Node.js, Express, and Sequelize for service booking, user management, and admin control",
        "Integrated secure authentication mechanisms including JWT and OTP-based login for both users and admins",
        "Designed and built reusable frontend components using Next.js and Tailwind CSS, enhancing performance and responsiveness",
        "Collaborated closely with cross-functional teams to ensure timely feature delivery and adherence to modern coding standards"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology (B-Tech)",
      field: "Computer Science & Engineering",
      institution: "Maharashtra Institute of Technology",
      location: "Chh. Sambhajinagar",
      year: "2021",
      type: "graduation"
    },
    {
      id: 2,
      degree: "HSC",
      institution: "Devkaran Lakshminarayan College",
      location: "Bhusawal",
      percentage: "76.80%",
      year: "2019",
      type: "hsc"
    },
    {
      id: 3,
      degree: "SSC",
      institution: "Devkaran Lakshminarayan High School",
      location: "Bhusawal",
      percentage: "66.20%",
      year: "2017",
      type: "ssc"
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Business Intelligence & Power BI",
      issuer: "CloudThat Technologies",
      year: "2024"
    },
    {
      id: 2,
      name: "Core Java Certification",
      issuer: "Oracle",
      year: "2021"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-orange-500/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
              <CodeIcon className="text-orange-400 transition-colors duration-300 hover:text-orange-300" sx={{ fontSize: 28 }} />
              <span className="text-xl font-bold text-white">Pratik Shinde</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Contact</button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white transition-transform duration-300 hover:scale-110 hover:text-orange-400"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-slate-900/95 backdrop-blur-md">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300">Projects</button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300">Education</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6 animate-fade-in">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-orange-500/50">
                <PersonIcon sx={{ fontSize: 64, color: 'white' }} />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-500 hover:scale-105">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300">Pratik Shinde</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto transition-all duration-500 hover:text-gray-200">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto transition-all duration-500 hover:text-gray-300">
              Experienced in building scalable web apps using Next.js, React.js, Node.js, Express, and MySQL/MongoDB. Passionate about clean code, backend architecture, and creating user-friendly interfaces.
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50">
                Get In Touch
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-400/50">
                View Work
              </button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://github.com/pratiksshinde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <GitHubIcon sx={{ fontSize: 28 }} />
              </a>
              <a href="https://linkedin.com/in/pratiksshinde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <LinkedInIcon sx={{ fontSize: 28 }} />
              </a>
              <a href="mailto:pratikshinde9957@gmail.com" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <EmailIcon sx={{ fontSize: 28 }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 border border-orange-500/20 rounded-xl p-8 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 transition-all duration-300 hover:text-gray-100">
                I'm a passionate Full Stack Developer currently working at Codiasticsoft, where I specialize in building scalable web applications using modern technologies like Next.js, React.js, Node.js, and Express.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 transition-all duration-300 hover:text-gray-100">
                With expertise in both frontend and backend development, I focus on creating production-grade REST APIs, implementing secure authentication mechanisms, and designing responsive user interfaces that enhance the overall user experience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed transition-all duration-300 hover:text-gray-100">
                I'm passionate about clean code, backend architecture, and staying updated with the latest web development trends. I believe in writing maintainable code and following modern coding standards to deliver high-quality solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center space-x-2">
                <CodeIcon />
                <span>Frontend</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 text-orange-300 rounded-full text-sm transition-all duration-300 hover:bg-orange-600/40 hover:border-orange-400 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 cursor-default"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center space-x-2">
                <CodeIcon />
                <span>Backend</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 text-orange-300 rounded-full text-sm transition-all duration-300 hover:bg-orange-600/40 hover:border-orange-400 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 cursor-default"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data */}
            <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center space-x-2">
                <CodeIcon />
                <span>Data & State</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.data.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 text-orange-300 rounded-full text-sm transition-all duration-300 hover:bg-orange-600/40 hover:border-orange-400 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 cursor-default"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Version Control */}
            <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center space-x-2">
                <GitHubIcon />
                <span>Version Control</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.versionControl.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 text-orange-300 rounded-full text-sm transition-all duration-300 hover:bg-orange-600/40 hover:border-orange-400 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 cursor-default"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design & Analytics */}
            <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center space-x-2">
                <CodeIcon />
                <span>Design & Analytics</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 text-orange-300 rounded-full text-sm transition-all duration-300 hover:bg-orange-600/40 hover:border-orange-400 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 cursor-default"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div 
                key={exp.id} 
                className="bg-slate-900/50 border border-orange-500/20 rounded-xl p-8 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 rounded-full p-3 transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-orange-500/50">
                    <WorkIcon sx={{ fontSize: 28, color: 'white' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1 transition-all duration-300 hover:text-orange-400">{exp.role}</h3>
                    <p className="text-orange-400 mb-2 transition-all duration-300 hover:text-orange-300 text-lg">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4 transition-all duration-300 hover:text-gray-400">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-300 transition-all duration-300 hover:text-gray-100 flex items-start space-x-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-semibold text-white mb-3 transition-all duration-300 hover:text-orange-400">{project.title}</h3>
                <p className="text-gray-400 mb-4 transition-all duration-300 hover:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-xs transition-all duration-300 hover:bg-orange-900/50 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-all duration-300 hover:scale-110 hover:translate-x-1">
                    <LaunchIcon sx={{ fontSize: 18 }} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.github} className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-all duration-300 hover:scale-110 hover:translate-x-1">
                    <GitHubIcon sx={{ fontSize: 18 }} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">Education & Certifications</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-6 flex items-center space-x-2">
                <SchoolIcon />
                <span>Education</span>
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={edu.id} 
                    className="bg-slate-900/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-2 transition-all duration-300 hover:text-orange-400">
                      {edu.degree}
                      {edu.field && ` - ${edu.field}`}
                    </h4>
                    <p className="text-orange-400 mb-1 transition-all duration-300 hover:text-orange-300">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.location}</p>
                    <div className="flex justify-between items-center">
                      {edu.percentage && <span className="text-gray-400">Percentage: {edu.percentage}</span>}
                      <span className="text-gray-500 text-sm">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-6 flex items-center space-x-2">
                <EmojiEventsIcon />
                <span>Certifications</span>
              </h3>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div 
                    key={cert.id} 
                    className="bg-slate-900/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-2 transition-all duration-300 hover:text-orange-400">{cert.name}</h4>
                    <p className="text-orange-400 mb-1 transition-all duration-300 hover:text-orange-300">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 transition-all duration-500 hover:text-orange-400 hover:scale-105">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-8 transition-all duration-300 hover:text-gray-100">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="mailto:pratikshinde9957@gmail.com" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50">
              <EmailIcon sx={{ fontSize: 20 }} />
              <span>pratikshinde9957@gmail.com</span>
            </a>
      <a href="tel:+917972822918" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-400/50">
              <PhoneIcon sx={{ fontSize: 20 }} />
              <span>+91 7972822918</span>
            </a>
          </div>
          <div className="flex justify-center space-x-8 mt-8">
            <a href="https://github.com/pratiksshinde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <GitHubIcon sx={{ fontSize: 32 }} />
            </a>
            <a href="https://linkedin.com/in/pratiksshinde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </a>
            <a href="mailto:pratikshinde9957@gmail.com" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <EmailIcon sx={{ fontSize: 32 }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-orange-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 transition-all duration-300 hover:text-orange-400">
            © 2025 Pratik Shinde. Built with Next.js and Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm mt-2 transition-all duration-300 hover:text-gray-400">
            Designed & Developed by Pratik Shinde
          </p>
        </div>
      </footer>
    </div>
  );
}