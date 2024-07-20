import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is intersecting:', entry.target);
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elementsRef.current.forEach(element => observer.observe(element));

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach(element => observer.unobserve(element));
      }
    };
  }, [callback, options]);

  const addElement = (element) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  return addElement;
};

export default useIntersectionObserver;


