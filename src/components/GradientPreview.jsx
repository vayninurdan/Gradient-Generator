function GradientPreview({ direction, color1, color2 }) {

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

    return (
        <div className="wave-container w-full h-[200px] rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-gray-900">
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
    )
}

export default GradientPreview;