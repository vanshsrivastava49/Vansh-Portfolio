import React, { useState, useEffect } from 'react';

const Typing = () => {
  const titles = ['Full Stack Developer', 'AI/ML Developer'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    const speed = deleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!deleting) {
          setTimeout(() => setDeleting(true), 1000);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, index]);

  return (
    <h1 className="typing-heading">
      {text}
      <span className="typing-cursor">|</span>
    </h1>
  );
};

export default Typing;
