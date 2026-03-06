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
        <details className="info-box">
          <summary>Header redaction</summary>
          <small>
            Open Hookbin does not store or display some infrastructure headers, including <code>x-vercel-*</code>,{" "}
            <code>forwarded</code>, <code>x-forwarded-*</code>, and <code>x-real-ip</code>.
          </small>
        </details>
      </div>
    </main>
  );
}
