'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">We encountered an error. Please try again.</p>
        <button
          onClick={reset}
          className="px-6 py-3 gradient-purple text-white rounded-full font-semibold hover:shadow-lg transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
