
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <section
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl">
          📚
        </div>

        <h1 className="text-xl font-semibold text-gray-900">
          Preparing your bookstore
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Getting your next great read ready...
        </p>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-amber-600" />
        </div>
      </section>
    </main>
  );
}

