import { useState } from 'react'

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('')

  const handleSearch = () => {
    if (query.trim() === '') return
    onSearch(query, year)
  }

  return (
    <div className="flex flex-col gap-3 mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for a movie..."
          className="flex-1 px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-lg"
        />
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year (optional)"
          className="w-36 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50"
        >
          {loading ? 'Searching...' : '🔍 Search'}
        </button>
      </div>
      <p className="text-gray-600 text-sm text-center">
        Try "Avengers", "Dangal", "Baahubali" — Add year for better results (e.g. PK + 2014)
      </p>
    </div>
  )
}

export default SearchBar