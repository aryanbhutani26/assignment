import React from 'react';

export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M10 10H16V13H13V16H15V19H13V22H10V10Z"
        fill="hsl(var(--primary-foreground))"
      />
      <path
        d="M18 10H24V13H21V16H23V19H18V10Z"
        fill="hsl(var(--primary-foreground))"
      />
    </svg>
  );
}
