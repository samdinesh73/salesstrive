import { useState } from 'react';
import SeoAuditResult from '@/components/analyze/SeoAuditResult';

const SeoAuditViewer = () => {
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
      <div className="d-flex gap-2">
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="form-control"
        />
        <button
          onClick={handleAnalyze}
          disabled={loading || !url}
          className="btn btn-primary"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      {error && <p className="text-danger">{error}</p>}
      <SeoAuditResult result={result} />
    </div>
  );
}

export default SeoAuditViewer;