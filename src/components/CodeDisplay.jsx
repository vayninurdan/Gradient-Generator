function CodeDisplay({ cssCode }) {
    return (
        <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
            <code>{cssCode}</code>
        </div>
    )
}

export default CodeDisplay; 