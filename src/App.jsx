import { useState } from 'react';
import Header from './components/Header';
import ColorPicker from './components/ColorPicker';
import DirectionButtons from './components/DirectionButtons';
import CodeDisplay from './components/CodeDisplay';
import ActionButtons from './components/ActionButtons';
import GradientPreview from './components/GradientPreview';
import Sidebar from './components/Sidebar';
import './App.css'

const actionBtnClass = "flex-1 py-3.5 px-6 border-none rounded-[12px] text-base font-semibold cursor-pointer transition-all duration-200 ease-in-out";

function App() {
  const [color1, setColor1] = useState('#8B5CF6')
  const [color2, setColor2] = useState('#06B6D4')
  const [direction, setDirection] = useState('to right');
  const [favorites, setFavorites] = useState([]);
  const [copied, setCopied] = useState(false);
  const copiedText = "Copied!";
  const [sidebarCopied, setSidebarCopied] = useState(false);

  const directions = [
    { value: 'to right', label: '→ Right' },
    { value: 'to left', label: '← Left' },
    { value: 'to bottom', label: '↓ Down' },
    { value: 'to top', label: '↑ Up' },
    { value: 'to bottom right', label: '↘ Diagonal' },
  ]

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

  const handleSave = () => {
    const newFavorite = {
      id: Date.now(),
      color1,
      color2,
      direction,
      cssCode
    };
    setFavorites([...favorites, newFavorite]);
  };

  const handleCopyFavorite = (favCssCode, favId) => {
    navigator.clipboard.writeText(favCssCode);
    setSidebarCopied(favId);
    setTimeout(() => setSidebarCopied(null), 2000);
  };
  return (
    <div className="flex min-h-screen bg-gray-950 text-white font-sans">
      <aside className="w-60 border-r border-white/10 bg-white/5 rounded-2xl backdrop-blur-md shrink-0">
        <Sidebar
          favorites={favorites}
          onCopyFavorite={handleCopyFavorite}
          sidebarCopied={sidebarCopied}
          copiedText={copiedText}
        />
      </aside>

      <main className="flex-1 flex flex-col items-center py-12 px-6 overflow-y-auto">
        <div className="w-full max-w-3xl flex flex-col gap-8">
          <Header />
          <GradientPreview
            direction={direction}
            color1={color1}
            color2={color2}
          />
          <div className="w-full flex flex-col gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <ColorPicker color1={color1} color2={color2} setColor1={setColor1} setColor2={setColor2} />
            <DirectionButtons directions={directions} direction={direction} setDirection={setDirection} />
            <CodeDisplay cssCode={cssCode} />
            <ActionButtons
              handleCopy={handleCopy}
              handleRandom={handleRandom}
              handleSave={handleSave}
              cssCode={cssCode}
              actionBtnClass={actionBtnClass}
              copied={copied}
              copiedText={copiedText}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
