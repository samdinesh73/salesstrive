import { useState } from 'react';

const ScoreBadge = ({ label, value }) => {
  let color = 'bg-green-500';
  if (value < 50) color = 'bg-red-500';
  else if (value < 90) color = 'bg-yellow-500';

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className={`w-14 h-14 rounded-full text-white flex items-center justify-center ${color}`}>
        <span className="text-lg font-bold">{value}</span>
      </div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default function SeoAuditViewer() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/seo-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || 'Error');
      setResult(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="flex gap-2">
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleAnalyze}
          disabled={loading || !url}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

    {result && (
  <div className="card shadow p-4 my-4">
    {/* Core Scores Section */}
    <h2 className="h4 fw-bold mb-4">Core Scores</h2>
    <div className="row text-center mb-4">
      {[
        { label: 'Performance', value: result.scores.performance },
        { label: 'Accessibility', value: result.scores.accessibility },
        { label: 'Best Practices', value: result.scores.bestPractices },
        { label: 'SEO', value: result.scores.seo },
      ].map(({ label, value }, idx) => {
        let bg = 'bg-success';
        if (value < 50) bg = 'bg-danger';
        else if (value < 90) bg = 'bg-warning text-dark';

        return (
          <div className="col-6 col-md-3 mb-3" key={idx}>
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center mx-auto text-white ${bg}`}
              style={{ width: '70px', height: '70px', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              {value}
            </div>
            <div className="mt-2">{label}</div>
          </div>
        );
      })}
    </div>

    {/* Metrics Section */}
    <h3 className="h5 fw-bold mb-3">Key Metrics</h3>
    <ul className="list-group list-group-flush">
      {[
        { label: 'First Contentful Paint', value: result.metrics.fcp },
        { label: 'Largest Contentful Paint', value: result.metrics.lcp },
        { label: 'Total Blocking Time', value: result.metrics.tbt },
        { label: 'Speed Index', value: result.metrics.speedIndex },
        { label: 'Cumulative Layout Shift (CLS)', value: result.metrics.cls },
      ].map(({ label, value }, i) => (
        <li className="list-group-item d-flex justify-content-between" key={i}>
          <span>{label}</span>
          <span className="fw-bold">{value}</span>
        </li>
      ))}
    </ul>
  </div>
)}


    </div>
  );
}
