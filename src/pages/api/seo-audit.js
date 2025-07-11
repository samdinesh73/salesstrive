export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.set('url', url);
  endpoint.searchParams.append('category', 'performance');
  endpoint.searchParams.append('category', 'accessibility');
  endpoint.searchParams.append('category', 'best-practices');
  endpoint.searchParams.append('category', 'seo');

  const apiKey = process.env.GOOGLE_PSI_API_KEY;
  if (apiKey) endpoint.searchParams.set('key', apiKey);

  try {
    const r = await fetch(endpoint.toString());
    const json = await r.json();

    const categories = json.lighthouseResult.categories;
    const audits = json.lighthouseResult.audits;

    const scores = {
      performance: Math.round(categories.performance?.score * 100),
      accessibility: Math.round(categories.accessibility?.score * 100),
      bestPractices: Math.round(categories['best-practices']?.score * 100),
      seo: Math.round(categories.seo?.score * 100),
    };

    const metrics = {
      fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
      lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
      tbt: audits['total-blocking-time']?.displayValue || 'N/A',
      speedIndex: audits['speed-index']?.displayValue || 'N/A',
      cls: audits['cumulative-layout-shift']?.displayValue || 'N/A',
    };

    res.status(200).json({ success: true, scores, metrics });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch audit data' });
  }
}
