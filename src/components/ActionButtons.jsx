function ActionButtons({ handleCopy, handleRandom, handleSave, copied, copiedText, actionBtnClass }) {
    const gradientBtnClass = `${actionBtnClass} bg-gradient-to-br from-violet-500 to-cyan-500 text-white border-transparent hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(139,92,246,0.4)]`;

    return (
        <div className="flex gap-4 w-full items-start">
            <div className="flex flex-col w-44 shrink-0">
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
            <div className="flex flex-1 gap-4">
                <button className={gradientBtnClass} onClick={handleRandom}>
                    Random
                </button>
                <button className={gradientBtnClass} onClick={handleSave}>
                    Save to Favorites!
                </button>
            </div>
        </div>
    )
}

export default ActionButtons;