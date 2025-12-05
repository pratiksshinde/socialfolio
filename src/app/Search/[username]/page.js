"use client";
import React, { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { getProfile } from '@/services/publicService';
import { useParams } from 'next/navigation';

function Profile() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    fetchResumeData(username);
  }, [username]);

  const fetchResumeData = async (username) => {
    try {
      const data = await getProfile({ username });
      setResumeData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="text-center relative z-10">
          <div className="w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-lg shadow-orange-500/50"></div>
          <p className="text-orange-400 text-2xl font-semibold animate-pulse">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-red-900/40 to-slate-900/40 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8 max-w-md shadow-2xl shadow-red-500/20">
          <div className="text-6xl mb-4 text-center">⚠️</div>
          <p className="text-red-400 text-lg mb-6 text-center">Error: {error}</p>
          <button
            onClick={fetchResumeData}
            className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 font-semibold"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Group skills into categories
  const groupedSkills = {
    frontend: [],
    backend: [],
    databases: [],
    tools: []
  };

  resumeData?.skills?.forEach(skill => {
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('react') || skillLower.includes('angular') || skillLower.includes('html') || skillLower.includes('css') || skillLower.includes('jquery') || skillLower.includes('exponent')) {
      groupedSkills.frontend.push(skill);
    } else if (skillLower.includes('node') || skillLower.includes('express') || skillLower.includes('spring') || skillLower.includes('maven')) {
      groupedSkills.backend.push(skill);
    } else if (skillLower.includes('mongo') || skillLower.includes('sql')) {
      groupedSkills.databases.push(skill);
    } else {
      groupedSkills.tools.push(skill);
    }
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend':
        return <CodeIcon sx={{ fontSize: 28 }} />;
      case 'backend':
        return <BuildIcon sx={{ fontSize: 28 }} />;
      case 'databases':
        return <StorageIcon sx={{ fontSize: 28 }} />;
      case 'tools':
        return <DesignServicesIcon sx={{ fontSize: 28 }} />;
      default:
        return <CodeIcon sx={{ fontSize: 28 }} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-orange-500/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
              <CodeIcon className="text-orange-400 transition-colors duration-300 hover:text-orange-300" sx={{ fontSize: 28 }} />
              <span className="text-xl font-bold text-white">{resumeData?.name?.split(' ')[0]}</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
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
            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300"
              >
                {item}
              </button>
            ))}
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
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300">
                {resumeData?.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 mb-4 font-bold">
              {resumeData?.experience?.[0]?.title || 'Software Engineer'}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto transition-all duration-500 hover:text-gray-300">
              {resumeData?.summary}
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-400/50"
              >
                View Work
              </button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href={`mailto:${resumeData?.email}`}
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <EmailIcon sx={{ fontSize: 28 }} />
              </a>
              <a
                href={`tel:${resumeData?.phone}`}
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <PhoneIcon sx={{ fontSize: 28 }} />
              </a>
              <a
                href="https://github.com/pratiksshinde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <GitHubIcon sx={{ fontSize: 28 }} />
              </a>
              <a
                href="https://linkedin.com/in/pratik-s1000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <LinkedInIcon sx={{ fontSize: 28 }} />
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
              <p className="text-gray-300 text-lg leading-relaxed transition-all duration-300 hover:text-gray-100">
                {resumeData?.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, skills], idx) => {
              if (skills.length === 0) return null;
              return (
                <div
                  key={category}
                  className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center space-x-2">
                    {getCategoryIcon(category)}
                    <span className="capitalize">{category}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {resumeData?.experience?.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-orange-500/20 rounded-xl p-8 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 rounded-full p-3 transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-orange-500/50">
                    <WorkIcon sx={{ fontSize: 28, color: 'white' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1 transition-all duration-300 hover:text-orange-400">{exp.title}</h3>
                    <p className="text-orange-400 mb-2 transition-all duration-300 hover:text-orange-300 text-lg">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4 transition-all duration-300 hover:text-gray-400">{exp.duration}</p>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line transition-all duration-300 hover:text-gray-100">{exp.description}</p>
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
            {resumeData?.projects?.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
                  <CodeIcon sx={{ fontSize: 64, color: 'white' }} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3 transition-all duration-300 hover:text-orange-400">{project.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed transition-all duration-300 hover:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-xs transition-all duration-300 hover:bg-orange-900/50 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center transition-all duration-500 hover:text-orange-400 hover:scale-105">Education</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {resumeData?.education?.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-orange-500/20 rounded-xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 rounded-full p-3 transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-orange-500/50">
                    <SchoolIcon sx={{ fontSize: 28, color: 'white' }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2 transition-all duration-300 hover:text-orange-400">
                      {edu.degree}
                    </h4>
                    <p className="text-orange-400 mb-1 transition-all duration-300 hover:text-orange-300">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 transition-all duration-500 hover:text-orange-400 hover:scale-105">Let&apos;s Work Together</h2>
          <p className="text-gray-300 text-lg mb-8 transition-all duration-300 hover:text-gray-100">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={`mailto:${resumeData?.email}`}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50"
            >
              <EmailIcon sx={{ fontSize: 20 }} />
              <span>{resumeData?.email}</span>
            </a>
            <a
              href={`tel:${resumeData?.phone}`}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-400/50"
            >
              <PhoneIcon sx={{ fontSize: 20 }} />
              <span>{resumeData?.phone}</span>
            </a>
          </div>
          <div className="flex justify-center space-x-8 mt-8">
            <a href="https://github.com/pratiksshinde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <GitHubIcon sx={{ fontSize: 32 }} />
            </a>
            <a href="https://linkedin.com/in/pratik-s1000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </a>
            <a href={`mailto:${resumeData?.email}`} className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <EmailIcon sx={{ fontSize: 32 }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-orange-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 transition-all duration-300 hover:text-orange-400">
            © 2025 {resumeData?.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 transition-all duration-300 hover:text-gray-400">
            Designed & Developed with passion
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Profile;