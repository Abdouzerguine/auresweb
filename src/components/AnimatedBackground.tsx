import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Matrix Digital Rain */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Matrix Columns */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute top-0 text-green-400/30 text-xs font-mono animate-matrix-fall"
            style={{
              left: `${(i * 5) + Math.random() * 5}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {Array.from({ length: 30 }, (_, j) => (
              <div
                key={j}
                className="animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.8 + 0.2
                }}
              >
                {Math.floor(Math.random() * 10)}
              </div>
            ))}
          </div>
        ))}
        
        {/* Additional Matrix Characters */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`char-${i}`}
            className="absolute text-green-500/40 text-lg font-mono animate-bounce"
            style={{
              left: `${10 + (i * 6) + Math.random() * 4}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {['0', '1', '01', '10', '001', '101'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Digital Grid */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#14b8a6', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <path
          d="M100,200 Q300,100 500,200 T900,200"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M100,400 Q300,300 500,400 T900,400"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M100,600 Q300,500 500,600 T900,600"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-50">
        <div className="w-full h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-pulse shadow-lg shadow-teal-500/30" />
      </div>
      <div className="absolute bottom-32 left-16 w-24 h-24 opacity-50">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default AnimatedBackground;