import React from 'react';
import './NavigationButton.css'

interface INavigationButtonProps {
  children: React.ReactNode;
  link: string;
  [key: string]: any;
}

export default function NavigationButton({children, link, ...props }: INavigationButtonProps) {
  return (
    <button {...props}>
      <a href={link}></a>
      <h1 className='navigation-button'>{children}</h1>
    </button>
  );
}