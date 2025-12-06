'use client';

import { useState, useEffect } from 'react';

interface Quote {
  content: string;
  author: string;
}

// Backup quotes in case the API is down or slow
// TODO: Maybe expand this list later
const inspirationalQuotes: Quote[] = [
  {
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    content: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    content: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    content: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    content: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    content: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  }
];

// Get first 3 quotes as default (deterministic for SSR)
const defaultQuotes = inspirationalQuotes.slice(0, 3);

export default function InspirationalQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>(defaultQuotes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch quotes from API
  // showLoading: only show loading indicator when user manually clicks refresh
  const fetchQuotes = async (showLoading: boolean = false) => {
    try {
      if (showLoading) {
        setLoading(true);
      }
      setError(null);

      // Fetch quotes from our Next.js API route
      const response = await fetch('/api/quotes');

      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }

      const data = await response.json();

      if (data.quotes && data.quotes.length > 0) {
        setQuotes(data.quotes);
        setError(null);
      } else {
        throw new Error('No quotes returned');
      }
    } catch (err) {
      // Silently fall back to random curated quotes
      setQuotes(getRandomQuotes());
      setError(null);
    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  };

  // Load quotes when component mounts and set up auto-refresh
  useEffect(() => {
    // Initial load without showing loading state
    fetchQuotes(false);

    // Auto-refresh every 20 seconds in the background
    const refreshInterval = setInterval(() => {
      fetchQuotes(false); // Silent refresh
    }, 20000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  // Get 3 random quotes from the curated list
  function getRandomQuotes(): Quote[] {
    const shuffled = [...inspirationalQuotes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  // Manual refresh handler - only this shows loading
  const handleManualRefresh = () => {
    fetchQuotes(true);
  };

  return (
    <section id="quotes" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Inspirational Quotes
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Words of wisdom to uplift and inspire
          </p>
          <button
            onClick={handleManualRefresh}
            disabled={loading}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {loading ? 'Loading...' : 'Get New Quotes'}
          </button>
        </div>

        {error && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-4 rounded-lg text-center max-w-2xl mx-auto mb-8">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading new quotes...</p>
            </div>
          ) : (
            quotes.map((quote, index) => (
              <div
                key={`${quote.content.substring(0, 20)}-${index}`}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 flex flex-col opacity-0 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-grow">
                  <svg
                    className="w-10 h-10 text-pink-500 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {quote.content}
                  </p>
                </div>
                <p className="text-pink-600 font-semibold text-right">
                  — {quote.author}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
