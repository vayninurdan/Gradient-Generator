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

  const directions = [
    { value: 'to right', label: '→ Right' },
    { value: 'to left', label: '← Left' },
    { value: 'to bottom', label: '↓ Down' },
    { value: 'to top', label: '↑ Up' },
    { value: 'to bottom right', label: '↘ Diagonal' },
  ]

  const [direction, setDirection] = useState('to right');

  const gradientStyle = {
    background: `linear-gradient(${direction}, ${color1}, ${color2})`
  }
  const cssCode = `background: linear-gradient(${direction}, ${color1}, ${color2});`

  const [copied, setCopied] = useState(false);
  const copiedText = "Copied!";

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
      <Sidebar />
      <Header />
      <GradientPreview direction={direction} color1={color1} color2={color2} />
      <div className="flex flex-col gap-5 p-6 bg-white/5 rounded-2xl border border-white/10">
        <ColorPicker color1={color1} color2={color2} setColor1={setColor1} setColor2={setColor2} />
        <DirectionButtons directions={directions} direction={direction} setDirection={setDirection} />
        <CodeDisplay cssCode={cssCode} />
        <ActionButtons handleCopy={handleCopy} handleRandom={handleRandom} cssCode={cssCode} actionBtnClass={actionBtnClass} copied={copied} copiedText={copiedText} />
      </div>
    </div>
  )
}

export default App
