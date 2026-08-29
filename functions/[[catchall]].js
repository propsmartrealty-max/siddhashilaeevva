/**
 * Universal Ultra-Aggressive Cloudflare Edge Renderer (All 5,000+ pSEO Routes)
 * Handles any programmatic URL: /flats/*, /commute/*, /schools/*, /landmarks/*, /pune-real-estate/*, /siddhashila-eevva/*, etc.
 */
export async function onRequestGet(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/|\/$/g, '');

  // Pass static assets and primary endpoints directly to origin
  if (!path || path === '' || path.includes('.') || path.startsWith('api') || path.startsWith('assets')) {
    return context.next();
  }

  // Parse path segments and keywords
  const parts = path.split('/');
  const mainCluster = parts[0] || 'properties';
  const subSlug = (parts.slice(1).join(' ') || parts[0]).replace(/[-_]+/g, ' ');

  // Dynamic Keyword & Title Extraction
  const words = subSlug.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const is3BHK = path.includes('3-bhk') || path.includes('3bhk');
  const config = is3BHK ? '3 BHK Luxury Residences' : '2 & 3 BHK Premium Residences';
  const price = is3BHK ? '₹1.05 Cr*' : '₹83 Lacs*';
  const carpet = is3BHK ? '969 – 1102 SQ.FT.' : '801 – 806 SQ.FT.';

  const pageTitle = `${words} | Siddhashila EEVVA Punawale Official Portal`;
  const pageDesc = `Explore ${words} at Siddhashila EEVVA Punawale, West Pune. Ultra-luxury ${config} (Carpet: ${carpet}) starting ${price}. 3.5 acres, Sri Yantra rhombus architecture, 60+ world-class amenities on 30m DP road. Verified MahaRERA: PM1260002503079. Download floor plans & cost sheet.`;
  const canonicalUrl = `https://siddhashila-eevva.co.in${url.pathname}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="description" content="${pageDesc}">
<meta name="keywords" content="${words}, Siddhashila Eevva, Eevva Punawale, 2 BHK in Punawale, 3 BHK in Punawale, flats near Hinjewadi, luxury apartments Pune">
<link rel="canonical" href="${canonicalUrl}">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${pageDesc}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp">
<meta name="twitter:card" content="summary_large_image">

<!-- SCHEMA.ORG LD+JSON -->
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
        "addressLocality": "Punawale, Pimpri-Chinchwad, Pune",
        "postalCode": "411033",
        "addressCountry": "IN"
      },
      "url": "${canonicalUrl}",
      "telephone": "+91 77440 09295"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://siddhashila-eevva.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "${words}", "item": "${canonicalUrl}" }
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
.hero-p{background:linear-gradient(135deg,rgba(47,79,62,.95),rgba(31,31,31,.9)),url('https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp') center/cover;color:#fff;padding:4.5rem 1.5rem;text-align:center;}
.hero-p h1{font-family:'Cinzel',serif;font-size:2.2rem;color:#fff;margin-bottom:.8rem;}
.hero-p p{font-size:1.1rem;color:var(--gold);max-width:800px;margin:0 auto 1.5rem;}
.badge{display:inline-block;padding:.4rem 1.4rem;background:#4ade80;color:#000;border-radius:50px;font-size:.85rem;font-weight:700;margin-bottom:1.2rem;}
.container{max-width:1100px;margin:3rem auto;padding:0 1.5rem;}
.grid-2{display:grid;grid-template-columns:1.2fr 1fr;gap:3rem;}
@media(max-width:850px){.grid-2{grid-template-columns:1fr;}}
.card-spec{background:var(--light);border-radius:20px;padding:2.2rem;border:1px solid rgba(168,159,122,.3);}
.spec-row{display:flex;justify-content:space-between;padding:.8rem 0;border-bottom:1px solid rgba(0,0,0,.08);font-size:1rem;}
.spec-row strong{color:var(--primary);}
.form-box{background:#fff;border-radius:20px;padding:2.2rem;border:1px solid rgba(47,79,62,.2);box-shadow:0 15px 40px rgba(47,79,62,.08);}
.form-group{margin-bottom:1.1rem;}
.form-group input,.form-group select{width:100%;padding:.85rem 1rem;border:1px solid #ddd;border-radius:10px;font-family:inherit;}
.btn-submit{width:100%;padding:1rem;background:var(--accent);color:#fff;border:none;border-radius:10px;font-weight:600;font-size:1rem;cursor:pointer;}
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
  <div class="badge">Verified Official Project Portal • MahaRERA PM1260002503079</div>
  <h1>${words}</h1>
  <p>Luxury residential living at Siddhashila EEVVA on 30m DP road Punawale with Sri Yantra rhombus architecture</p>
  <div style="font-size:1.4rem;font-weight:700;color:#fff;">Starting Price: <span style="color:#4ade80;">${price}</span></div>
</div>
<div class="container">
  <div class="grid-2">
    <div>
      <div class="card-spec">
        <h2 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:1rem;">Project &amp; Unit Breakdown</h2>
        <div class="spec-row"><span>Target Search Query:</span><strong>${words}</strong></div>
        <div class="spec-row"><span>Project Name:</span><strong>Siddhashila EEVVA</strong></div>
        <div class="spec-row"><span>Configuration Options:</span><strong>2 BHK Classic, 3 BHK Premia &amp; Luxuria</strong></div>
        <div class="spec-row"><span>Carpet Area:</span><strong>${carpet}</strong></div>
        <div class="spec-row"><span>Starting Price:</span><strong>${price}</strong></div>
        <div class="spec-row"><span>Land Parcel:</span><strong>3.5 Acres (3 Towers of 24 Storeys)</strong></div>
        <div class="spec-row"><span>Architecture:</span><strong>Sri Yantra Rhombus (Only 1 Shared Wall)</strong></div>
        <div class="spec-row"><span>Amenities:</span><strong>60+ Lifestyle Amenities (46,000 sq.ft.)</strong></div>
        <div class="spec-row"><span>Commercial Hub:</span><strong>9-Storey Boutique Commercial Tower</strong></div>
        <div class="spec-row"><span>MahaRERA Registration:</span><strong>PM1260002503079</strong></div>
      </div>
    </div>
    <div>
      <div class="form-box">
        <h3 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:.5rem;">Download Brochure &amp; Price Breakdown</h3>
        <p style="color:#666;font-size:.9rem;margin-bottom:1.4rem;">Receive official cost sheet, floor plans, and early-bird discounts instantly on WhatsApp.</p>
        <form id="pSeoForm">
          <div class="form-group"><input type="text" name="name" placeholder="Full Name *" required></div>
          <div class="form-group"><input type="tel" name="phone" placeholder="10-digit Mobile Number *" pattern="[0-9]{10}" required></div>
          <div class="form-group"><input type="email" name="email" placeholder="Email Address *" required></div>
          <button type="submit" class="btn-submit">Send Me Official Cost Sheet &amp; Plans →</button>
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
  const fData = new FormData(this);
  fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: fData.get('name'),
      phone: fData.get('phone'),
      email: fData.get('email'),
      configuration: '${config}',
      source: 'Programmatic Route: ' + window.location.pathname
    })
  }).catch(() => {});
  setTimeout(() => {
    btn.textContent = '✓ Request Received!';
    btn.style.background = '#4ade80';
    setTimeout(() => { btn.textContent = 'Send Me Official Cost Sheet & Plans →'; btn.style.background = ''; this.reset(); }, 3000);
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
