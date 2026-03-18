export default function Loading() {
  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        {/* Spinner */}
        <div className="border-muted border-t-foreground h-10 w-10 animate-spin rounded-full border-4" />

        {/* Title */}
        <h1 className="text-xl font-semibold">Waking up the server…</h1>

        {/* Explanation */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          This app runs on a free server that goes to sleep when inactive.
          <br />
          It usually takes{" "}
          <span className="text-foreground font-medium">10–30 seconds</span> to
          start again.
        </p>

        {/* Subtle reassurance */}
        <p className="text-muted-foreground text-xs">
          This only happens on the first visit.
        </p>
      </div>
    </main>
  );
}
