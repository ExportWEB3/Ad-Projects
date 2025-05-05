import React, { useEffect, useRef } from "react";

export function UseFadeUpOnScroll(): void {
  const elementsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    elementsRef.current = document.querySelectorAll<HTMLElement>('.fade-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the visible class when the element is in the viewport
          entry.target.classList.add('visible');
        } else {
          // Optionally remove the visible class when the element is out of the viewport
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    elementsRef.current.forEach(el => observer.observe(el));

    return () => observer.disconnect(); // Cleanup
  }, []);
}