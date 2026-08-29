/**
 * Master Script to generate sharded XML Sitemaps for 5,000+ Programmatic SEO URLs
 */
const fs = require('fs');
const seed = JSON.parse(fs.readFileSync('./data/seed_data.json', 'utf8'));

const baseUrl = 'https://siddhashila-eevva.co.in';
const today = new Date().toISOString().split('T')[0];

function generateUrlXml(loc, priority = '0.8', freq = 'weekly') {
  return `  <url>\n    <loc>${baseUrl}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}

function writeSitemapFile(filename, urls) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('')}</urlset>\n`;
  fs.writeFileSync(`./public_sitemaps/${filename}`, xml);
  console.log(`Generated ${filename} with ${urls.length} URLs`);
}

if (!fs.existsSync('./public_sitemaps')) {
  fs.mkdirSync('./public_sitemaps');
}

// 1. Cluster A: Configurations & Budgets (~1,152 variations)
const configUrls = [];
seed.configurations.forEach(cfg => {
  seed.localities.forEach(loc => {
    seed.budgets.forEach(bgt => {
      configUrls.push(generateUrlXml(`/flats/${cfg.slug}-in-${loc.slug}-${bgt.slug}/`, '0.85'));
    });
  });
});
writeSitemapFile('sitemap-configs.xml', configUrls);

// 2. Cluster B: Commute & IT Tech Parks (~540 variations)
const commuteUrls = [];
seed.workplaces.forEach(wp => {
  seed.configurations.forEach(cfg => {
    commuteUrls.push(generateUrlXml(`/commute/flats-near-${wp.slug}-${cfg.slug}/`, '0.8'));
  });
});
writeSitemapFile('sitemap-commute.xml', commuteUrls);

// 3. Cluster C: Schools (~420 variations)
const schoolUrls = [];
seed.schools.forEach(sc => {
  seed.configurations.forEach(cfg => {
    schoolUrls.push(generateUrlXml(`/schools/residences-near-${sc.slug}-${cfg.slug}/`, '0.75'));
  });
});
writeSitemapFile('sitemap-schools.xml', schoolUrls);

// 4. Cluster D: Healthcare & Retail (~540 variations)
const landmarkUrls = [];
seed.hospitals.concat(seed.retail).forEach(lm => {
  seed.configurations.forEach(cfg => {
    landmarkUrls.push(generateUrlXml(`/landmarks/properties-near-${lm.slug}-${cfg.slug}/`, '0.75'));
  });
});
writeSitemapFile('sitemap-landmarks.xml', landmarkUrls);

// 5. Cluster E: Hyperlocal Guides (~750 variations)
const guideTopics = [
  'property-price-trends-2026', 'infrastructure-and-water-supply', 'rental-yield-and-roi-analysis',
  '30m-dp-road-master-plan-impact', 'top-amenities-comparison', 'safety-and-community-living',
  'connectivity-to-hinjewadi-it-park', 'mumbai-pune-expressway-access-benefits'
];
const guideUrls = [];
seed.localities.forEach(loc => {
  guideTopics.forEach(top => {
    guideUrls.push(generateUrlXml(`/pune-real-estate/${loc.slug}/${top}/`, '0.7'));
  });
});
writeSitemapFile('sitemap-guides.xml', guideUrls);

// 6. Generate Master Sitemap Index XML
const sitemaps = [
  'sitemap.xml',
  'sitemap-configs.xml',
  'sitemap-commute.xml',
  'sitemap-schools.xml',
  'sitemap-landmarks.xml',
  'sitemap-guides.xml'
];

let indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
sitemaps.forEach(sm => {
  indexXml += `  <sitemap>\n    <loc>${baseUrl}/${sm}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n`;
});
indexXml += `</sitemapindex>\n`;

fs.writeFileSync('./sitemap-index.xml', indexXml);
console.log('Master sitemap-index.xml generated successfully!');
