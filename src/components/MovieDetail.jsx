function MovieDetail({ movie, onClose }) {
  if (!movie) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative">
          {movie.Poster !== 'N/A' ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
            />
          ) : (
            <div className="w-full h-48 sm:h-64 bg-gray-800 flex items-center justify-center rounded-t-2xl">
              <span className="text-8xl">🎬</span>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black bg-opacity-60 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg hover:bg-opacity-80 transition"
          >
            ✕
          </button>

          {/* IMDB Rating badge */}
          {movie.imdbRating !== 'N/A' && (
            <div className="absolute bottom-3 left-3 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-lg flex items-center gap-1 text-sm">
              ⭐ {movie.imdbRating} / 10
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">

          {/* Title and Year */}
          <h2 className="text-white text-xl md:text-3xl font-bold mb-2">{movie.Title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-700 text-gray-300 text-xs sm:text-sm px-3 py-1 rounded-full">{movie.Year}</span>
            <span className="bg-gray-700 text-gray-300 text-xs sm:text-sm px-3 py-1 rounded-full">{movie.Rated}</span>
            <span className="bg-gray-700 text-gray-300 text-xs sm:text-sm px-3 py-1 rounded-full">⏱️ {movie.Runtime}</span>
            <span className="bg-yellow-400 text-gray-900 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">{movie.Genre}</span>
          </div>

          {/* Plot */}
          <div className="mb-4">
            <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-2">📝 Plot</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{movie.Plot}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">

            <div className="bg-gray-800 rounded-xl p-3 md:p-4">
              <h4 className="text-yellow-400 font-bold mb-2 text-sm md:text-base">🎬 Director</h4>
              <p className="text-gray-300 text-xs md:text-sm">{movie.Director}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-3 md:p-4">
              <h4 className="text-yellow-400 font-bold mb-2 text-sm md:text-base">✍️ Writer</h4>
              <p className="text-gray-300 text-xs md:text-sm">{movie.Writer}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-3 md:p-4">
              <h4 className="text-yellow-400 font-bold mb-2 text-sm md:text-base">🌍 Country</h4>
              <p className="text-gray-300 text-xs md:text-sm">{movie.Country}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-3 md:p-4">
              <h4 className="text-yellow-400 font-bold mb-2 text-sm md:text-base">🗣️ Language</h4>
              <p className="text-gray-300 text-xs md:text-sm">{movie.Language}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-3 md:p-4">
              <h4 className="text-yellow-400 font-bold mb-2 text-sm md:text-base">📦 Box Office</h4>
              <p className="text-gray-300 text-xs md:text-sm">{movie.BoxOffice !== 'N/A' ? movie.BoxOffice : 'Not Available'}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-3 md:p-4">
              <h4 className="text-yellow-400 font-bold mb-2 text-sm md:text-base">🏆 Awards</h4>
              <p className="text-gray-300 text-xs md:text-sm">{movie.Awards}</p>
            </div>

          </div>

          {/* Cast */}
          <div className="bg-gray-800 rounded-xl p-3 md:p-4 mb-4">
            <h4 className="text-yellow-400 font-bold mb-3 text-sm md:text-base">🎭 Cast</h4>
            <div className="flex flex-wrap gap-2">
              {movie.Actors.split(',').map((actor, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 text-xs sm:text-sm px-3 py-1 rounded-full"
                >
                  {actor.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Ratings */}
          {movie.Ratings && movie.Ratings.length > 0 && (
            <div className="bg-gray-800 rounded-xl p-3 md:p-4">
              <h4 className="text-yellow-400 font-bold mb-3 text-sm md:text-base">⭐ Ratings</h4>
              <div className="flex flex-wrap gap-4">
                {movie.Ratings.map((rating, index) => (
                  <div key={index} className="text-center">
                    <p className="text-white font-bold text-base md:text-lg">{rating.Value}</p>
                    <p className="text-gray-400 text-xs">{rating.Source}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default MovieDetail
