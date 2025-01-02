'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import './NavigationButton.css';

interface INavigationButtonProps {
  children: React.ReactNode;
  link: string;
  [key: string]: any;
}

export default function NavigationButton({ children, link, ...props }: INavigationButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button {...props} onClick={handleClick}>
      <h1 className='navigation-button'>{children}</h1>
    </button>
  );
}
