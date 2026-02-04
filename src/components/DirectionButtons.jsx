function DirectionButtons({ directions, direction, setDirection }) {
    return (
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
    )
}

export default DirectionButtons;