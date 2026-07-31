import { useState } from 'react'

function SearchBar({ onSearch, loading, darkMode }) {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('')

  const handleSearch = () => {
    if (query.trim() === '') return
    onSearch(query, year)
  }

  const inputClass = darkMode
    ? 'bg-gray-800 text-white border-gray-600 focus:border-yellow-400'
    : 'bg-white text-gray-900 border-gray-300 focus:border-yellow-500'

  return (
    <div className="flex flex-col gap-3 mb-8">
      {/* Main search row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for a movie..."
          className={`flex-1 px-4 py-3 rounded-xl border focus:outline-none text-base ${inputClass}`}
        />
        <div className="flex gap-3">
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
            className={`w-24 sm:w-32 px-3 py-3 rounded-xl border focus:outline-none ${inputClass}`}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="flex-1 sm:flex-none bg-yellow-400 text-gray-900 font-bold px-5 py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50"
          >
            {loading ? '...' : '🔍 Search'}
          </button>
        </div>
      </div>
      <p className={`text-sm text-center ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
        Try "Avengers", "Dangal", "Baahubali" — Add year for better results
      </p>
    </div>
  )
}

export default SearchBar