import { useState } from 'react';
import './App.css'

const actionBtnClass = "flex-1 py-3.5 px-6 border-none rounded-[12px] text-base font-semibold cursor-pointer transition-all duration-200 ease-in-out";

function App() {
  const [color1, setColor1] = useState('#8B5CF6')
  const [color2, setColor2] = useState('#06B6D4')
  const [direction, setDirection] = useState('to right')
  const [copied, setCopied] = useState(false);


  const directions = [
    { value: 'to right', label: '→ Right' },
    { value: 'to left', label: '← Left' },
    { value: 'to bottom', label: '↓ Down' },
    { value: 'to top', label: '↑ Up' },
    { value: 'to bottom right', label: '↘ Diagonal' },
  ]

  const copiedText = "Copied!";

  // SVG gradient yön koordinatları
  const getGradientCoords = () => {
    switch (direction) {
      case 'to right': return { x1: '0%', y1: '0%', x2: '100%', y2: '0%' };
      case 'to left': return { x1: '100%', y1: '0%', x2: '0%', y2: '0%' };
      case 'to bottom': return { x1: '0%', y1: '0%', x2: '0%', y2: '100%' };
      case 'to top': return { x1: '0%', y1: '100%', x2: '0%', y2: '0%' };
      case 'to bottom right': return { x1: '0%', y1: '0%', x2: '100%', y2: '100%' };
      default: return { x1: '0%', y1: '0%', x2: '100%', y2: '0%' };
    }
  };
  const gradientCoords = getGradientCoords();

  const gradientStyle = {
    background: `linear-gradient(${direction}, ${color1}, ${color2})`
  }
  const cssCode = `background: linear-gradient(${direction}, ${color1}, ${color2});`

  const handleCopy = async () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }

  const handleRandom = () => {
    const randomColor = () => {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
    setColor1(randomColor());
    setColor2(randomColor());

    const randomDirectionValue = directions[Math.floor(Math.random() * directions.length)];
    setDirection(randomDirectionValue.value);

  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-br from-violet-500 to-cyan-500 bg-clip-text text-transparent">
          🎨 Gradient Generator
        </h1>
      </header>

      {/* Gradient Preview with Wave Animation */}
      <div className="wave-container h-[200px] rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-gray-900">
        <svg
          className="wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="waveGradient"
              x1={gradientCoords.x1}
              y1={gradientCoords.y1}
              x2={gradientCoords.x2}
              y2={gradientCoords.y2}
            >
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-5 p-6 bg-white/5 rounded-2xl border border-white/10">
        {/* Color Pickers */}
        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <label className="text-sm text-gray-500">Color 1</label>
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="w-[60px] h-[60px] border-none rounded-full cursor-pointer bg-transparent"
            />
            <span className="text-sm text-gray-400">{color1}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <label className="text-sm text-gray-500">Color 2</label>
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-[60px] h-[60px] border-none rounded-full cursor-pointer bg-transparent"
            />
            <span className="text-sm text-gray-400">{color2}</span>
          </div>
        </div>

        {/* Direction Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {directions.map((dir) => (
            <button
              key={dir.value}
              className={`py-2.5 px-4 rounded-lg text-sm text-white cursor-pointer transition-all duration-200 
                ${direction === dir.value
                  ? 'bg-gradient-to-br from-violet-500 to-cyan-500 border border-transparent'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              onClick={() => setDirection(dir.value)}
            >
              {dir.label}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
          <code>{cssCode}</code>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 items-start justify-between">
          <div className="flex flex-col">
            <button
              className={`${actionBtnClass} bg-white/10 hover:bg-white/15 text-white border border-white/20`}
              onClick={handleCopy}
            >
              Copy CSS
            </button>
            <p className={`mt-2 ml-4 text-green-500 text-sm transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
              {copiedText}
            </p>
          </div>
          <button
            className={`${actionBtnClass} bg-gradient-to-br from-violet-500 to-cyan-500 text-white border border-transparent hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(139,92,246,0.4)]`}
            onClick={handleRandom}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
