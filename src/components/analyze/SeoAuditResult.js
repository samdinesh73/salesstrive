// components/SeoAuditResult.js

export default function SeoAuditResult({ result }) {
  if (!result) return null;

  return (
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
                style={{
                  width: '70px',
                  height: '70px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
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
  );
}
