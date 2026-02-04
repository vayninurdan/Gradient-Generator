function Sidebar({ favorites, onCopyFavorite, sidebarCopied, copiedText }) {
    return (
        <div className="p-6 h-full flex flex-col gap-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-violet-400">
                ⭐ Favorites
            </h2>

            <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                {favorites.length === 0 ? (
                    <p className="text-gray-500 text-sm italic">No favorites yet...</p>
                ) : (
                    favorites.map((favorite) => (
                        <div
                            key={favorite.id}
                            onClick={() => onCopyFavorite(favorite.cssCode, favorite.id)}
                            className="h-12 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            style={{ background: `linear-gradient(${favorite.direction}, ${favorite.color1}, ${favorite.color2})` }}
                        >
                            <p className={`text-white text-sm transition-opacity text-center items-center justify-center flex h-full duration-300 ${sidebarCopied === favorite.id ? 'opacity-100' : 'opacity-0'}`}>
                                {copiedText}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Sidebar;