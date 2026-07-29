function MovieCard({ movie, onSelect, darkMode }) {
  return (
    <div
      onClick={() => onSelect(movie.imdbID)}
      className={`rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border hover:border-yellow-400 ${
        darkMode
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-200 shadow-md'
      }`}
    >
      {/* Movie Poster */}
      <div className="relative">
        {movie.Poster !== 'N/A' ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-72 object-cover"
          />
        ) : (
          <div className={`w-full h-72 flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <span className="text-6xl">🎬</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-lg">
          {movie.Type.toUpperCase()}
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className={`font-bold text-lg leading-tight mb-1 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {movie.Title}
        </h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieCard