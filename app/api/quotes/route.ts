import { NextResponse } from 'next/server';

// Large pool of inspiring quotes - enough to keep it fresh
const curatedQuotes = [
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { content: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "Get busy living or get busy dying.", author: "Stephen King" },
  { content: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { content: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { content: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { content: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { content: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { content: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
  { content: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { content: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { content: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { content: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { content: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { content: "You learn more from failure than from success. Don't let it stop you.", author: "Unknown" },
  { content: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { content: "The best revenge is massive success.", author: "Frank Sinatra" },
  { content: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { content: "It is never too late to be what you might have been.", author: "George Eliot" },
  { content: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { content: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { content: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { content: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { content: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
  { content: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
  { content: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" },
  { content: "We must balance conspicuous consumption with conscious capitalism.", author: "Kevin Kruse" },
  { content: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
  { content: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { content: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { content: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", author: "Erma Bombeck" },
  { content: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", author: "Booker T. Washington" },
  { content: "Certain things catch your eye, but pursue only those that capture the heart.", author: "Ancient Indian Proverb" },
  { content: "We become what we think about.", author: "Earl Nightingale" },
  { content: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.", author: "Mark Twain" },
  { content: "Those who dare to fail miserably can achieve greatly.", author: "John F. Kennedy" },
  { content: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { content: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { content: "Nothing is impossible, the word itself says I'm possible!", author: "Audrey Hepburn" },
  { content: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
  { content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { content: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { content: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou" },
  { content: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { content: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" }
];

// Track recently shown quotes to avoid repetition
let lastShownIndices: number[] = [];

// Get 3 unique quotes, avoiding recently shown ones
export async function GET() {
  // Get available indices (excluding recently shown)
  const availableIndices = Array.from({ length: curatedQuotes.length }, (_, i) => i)
    .filter(i => !lastShownIndices.includes(i));

  // If we've shown too many quotes, reset the tracking
  if (availableIndices.length < 10) {
    lastShownIndices = [];
  }

  // Shuffle available quotes using Fisher-Yates
  const shuffled = availableIndices.sort(() => Math.random() - 0.5);

  // Pick 3 random quotes
  const selectedIndices = shuffled.slice(0, 3);
  const selectedQuotes = selectedIndices.map(i => curatedQuotes[i]);

  // Update tracking - keep last 15 quotes shown
  lastShownIndices = [...lastShownIndices, ...selectedIndices].slice(-15);

  return NextResponse.json({
    quotes: selectedQuotes,
    success: true
  });
}
