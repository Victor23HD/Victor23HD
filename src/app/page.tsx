const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function RootPage() {
  const home = `${basePath}/pt/`;

  return (
    <main className="flex min-h-screen items-center justify-center p-8 text-muted">
      <meta httpEquiv="refresh" content={`0;url=${home}`} />
      <p>
        Redirecting to{" "}
        <a href={home} className="text-accent underline">
          /pt/
        </a>
        …
      </p>
    </main>
  );
}
