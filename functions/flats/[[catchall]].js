/**
 * Cloudflare Edge Renderer: Cluster A - Configuration & Pricing Matrix
 * Dynamic Route: /flats/:slug
 */
export async function onRequestGet(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const slug = (params.catchall ? params.catchall.join('/') : '').toLowerCase();

  // Normalize slug parameters
  const is2BHK = slug.includes('2-bhk') || slug.includes('2bhk');
  const is3BHK = slug.includes('3-bhk') || slug.includes('3bhk');
  const configName = is3BHK ? '3 BHK Luxury Residences' : '2 BHK Classic Residences';
  const carpet = is3BHK ? '969 – 1102 SQ.FT.' : '801 – 806 SQ.FT.';
  const price = is3BHK ? '₹1.05 Cr*' : '₹83 Lacs*';
  
  // Extract locality or default to Punawale
  let locality = 'Punawale';
  if (slug.includes('hinjewadi')) locality = 'Near Hinjewadi IT Park';
  else if (slug.includes('wakad')) locality = 'Near Wakad';
  else if (slug.includes('tathawade')) locality = 'Near Tathawade';
  else if (slug.includes('ravet')) locality = 'Near Ravet';
  else if (slug.includes('west-pune')) locality = 'West Pune';

  const pageTitle = `${configName} in ${locality} | Siddhashila EEVVA Punawale`;
  const pageDesc = `Explore premium ${configName} in ${locality} at Siddhashila EEVVA. Carpet area ${carpet}, starting from ${price}. 3.5 acres, Sri Yantra rhombus geometry, 60+ world-class amenities on 30m DP Road. MahaRERA PM1260002503079. Download floor plans & pricing.`;
  const canonicalUrl = `https://siddhashila-eevva.co.in${url.pathname}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="description" content="${pageDesc}">
<meta name="keywords" content="${configName}, flats in ${locality}, Siddhashila Eevva ${configName}, properties in Punawale, luxury flats Pune">
<link rel="canonical" href="${canonicalUrl}">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${pageDesc}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp">
<meta name="twitter:card" content="summary_large_image">

<!-- SCHEMA.ORG JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "name": "Siddhashila EEVVA",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30-mtr DP Road, Punawale",
        "addressLocality": "Pune",
        "postalCode": "411033",
        "addressCountry": "IN"
      },
      "url": "${canonicalUrl}",
      "telephone": "+91 12345 67890"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://siddhashila-eevva.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "Configurations", "item": "https://siddhashila-eevva.co.in/#configurations" },
        { "@type": "ListItem", "position": 3, "name": "${configName} in ${locality}", "item": "${canonicalUrl}" }
      ]
    }
  ]
}
</script>

<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--primary:#2F4F3E;--accent:#A89F7A;--dark:#1F1F1F;--light:#F9F9FB;--gold:#c4bb96;}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Jost',sans-serif;color:var(--dark);background:#fff;line-height:1.6;}
header{background:var(--primary);color:#fff;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;}
header a{color:#fff;text-decoration:none;font-weight:600;}
.hero-p{background:linear-gradient(135deg,rgba(47,79,62,.95),rgba(31,31,31,.9)),url('https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp') center/cover;color:#fff;padding:5rem 2rem;text-align:center;}
.hero-p h1{font-family:'Cinzel',serif;font-size:2.4rem;color:#fff;margin-bottom:1rem;letter-spacing:1px;}
.hero-p p{font-size:1.15rem;color:var(--gold);max-width:750px;margin:0 auto 1.8rem;}
.badge-rera{display:inline-block;padding:.4rem 1.2rem;background:rgba(168,159,122,.25);border:1px solid var(--accent);border-radius:50px;font-size:.85rem;margin-bottom:1.5rem;}
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
.features-list{list-style:none;margin-top:1.5rem;}
.features-list li{padding:.5rem 0;display:flex;align-items:center;gap:.6rem;}
.features-list li::before{content:"✓";color:var(--accent);font-weight:bold;}
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
  <div class="badge-rera">Official Project Portal • Verified MahaRERA PM1260002503079</div>
  <h1>${configName}</h1>
  <p>Thoughtfully planned residences in ${locality} crafted with Sri Yantra rhombus architecture</p>
  <div style="font-size:1.5rem;font-weight:700;color:#fff;">Starting Price: <span style="color:#4ade80;">${price}</span></div>
</div>

<div class="container">
  <div class="grid-2">
    <div>
      <div class="card-spec">
        <h2 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:1rem;">Unit Specifications &amp; Highlights</h2>
        <div class="spec-row"><span>Project Name:</span><strong>Siddhashila EEVVA</strong></div>
        <div class="spec-row"><span>Configuration:</span><strong>${configName}</strong></div>
        <div class="spec-row"><span>Carpet Area:</span><strong>${carpet}</strong></div>
        <div class="spec-row"><span>Indicative Pricing:</span><strong>${price}</strong></div>
        <div class="spec-row"><span>Land Parcel:</span><strong>3.5 Acres (3 Towers)</strong></div>
        <div class="spec-row"><span>Tower Structure:</span><strong>24 Storeys + 4 Levels Parking</strong></div>
        <div class="spec-row"><span>Architectural Concept:</span><strong>Rhombus Geometry (Sri Yantra)</strong></div>
        <div class="spec-row"><span>Privacy Factor:</span><strong>Only 1 Shared Wall per Home</strong></div>
        <div class="spec-row"><span>DP Road Width:</span><strong>30-Meter Wide DP Road</strong></div>
        <div class="spec-row"><span>Amenities:</span><strong>60+ Amenities across 46,000 sq.ft.</strong></div>
      </div>

      <div style="margin-top:2rem;">
        <h3 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:.8rem;">Key Residence Highlights</h3>
        <ul class="features-list">
          <li>Optimal cross-ventilation and multi-directional natural daylighting.</li>
          <li>Minimal overlooking between towers for maximum resident privacy.</li>
          <li>Direct 8-10 minute commute connectivity to Hinjewadi IT Park (Phase 1 &amp; 2).</li>
          <li>Access to 46,000 sq.ft. podium lifestyle deck including swimming pool and clubhouse.</li>
          <li>Adjoining 9-storey boutique commercial development for everyday retail convenience.</li>
        </ul>
      </div>
    </div>

    <div>
      <div class="form-box">
        <h3>Request Complete Floor Plans &amp; Cost Sheet</h3>
        <p style="color:#666;font-size:.9rem;margin-bottom:1.4rem;">Get official brochure, floor layouts, and payment schedule directly on WhatsApp &amp; Email.</p>
        <form id="pSeoForm">
          <div class="form-group"><input type="text" name="name" placeholder="Your Full Name *" required></div>
          <div class="form-group"><input type="tel" name="phone" placeholder="10-digit Mobile Number *" pattern="[0-9]{10}" required></div>
          <div class="form-group"><input type="email" name="email" placeholder="Email Address *" required></div>
          <div class="form-group">
            <select name="configuration">
              <option value="${configName}" selected>${configName}</option>
              <option value="2 BHK Classic (801-806 sq.ft.)">2 BHK Classic (801-806 sq.ft.)</option>
              <option value="3 BHK Premia (969-973 sq.ft.)">3 BHK Premia (969-973 sq.ft.)</option>
              <option value="3 BHK Luxuria (1102 sq.ft.)">3 BHK Luxuria (1102 sq.ft.)</option>
            </select>
          </div>
          <button type="submit" class="btn-submit">Download Cost Sheet &amp; Floor Plans →</button>
        </form>
      </div>

      <div style="margin-top:2rem;background:#f4f5f7;padding:1.5rem;border-radius:15px;border-left:4px solid var(--accent);">
        <h4 style="font-size:1rem;color:var(--primary);margin-bottom:.4rem;">MahaRERA Registered Project</h4>
        <p style="font-size:.85rem;color:#555;">Registration No.: <strong>PM1260002503079</strong>. Verified on <a href="https://maharerait.maharashtra.gov.in/" target="_blank" rel="nofollow">maharerait.maharashtra.gov.in</a>.</p>
      </div>
    </div>
  </div>
</div>

<footer>
  <p>© 2026 Siddhashila Group. All Rights Reserved. Siddhashila EEVVA Punawale.</p>
  <p style="margin-top:.5rem;"><a href="https://siddhashila-eevva.co.in/">Home</a> | <a href="https://siddhashila-eevva.co.in/#configurations">Configurations</a> | <a href="https://siddhashila-eevva.co.in/#plans">Floor Plans</a> | <a href="https://siddhashila-eevva.co.in/#location">Location</a> | <a href="https://siddhashila-eevva.co.in/#contact">Contact</a></p>
</footer>

<script>
document.getElementById('pSeoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Sending Request...';
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
      source: 'Programmatic Page: ' + window.location.pathname
    })
  }).catch(() => {});

  setTimeout(() => {
    btn.textContent = '✓ Request Received!';
    btn.style.background = '#4ade80';
    setTimeout(() => {
      btn.textContent = 'Download Cost Sheet & Floor Plans →';
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
