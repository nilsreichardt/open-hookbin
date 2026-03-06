export default function HomePage() {
  return (
    <main>
      <div className="card grid">
        <h1>Open Hookbin</h1>
        <p>Send webhook requests to any path and inspect them in a live console.</p>
        <p>
          Example:
          <br />
          <code>POST /demo-bin</code>
          <br />
          Console: <code>/console/demo-bin</code>
          <br />
          API: <code>/api/demo-bin</code>
        </p>
      </div>
    </main>
  );
}
