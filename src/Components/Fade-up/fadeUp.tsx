import React, { useEffect, useRef, useState } from "react";

export function UseFadeUpOnScroll(): void {
  const elementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useEffect(() => {
    elementsRef.current = document.querySelectorAll<HTMLElement>('.fade-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const currentScrollY = window.scrollY;

        if (entry.isIntersecting && currentScrollY > lastScrollY) {
          // Add the visible class only when scrolling down
          entry.target.classList.add('visible');
        }
      });

      // Update the last scroll position
      setLastScrollY(window.scrollY);
    }, {
      threshold: 0.1,
    });

    elementsRef.current.forEach(el => observer.observe(el));

    return () => observer.disconnect(); // Cleanup
  }, [lastScrollY]); // Re-run effect when scroll position changes
};