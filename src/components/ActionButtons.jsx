function ActionButtons({ handleCopy, handleRandom, copied, copiedText, actionBtnClass }) {
    return (
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
    )
}

export default ActionButtons;   