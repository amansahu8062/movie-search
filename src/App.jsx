import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import MovieDetail from './components/MovieDetail'

const API_KEY = a8981861 // replace with your OMDB key

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [detailLoading, setDetailLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  // Search movies
  const handleSearch = async (query, year) => {
    setLoading(true)
    setError('')
    setMovies([])
    setSearched(true)

    try {
      const yearParam = year ? `&y=${year}` : ''
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}${yearParam}&apikey=${API_KEY}`
      )
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        setError('No movies found! Try a different search.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  // Get full movie details
  const handleSelectMovie = async (imdbID) => {
    setDetailLoading(true)

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${API_KEY}`
      )
      const data = await response.json()
      setSelectedMovie(data)
    } catch (err) {
      setError('Could not load movie details.')
    }

    setDetailLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-2">
          🎬 Movie Search
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Search any movie and get full details!
        </p>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} loading={loading} />

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <p className="text-yellow-400 text-2xl animate-pulse">🎬 Searching movies...</p>
          </div>
        )}

        {/* Detail Loading */}
        {detailLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <p className="text-yellow-400 text-2xl animate-pulse">Loading details...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-8">
            <p className="text-red-400 text-lg">❌ {error}</p>
          </div>
        )}

        {/* Empty state */}
        {!searched && !loading && (
          <div className="text-center py-16">
            <p className="text-8xl mb-4">🎥</p>
            <p className="text-gray-400 text-xl">Search for any movie to get started!</p>
            <p className="text-gray-600 text-sm mt-2">Try "Avengers", "Baahubali", "Dangal", "Inception"</p>
          </div>
        )}

        {/* Movies Grid */}
        {movies.length > 0 && (
          <>
            <p className="text-gray-400 mb-4">{movies.length} movies found</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onSelect={handleSelectMovie}
                />
              ))}
            </div>
          </>
        )}

        {/* Movie Detail Popup */}
        {selectedMovie && (
          <MovieDetail
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}

      </div>
    </div>
  )
}

export default App