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
        threshold: 0.2,  // 50%以上表示されたとき
        rootMargin: '0px 0px -100px 0px',  // 50px手前で反応
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sections]);

  return activeSection;
};
