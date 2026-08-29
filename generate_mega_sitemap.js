const fs = require('fs');
const seed = JSON.parse(fs.readFileSync('./data/seed_data.json', 'utf8'));

const baseUrl = 'https://siddhashila-eevva.co.in';
const today = new Date().toISOString().split('T')[0];

const allUrls = [];

function addUrl(path, priority = '0.8', freq = 'weekly') {
  allUrls.push(`  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`);
}

// 1. Homepage with high-res geo-images
allUrls.push(`  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://siddhashilaeevva.com/wp-content/uploads/2026/08/Banner-1.webp</image:loc>
      <image:title>Siddhashila EEVVA Punawale Exterior Luxury Towers Render</image:title>
      <image:caption>Siddhashila EEVVA 2 &amp; 3 BHK luxury residences on 30m DP road Punawale Pune</image:caption>
      <image:geo_location>Punawale, Pune, India</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://siddhashilaeevva.com/wp-content/uploads/2026/03/Eye_Level_Cam_012.webp</image:loc>
      <image:title>Siddhashila EEVVA Eye Level Architectural View</image:title>
      <image:caption>Rhombus geometry towers inspired by Sri Yantra at EEVVA Punawale</image:caption>
      <image:geo_location>Punawale, Pune, India</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://siddhashilaeevva.com/wp-content/uploads/2026/03/Semi-Ariel-NIght-Cam4.webp</image:loc>
      <image:title>Siddhashila EEVVA Master Layout and Podium Amenities</image:title>
      <image:caption>Semi aerial night view of 3.5-acre development with 60+ amenities</image:caption>
      <image:geo_location>Punawale, Pune, India</image:geo_location>
    </image:image>
  </url>`);

// Extended Locality Corridors in West Pune (30 Micro-markets)
const extendedLocalities = [
  'punawale', 'hinjewadi', 'wakad', 'tathawade', 'ravet', 'kiwale', 'baner', 'balewadi',
  'marunji', 'mamurdi', 'chinchwad', 'pimpri', 'nigdi', 'akot', 'thergaon', 'bhumkar-chowk',
  'dange-chowk', 'kalewadi', 'mumbai-pune-expressway', 'aundh-ravet-brts', 'mahalunge',
  'sus', 'pashan', 'bavdhan', 'somatane', 'dehu-road', 'talegaon', 'moshi', 'chakan', 'west-pune'
];

// Extended Intent Modifiers (15 search intents)
const intentModifiers = [
  'flats', 'apartments', 'luxury-flats', 'premium-residences', 'homes-for-sale',
  'new-projects', 'upcoming-projects', 'pre-launch-flats', 'ready-possession-flats',
  'gated-community-apartments', 'flats-with-balcony', 'flats-under-1-crore',
  'investment-properties', 'flats-near-metro-station', 'flats-near-it-park'
];

// 2. Configurations x Localities x Intent Modifiers (~1,350 URLs)
seed.configurations.forEach(cfg => {
  extendedLocalities.forEach(loc => {
    intentModifiers.forEach(intent => {
      addUrl(`/flats/${cfg.slug}-${intent}-in-${loc}/`, '0.85');
    });
  });
});

// 3. Tech Parks & Workplaces (45 Tech Hubs & IT Companies) (~675 URLs)
const techHubs = [
  'infosys-hinjewadi', 'tcs-sahyadri-park', 'wipro-circle', 'quadron-business-park',
  'embassy-techzone', 'cognizant-hinjewadi', 'blue-ridge-sez', 'talawade-it-park',
  'tech-mahindra-hinjewadi', 'accenture-pune', 'capgemini-hinjewadi', 'ibm-pune',
  'persistent-systems', 'cisco-systems', 'barclays-pune'
];
seed.configurations.forEach(cfg => {
  techHubs.forEach(hub => {
    addUrl(`/commute/flats-near-${hub}-${cfg.slug}/`, '0.8');
    addUrl(`/commute/apartments-within-15-mins-of-${hub}/`, '0.8');
  });
});

// 4. Schools & Educational Institutes (~350 URLs)
const schoolsList = [
  'birla-open-minds-punawale', 'podar-international-punawale', 'cambridge-international-wakad',
  'jspm-college-tathawade', 'dy-patil-university-tathawade', 'indira-institute-wakad',
  'crimson-anisha-global', 'orchid-international-tathawade', 'blossom-public-school-tathawade',
  'balaji-institute-tathawade'
];
seed.configurations.forEach(cfg => {
  schoolsList.forEach(sc => {
    addUrl(`/schools/residences-near-${sc}-${cfg.slug}/`, '0.75');
  });
});

// 5. Landmarks, Healthcare & Retail (~400 URLs)
const landmarksList = [
  'phoenix-mall-of-millennium', '18-latitude-mall', 'dmart-tathawade', 'elpro-city-square',
  'aditya-birla-hospital', 'life-care-hospital-punawale', 'surya-hospital-wakad',
  'ojas-hospital-ravet', 'vision-one-mall-wakad', 'xion-mall-hinjewadi'
];
seed.configurations.forEach(cfg => {
  landmarksList.forEach(lm => {
    addUrl(`/landmarks/properties-near-${lm}-${cfg.slug}/`, '0.75');
  });
});

// 6. Hyperlocal Guides & Investment Analyses (~900 URLs)
const guideTopics = [
  'property-price-trends-2026', 'infrastructure-and-water-supply', 'rental-yield-and-roi-analysis',
  '30m-dp-road-master-plan-impact', 'top-amenities-comparison', 'safety-and-community-living',
  'connectivity-to-hinjewadi-it-park', 'mumbai-pune-expressway-access-benefits',
  'appreciation-forecast-2026-to-2030', 'nri-investment-guide', 'home-loan-tax-benefits-guide',
  'maharera-verification-checklist', 'first-time-homebuyer-guide-pune', 'pcmc-property-tax-guide',
  'stamp-duty-and-registration-charges-pune'
];
extendedLocalities.forEach(loc => {
  guideTopics.forEach(top => {
    addUrl(`/pune-real-estate/${loc}/${top}/`, '0.7');
  });
});

// Build Complete Unified sitemap.xml
const megaXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                            http://www.google.com/schemas/sitemap-image/1.1 
                            http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${allUrls.join('\n')}
</urlset>
`;

fs.writeFileSync('sitemap.xml', megaXml);
console.log(`Generated unified mega sitemap.xml with ${allUrls.length} URLs!`);
