import React, { useState } from "react";

export default function Countersearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search query");
      setResults(null);
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch(
        `http://localhost:3000/search?q=${encodeURIComponent(query)}`
      );
      if (!res.ok) {
        const errData = await res.json();
        setError(errData.error || "API error");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError("Network error: " + err.message);
    }
    setLoading(false);
  };

  // Optional: handle pressing Enter in the input to search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      <h1>Legal Articles Search</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search legal articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px 15px",
            width: "70%",
            fontSize: 16,
            marginRight: 10,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{
            padding: "10px 20px",
            fontSize: 16,
            cursor: loading ? "not-allowed" : "pointer",
            borderRadius: 4,
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {results && (
        <div>
          <h2>Results</h2>
          {results.results && results.results.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {results.results.map((item) => (
                <li
                  key={item.id}
                  style={{
                    marginBottom: 15,
                    paddingBottom: 10,
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <strong>{item.citation || "No citation"}</strong>
                  <br />
                  <a href={item.absolute_url} target="_blank" rel="noreferrer">
                    View Full Opinion
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
