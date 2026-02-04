function ColorPicker({ color1, color2, setColor1, setColor2 }) {
    return (
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
    )
}

export default ColorPicker;