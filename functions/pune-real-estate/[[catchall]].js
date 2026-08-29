/**
 * Cloudflare Edge Renderer: Cluster E - Hyperlocal Pune Real Estate Guides
 * Dynamic Route: /pune-real-estate/:locality/:topic
 */
export async function onRequestGet(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const pathParts = params.catchall || [];
  const localitySlug = (pathParts[0] || 'punawale').toLowerCase();
  const topicSlug = (pathParts[1] || 'real-estate-guide').toLowerCase();

  const localityName = localitySlug.charAt(0).toUpperCase() + localitySlug.slice(1);
  let topicTitle = 'Property Rates & Investment Analysis 2026';
  if (topicSlug.includes('infrastructure')) topicTitle = 'Infrastructure & Water Supply Development Report';
  else if (topicSlug.includes('rental-yield')) topicTitle = 'Rental Yield & Capital Appreciation Forecast';
  else if (topicSlug.includes('30m-dp-road')) topicTitle = '30-Meter DP Road Master Plan Impact on Realty';
  else if (topicSlug.includes('hinjewadi-it-park')) topicTitle = 'Commute Analysis & IT Hub Linkage';

  const pageTitle = `${localityName} Real Estate: ${topicTitle} | Siddhashila EEVVA`;
  const pageDesc = `In-depth analysis of ${localityName} real estate market: ${topicTitle}. Learn why Siddhashila EEVVA Punawale on 30m DP road represents the premier 2 & 3 BHK investment starting ₹83 Lakhs*. MahaRERA PM1260002503079.`;
  const canonicalUrl = `https://siddhashila-eevva.co.in${url.pathname}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="description" content="${pageDesc}">
<link rel="canonical" href="${canonicalUrl}">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${pageDesc}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp">
<meta name="twitter:card" content="summary_large_image">

<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--primary:#2F4F3E;--accent:#A89F7A;--dark:#1F1F1F;--light:#F9F9FB;--gold:#c4bb96;}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Jost',sans-serif;color:var(--dark);background:#fff;line-height:1.7;}
header{background:var(--primary);color:#fff;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;}
header a{color:#fff;text-decoration:none;font-weight:600;}
.hero-p{background:linear-gradient(135deg,rgba(47,79,62,.95),rgba(31,31,31,.9)),url('https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp') center/cover;color:#fff;padding:5rem 2rem;text-align:center;}
.hero-p h1{font-family:'Cinzel',serif;font-size:2.2rem;color:#fff;margin-bottom:1rem;}
.hero-p p{font-size:1.15rem;color:var(--gold);max-width:800px;margin:0 auto 1.8rem;}
.container{max-width:1050px;margin:3.5rem auto;padding:0 1.5rem;}
.article-body{font-size:1.05rem;color:#333;}
.article-body h2{font-family:'Cinzel',serif;color:var(--primary);margin:2rem 0 1rem;}
.article-body p{margin-bottom:1.4rem;}
.callout{background:var(--light);border-left:4px solid var(--accent);padding:1.8rem;border-radius:12px;margin:2rem 0;}
footer{background:var(--dark);color:#aaa;padding:2.5rem 1.5rem;text-align:center;font-size:.85rem;margin-top:4rem;}
footer a{color:var(--gold);}
</style>
</head>
<body>
<header>
  <a href="https://siddhashila-eevva.co.in/">← Back to Siddhashila EEVVA Official Site</a>
  <div style="font-size:.85rem;color:var(--gold);">MahaRERA: PM1260002503079</div>
</header>

<div class="hero-p">
  <div style="display:inline-block;padding:.4rem 1.2rem;background:rgba(168,159,122,.2);border:1px solid var(--accent);border-radius:50px;font-size:.85rem;margin-bottom:1.5rem;">Pune Real Estate Intelligence Series</div>
  <h1>${localityName} Real Estate: ${topicTitle}</h1>
  <p>Comprehensive market analysis, infrastructure catalysts, and residential growth opportunities</p>
</div>

<div class="container">
  <div class="article-body">
    <h2>1. Executive Corridor Overview: ${localityName}, West Pune</h2>
    <p>West Pune has emerged as the principal engine of residential real estate appreciation in Maharashtra. Driven by the massive expansion of the Hinjewadi IT Park (Phase 1, 2, and 3) and direct high-speed linkages to Mumbai and central Pune, localities like <strong>${localityName}</strong> are witnessing exceptional capital and rental demand.</p>

    <div class="callout">
      <h3 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:.5rem;">Key Growth Drivers</h3>
      <p style="margin:0;">• Expansive 30-meter wide DP Road network connecting Aundh-Ravet BRTS to the expressway.<br>
      • Superior capital appreciation rates averaging 8.5%–11% per annum.<br>
      • Close proximity to IT employment hubs employing over 400,000 technology engineers.</p>
    </div>

    <h2>2. Why Siddhashila EEVVA Leads the Punawale Landscape</h2>
    <p>While standard developments in ${localityName} offer cookie-cutter linear towers, <strong>Siddhashila EEVVA</strong> is guided by an innovative rhombus geometry inspired by the sacred Sri Yantra. Spread over 3.5 acres with 3 high-rise towers of 24 storeys each, the planning guarantees only 1 shared wall per apartment, 2 homes per wing, and complete visual privacy between towers.</p>

    <p>With 60+ curated amenities spanning 46,000 sq.ft. of podium recreation and an integrated 9-storey boutique commercial tower, EEVVA offers residents the ideal balance of tranquility and everyday connectivity.</p>

    <div style="background:#2F4F3E;color:#fff;padding:2.5rem;border-radius:20px;text-align:center;margin:3rem 0;">
      <h3 style="font-family:'Cinzel',serif;font-size:1.8rem;margin-bottom:.8rem;color:#fff;">Looking for a Premium Home in ${localityName}?</h3>
      <p style="color:var(--gold);max-width:650px;margin:0 auto 1.5rem;">Explore 2 BHK Classic (801-806 sq.ft.) &amp; 3 BHK Premia / Luxuria (969-1102 sq.ft.) residences starting ₹83 Lacs*.</p>
      <a href="https://siddhashila-eevva.co.in/#contact" style="display:inline-block;padding:1rem 2.2rem;background:var(--accent);color:#fff;text-decoration:none;border-radius:50px;font-weight:600;">Schedule a VIP Site Visit →</a>
    </div>
  </div>
</div>

<footer>
  <p>© 2026 Siddhashila Group. All Rights Reserved. Siddhashila EEVVA Punawale.</p>
  <p style="margin-top:.5rem;"><a href="https://siddhashila-eevva.co.in/">Home</a> | <a href="https://siddhashila-eevva.co.in/#configurations">Configurations</a> | <a href="https://siddhashila-eevva.co.in/#location">Location</a> | <a href="https://siddhashila-eevva.co.in/#contact">Contact</a></p>
</footer>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
