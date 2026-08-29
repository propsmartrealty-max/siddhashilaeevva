const fs = require('fs');

const sitemaps = [
  'sitemap.xml',
  'sitemap-configs.xml',
  'sitemap-commute.xml',
  'sitemap-schools.xml',
  'sitemap-landmarks.xml',
  'sitemap-guides.xml'
];

let allUrlBlocks = [];

sitemaps.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/<url>[\s\S]*?<\/url>/gi);
    if (matches) {
      allUrlBlocks = allUrlBlocks.concat(matches);
    }
  }
});

const unifiedXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                            http://www.google.com/schemas/sitemap-image/1.1 
                            http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${allUrlBlocks.join('\n')}
</urlset>
`;

fs.writeFileSync('sitemap.xml', unifiedXml);
console.log(`Merged ${allUrlBlocks.length} URLs directly into sitemap.xml!`);
