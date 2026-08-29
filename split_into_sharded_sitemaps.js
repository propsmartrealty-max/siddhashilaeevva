/**
 * Shard the 5,349 URLs cleanly into 6 distinct sitemaps + a clean sitemap-index.xml
 * (Ensures sitemap.xml is NOT recursively included in sitemap-index.xml)
 */
const fs = require('fs');
const content = fs.readFileSync('sitemap.xml', 'utf8');

const urlMatches = content.match(/<url>[\s\S]*?<\/url>/gi) || [];
console.log(`Total URLs in sitemap.xml to distribute: ${urlMatches.length}`);

// Clean distribution buckets
const sitemaps = {
  'sitemap-core.xml': [],
  'sitemap-flats-1.xml': [],
  'sitemap-flats-2.xml': [],
  'sitemap-commute.xml': [],
  'sitemap-schools-landmarks.xml': [],
  'sitemap-guides.xml': []
};

urlMatches.forEach(urlBlock => {
  if (urlBlock.includes('<loc>https://siddhashila-eevva.co.in/</loc>') || urlBlock.includes('image:image')) {
    sitemaps['sitemap-core.xml'].push(urlBlock);
  } else if (urlBlock.includes('/commute/')) {
    sitemaps['sitemap-commute.xml'].push(urlBlock);
  } else if (urlBlock.includes('/schools/') || urlBlock.includes('/landmarks/')) {
    sitemaps['sitemap-schools-landmarks.xml'].push(urlBlock);
  } else if (urlBlock.includes('/pune-real-estate/')) {
    sitemaps['sitemap-guides.xml'].push(urlBlock);
  } else {
    if (sitemaps['sitemap-flats-1.xml'].length < 2000) {
      sitemaps['sitemap-flats-1.xml'].push(urlBlock);
    } else {
      sitemaps['sitemap-flats-2.xml'].push(urlBlock);
    }
  }
});

const today = new Date().toISOString().split('T')[0];

let indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

Object.keys(sitemaps).forEach(filename => {
  const urls = sitemaps[filename];
  const fileXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                            http://www.google.com/schemas/sitemap-image/1.1 
                            http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${urls.join('\n')}
</urlset>
`;
  fs.writeFileSync(filename, fileXml);
  console.log(`Created ${filename} with ${urls.length} URLs`);

  indexXml += `  <sitemap>\n    <loc>https://siddhashila-eevva.co.in/${filename}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n`;
});

indexXml += `</sitemapindex>\n`;
fs.writeFileSync('sitemap-index.xml', indexXml);
console.log('Clean sitemap-index.xml successfully generated!');
