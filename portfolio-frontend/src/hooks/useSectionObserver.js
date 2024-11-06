// useSectionObserver.js
import { useEffect, useState } from 'react';

export const useSectionObserver = (sections) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: sections.id === 'PLUGIN_DOWNLOAD' || sections.id === 'PLUGIN_POST' ? 0.05 : 0,
        rootMargin: sections.id === 'PLUGIN_DOWNLOAD' || sections.id === 'PLUGIN_POST' ? '0px 0px -60% 0px' : '0px 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sections]);

  return activeSection;
};
