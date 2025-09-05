'use client';

export default function Grain() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, transparent 50%, rgba(10, 10, 10, 0.02) 50%),
          radial-gradient(circle at 75% 75%, transparent 50%, rgba(10, 10, 10, 0.015) 50%)
        `,
        backgroundSize: '4px 4px, 6px 6px',
      }}
    />
  );
}
