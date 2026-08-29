/**
 * Cloudflare Edge Renderer: Cluster D - Healthcare & Retail Landmarks
 * Dynamic Route: /landmarks/:slug
 */
export async function onRequestGet(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const slug = (params.catchall ? params.catchall.join('/') : '').toLowerCase();

  let landmarkName = 'Premier Landmarks';
  let dist = '3.5 km';
  let time = '6-8 Mins';
  let type = 'Lifestyle Hub';

  if (slug.includes('phoenix')) { landmarkName = 'Phoenix Mall of the Millennium'; dist = '4.8 km'; time = '10 Mins'; type = 'Mega Luxury Mall'; }
  else if (slug.includes('aditya-birla')) { landmarkName = 'Aditya Birla Memorial Hospital'; dist = '4.5 km'; time = '9 Mins'; type = 'Multi-Speciality Hospital'; }
  else if (slug.includes('life-care')) { landmarkName = 'Life Care Hospital Punawale'; dist = '1.1 km'; time = '3 Mins'; type = 'Emergency Healthcare'; }
  else if (slug.includes('dmart')) { landmarkName = 'D-Mart Tathawade'; dist = '2.9 km'; time = '6 Mins'; type = 'Retail & Hypermarket'; }
  else if (slug.includes('18-latitude')) { landmarkName = '18 Latitude Mall Punawale'; dist = '1.5 km'; time = '3 Mins'; type = 'Retail Complex'; }

  const pageTitle = `Flats Near ${landmarkName} | Siddhashila EEVVA Punawale`;
  const pageDesc = `Discover luxury 2 & 3 BHK residences near ${landmarkName} (${dist}, ${time}) at Siddhashila EEVVA Punawale. Prime 30m DP road location, 60+ world-class amenities, starting ₹83 Lakhs*. Download brochure & floor plans.`;
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
body{font-family:'Jost',sans-serif;color:var(--dark);background:#fff;line-height:1.6;}
header{background:var(--primary);color:#fff;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;}
header a{color:#fff;text-decoration:none;font-weight:600;}
.hero-p{background:linear-gradient(135deg,rgba(47,79,62,.95),rgba(31,31,31,.9)),url('https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp') center/cover;color:#fff;padding:5rem 2rem;text-align:center;}
.hero-p h1{font-family:'Cinzel',serif;font-size:2.3rem;color:#fff;margin-bottom:1rem;}
.hero-p p{font-size:1.15rem;color:var(--gold);max-width:750px;margin:0 auto 1.8rem;}
.badge-lm{display:inline-block;padding:.4rem 1.4rem;background:var(--accent);color:#fff;border-radius:50px;font-size:.9rem;font-weight:600;margin-bottom:1.5rem;}
.container{max-width:1100px;margin:3rem auto;padding:0 1.5rem;}
.grid-2{display:grid;grid-template-columns:1.2fr 1fr;gap:3rem;align-items:start;}
@media(max-width:850px){.grid-2{grid-template-columns:1fr;}}
.card-spec{background:var(--light);border-radius:20px;padding:2.2rem;border:1px solid rgba(168,159,122,.3);box-shadow:0 10px 30px rgba(0,0,0,.05);}
.spec-row{display:flex;justify-content:space-between;padding:.85rem 0;border-bottom:1px solid rgba(0,0,0,.08);font-size:1.02rem;}
.spec-row strong{color:var(--primary);}
.form-box{background:#fff;border-radius:20px;padding:2.2rem;border:1px solid rgba(47,79,62,.2);box-shadow:0 15px 40px rgba(47,79,62,.08);}
.form-box h3{font-family:'Cinzel',serif;font-size:1.4rem;color:var(--primary);margin-bottom:.6rem;}
.form-group{margin-bottom:1.1rem;}
.form-group input,.form-group select{width:100%;padding:.85rem 1rem;border:1px solid #ddd;border-radius:10px;font-family:inherit;}
.btn-submit{width:100%;padding:1rem;background:var(--accent);color:#fff;border:none;border-radius:10px;font-weight:600;font-size:1rem;cursor:pointer;transition:background .3s;}
.btn-submit:hover{background:var(--primary);}
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
  <div class="badge-lm">📍 Proximity: ${dist} (${time}) • ${type}</div>
  <h1>Luxury Flats Near ${landmarkName}</h1>
  <p>Live at the epicenter of West Pune's vibrant retail, healthcare, and dining destinations</p>
  <div style="font-size:1.4rem;font-weight:700;color:#fff;">Starting ₹83 Lacs* • 2 &amp; 3 BHK</div>
</div>

<div class="container">
  <div class="grid-2">
    <div>
      <div class="card-spec">
        <h2 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:1rem;">Location &amp; Infrastructure Matrix</h2>
        <div class="spec-row"><span>Destination:</span><strong>${landmarkName}</strong></div>
        <div class="spec-row"><span>Category:</span><strong>${type}</strong></div>
        <div class="spec-row"><span>Distance &amp; Drive:</span><strong>${dist} (${time})</strong></div>
        <div class="spec-row"><span>Project Name:</span><strong>Siddhashila EEVVA Punawale</strong></div>
        <div class="spec-row"><span>Road Access:</span><strong>Direct frontage on 30m DP Road</strong></div>
        <div class="spec-row"><span>MahaRERA Registration:</span><strong>PM1260002503079</strong></div>
      </div>
    </div>

    <div>
      <div class="form-box">
        <h3>Request Detailed Brochure &amp; Floor Plans</h3>
        <p style="color:#666;font-size:.9rem;margin-bottom:1.4rem;">Get unit configurations, carpet area details, and launch pricing instantly.</p>
        <form id="pSeoForm">
          <div class="form-group"><input type="text" name="name" placeholder="Your Full Name *" required></div>
          <div class="form-group"><input type="tel" name="phone" placeholder="10-digit Mobile Number *" pattern="[0-9]{10}" required></div>
          <div class="form-group"><input type="email" name="email" placeholder="Email Address *" required></div>
          <div class="form-group">
            <select name="configuration">
              <option value="2 BHK Classic (801-806 sq.ft.)">2 BHK Classic (₹83 Lacs*)</option>
              <option value="3 BHK Premia (969-973 sq.ft.)">3 BHK Premia (₹1.05 Cr*)</option>
              <option value="3 BHK Luxuria (1102 sq.ft.)">3 BHK Luxuria (₹1.25 Cr*)</option>
            </select>
          </div>
          <button type="submit" class="btn-submit">Send Me Brochure &amp; Price List →</button>
        </form>
      </div>
    </div>
  </div>
</div>

<footer>
  <p>© 2026 Siddhashila Group. All Rights Reserved. Siddhashila EEVVA Punawale.</p>
  <p style="margin-top:.5rem;"><a href="https://siddhashila-eevva.co.in/">Home</a> | <a href="https://siddhashila-eevva.co.in/#configurations">Configurations</a> | <a href="https://siddhashila-eevva.co.in/#location">Location</a> | <a href="https://siddhashila-eevva.co.in/#contact">Contact</a></p>
</footer>

<script>
document.getElementById('pSeoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Submitting...';
  btn.disabled = true;
  const fData = new FormData(this);
  fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: fData.get('name'),
      phone: fData.get('phone'),
      email: fData.get('email'),
      configuration: fData.get('configuration'),
      source: 'Landmark Landing: ' + window.location.pathname
    })
  }).catch(() => {});

  setTimeout(() => {
    btn.textContent = '✓ Request Received!';
    btn.style.background = '#4ade80';
    setTimeout(() => {
      btn.textContent = 'Send Me Brochure & Price List →';
      btn.style.background = '';
      btn.disabled = false;
      this.reset();
    }, 3000);
  }, 700);
});
</script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
