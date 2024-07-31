// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-auto">
      <p className="text-center">
        {'© '}
        Tahrirchi.uz Clone {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
