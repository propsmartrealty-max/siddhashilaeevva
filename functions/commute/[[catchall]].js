/**
 * Cloudflare Edge Renderer: Cluster B - Tech Parks & Workplace Proximity
 * Dynamic Route: /commute/:slug
 */
export async function onRequestGet(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const slug = (params.catchall ? params.catchall.join('/') : '').toLowerCase();

  let techparkName = 'Hinjewadi IT Park';
  let commuteTime = '8-12 Minutes';
  let distance = '4.5 km';

  if (slug.includes('infosys')) { techparkName = 'Infosys Hinjewadi Phase 2'; commuteTime = '10-12 Minutes'; distance = '5.5 km'; }
  else if (slug.includes('tcs')) { techparkName = 'TCS Sahyadri Park Phase 3'; commuteTime = '15-18 Minutes'; distance = '8.2 km'; }
  else if (slug.includes('wipro')) { techparkName = 'Wipro Circle Phase 1'; commuteTime = '9-11 Minutes'; distance = '4.8 km'; }
  else if (slug.includes('quadron')) { techparkName = 'Quadron Business Park'; commuteTime = '12 Minutes'; distance = '6.1 km'; }
  else if (slug.includes('embassy')) { techparkName = 'Embassy TechZone'; commuteTime = '13 Minutes'; distance = '6.8 km'; }
  else if (slug.includes('cognizant')) { techparkName = 'Cognizant Hinjewadi'; commuteTime = '10 Minutes'; distance = '5.2 km'; }

  const pageTitle = `Flats Near ${techparkName} | Siddhashila EEVVA Punawale`;
  const pageDesc = `Discover luxury 2 & 3 BHK residences near ${techparkName} at Siddhashila EEVVA Punawale. Just ${commuteTime} (${distance}) via 30m DP road & BRTS corridor. 60+ amenities, starting ₹83 Lakhs*. Save 2+ hours daily. Download commute guide.`;
  const canonicalUrl = `https://siddhashila-eevva.co.in${url.pathname}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="description" content="${pageDesc}">
<meta name="keywords" content="flats near ${techparkName}, apartments near ${techparkName}, Siddhashila Eevva Punawale, homes near Hinjewadi, Hinjewadi tech corridor flats">
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
        "addressLocality": "Punawale, Pune",
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
        { "@type": "ListItem", "position": 2, "name": "Workplace Commute", "item": "https://siddhashila-eevva.co.in/#location" },
        { "@type": "ListItem", "position": 3, "name": "Flats Near ${techparkName}", "item": "${canonicalUrl}" }
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
.hero-p{background:linear-gradient(135deg,rgba(47,79,62,.95),rgba(31,31,31,.9)),url('https://siddhashilaeevva.com/wp-content/uploads/2026/03/Eye_Level_Cam_012.webp') center/cover;color:#fff;padding:5rem 2rem;text-align:center;}
.hero-p h1{font-family:'Cinzel',serif;font-size:2.3rem;color:#fff;margin-bottom:1rem;letter-spacing:1px;}
.hero-p p{font-size:1.15rem;color:var(--gold);max-width:750px;margin:0 auto 1.8rem;}
.badge-time{display:inline-block;padding:.4rem 1.4rem;background:#4ade80;color:#000;border-radius:50px;font-size:.9rem;font-weight:700;margin-bottom:1.5rem;}
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
  <div class="badge-time">⚡ Seamless Commute: ${commuteTime} (${distance})</div>
  <h1>Luxury Residences Near ${techparkName}</h1>
  <p>Reclaim 2+ hours every day with effortless connectivity via the 30-meter wide DP Road &amp; Aundh-Ravet corridor</p>
  <div style="font-size:1.4rem;font-weight:700;color:#fff;">2 &amp; 3 BHK Starting ₹83 Lacs*</div>
</div>

<div class="container">
  <div class="grid-2">
    <div>
      <div class="card-spec">
        <h2 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:1rem;">Commute Analysis &amp; Route Matrix</h2>
        <div class="spec-row"><span>Target Workplace:</span><strong>${techparkName}</strong></div>
        <div class="spec-row"><span>Driving Distance:</span><strong>${distance}</strong></div>
        <div class="spec-row"><span>Average Transit Time:</span><strong>${commuteTime}</strong></div>
        <div class="spec-row"><span>Main Access Road:</span><strong>30-Meter Wide DP Road</strong></div>
        <div class="spec-row"><span>Project Name:</span><strong>Siddhashila EEVVA Punawale</strong></div>
        <div class="spec-row"><span>Configuration Options:</span><strong>2 BHK Classic, 3 BHK Premia &amp; Luxuria</strong></div>
        <div class="spec-row"><span>Carpet Areas:</span><strong>801 to 1102 SQ.FT.</strong></div>
        <div class="spec-row"><span>Work-From-Home Support:</span><strong>Co-Working Lounge &amp; High-Speed Wifi Zone</strong></div>
        <div class="spec-row"><span>MahaRERA Status:</span><strong>PM1260002503079</strong></div>
      </div>

      <div style="margin-top:2rem;background:#f9f9fb;padding:1.5rem;border-radius:15px;border:1px solid #eee;">
        <h3 style="font-family:'Cinzel',serif;color:var(--primary);margin-bottom:.8rem;">Why Tech Professionals Choose EEVVA</h3>
        <p style="color:#555;font-size:.95rem;line-height:1.7;">Living at Siddhashila EEVVA eliminates the grueling traffic gridlock of central Hinjewadi. Located along the smooth 30-meter DP road connecting directly to the highway and IT Phase 1, professionals enjoy peaceful luxury living without sacrificing sleep or family time.</p>
      </div>
    </div>

    <div>
      <div class="form-box">
        <h3>Schedule VIP Site Visit &amp; Transit Tour</h3>
        <p style="color:#666;font-size:.9rem;margin-bottom:1.4rem;">Get exclusive corporate offers for IT employees and complete project brochure.</p>
        <form id="pSeoForm">
          <div class="form-group"><input type="text" name="name" placeholder="Your Full Name *" required></div>
          <div class="form-group"><input type="tel" name="phone" placeholder="10-digit Mobile Number *" pattern="[0-9]{10}" required></div>
          <div class="form-group"><input type="email" name="email" placeholder="Work / Personal Email *" required></div>
          <div class="form-group">
            <select name="configuration">
              <option value="2 BHK Classic (801-806 sq.ft.)">2 BHK Classic (₹83 Lacs*)</option>
              <option value="3 BHK Premia (969-973 sq.ft.)">3 BHK Premia (₹1.05 Cr*)</option>
              <option value="3 BHK Luxuria (1102 sq.ft.)">3 BHK Luxuria (₹1.25 Cr*)</option>
            </select>
          </div>
          <button type="submit" class="btn-submit">Claim Corporate IT Offer &amp; Plans →</button>
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
      source: 'Commute Landing: ' + window.location.pathname
    })
  }).catch(() => {});

  setTimeout(() => {
    btn.textContent = '✓ Request Received!';
    btn.style.background = '#4ade80';
    setTimeout(() => {
      btn.textContent = 'Claim Corporate IT Offer & Plans →';
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
