export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8 text-muted">
      <meta httpEquiv="refresh" content="0;url=/pt/" />
      <p>
        Redirecting to{" "}
        <a href="/pt/" className="text-accent underline">
          /pt/
        </a>
        …
      </p>
    </main>
  );
}
