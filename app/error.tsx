'use client'

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4">We're sorry, but we couldn't load the site.</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-500"
      >
        Try again
      </button>
    </div>
  );
}