// Three UI variants in one file
// Variant 1: Dropdown UI
export function MedicineDropdownUI({ medicines, onSelect }) {
  return (
    <div className="dropdown-wrapper">
      <label>Select Medicine</label>

      <select
        onChange={(e) => onSelect(e.target.value)}
        className="dropdown"
      >
        <option value="">Choose medicine...</option>
        {medicines.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
}

// Variant 2: Autocomplete Suggestion UI
export function MedicineAutocompleteUI({ query, setQuery, suggestions, onSelect }) {
  return (
    <div className="p-4 max-w-xl mx-auto relative">
      <label className="block mb-2 text-lg font-bold">Search Medicine</label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 bg-gray-800 text-white rounded-xl"
        placeholder="Type medicine name..."
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-gray-900 border rounded-xl mt-2 max-h-60 overflow-y-auto">
          {suggestions.map((s) => (
            <li
              key={s}
              onClick={() => onSelect(s)}
              className="p-2 hover:bg-gray-700 cursor-pointer"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Variant 3: Premium Doctor UI
export function MedicinePremiumUI({ search, setSearch, onSearch }) {
  return (
    <div className="p-6 max-w-xl mx-auto flex gap-2 items-center bg-gray-900 rounded-2xl shadow-xl">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-3 bg-gray-800 text-white rounded-xl border border-gray-700"
        placeholder="Enter medicine (ex: acetaminophen)"
      />
      <button
        onClick={onSearch}
        className="px-5 py-3 bg-blue-600 rounded-xl text-white font-bold hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
