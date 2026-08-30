const fs = require('fs');
const baseUrl = 'https://siddhashila-eevva.co.in';

const products = [
  {
    id: 'EEVVA-2BHK-CLASSIC',
    title: 'Siddhashila EEVVA 2 BHK Classic Luxury Flat in Punawale, Pune (806 sq.ft.)',
    description: 'Buy premium 2 BHK Classic residence in Punawale, Pune with 801-806 sq.ft. carpet area. 3.5-acre Sri Yantra rhombus architecture, 60+ lifestyle amenities, 4-level parking on 30m DP road near Hinjewadi IT Park. MahaRERA: PM1260002503079.',
    link: `${baseUrl}/#configurations`,
    image_link: 'https://siddhashilaeevva.com/wp-content/uploads/2026/03/1.webp',
    additional_image_link: 'https://siddhashilaeevva.com/wp-content/uploads/2026/03/Semi-Ariel-NIght-Cam4.webp',
    price: '8300000.00 INR',
    condition: 'new',
    availability: 'in_stock',
    brand: 'Siddhashila Group',
    google_product_category: 'Business &amp; Industrial &gt; Real Estate &gt; Residential Properties',
    product_type: 'Real Estate &gt; Residential &gt; 2 BHK Apartments',
    mpn: 'EEVVA-2BHK-806',
    item_group_id: 'EEVVA-RESIDENCES'
  },
  {
    id: 'EEVVA-3BHK-PREMIA',
    title: 'Siddhashila EEVVA 3 BHK Premia Luxury Flat in Punawale, Pune (973 sq.ft.)',
    description: 'Spacious 3 BHK Premia luxury apartment with 969-973 sq.ft. carpet area, 3 bedrooms, 3 bathrooms, and 2 balconies near Hinjewadi IT corridor. Only 1 shared wall per home for superior privacy. MahaRERA: PM1260002503079.',
    link: `${baseUrl}/#configurations`,
    image_link: 'https://siddhashila.com/assets/img/residential/eevva/3BHKPremia.jpg',
    additional_image_link: 'https://siddhashilaeevva.com/wp-content/uploads/2026/03/Eye_Level_Cam_012.webp',
    price: '10500000.00 INR',
    condition: 'new',
    availability: 'in_stock',
    brand: 'Siddhashila Group',
    google_product_category: 'Business &amp; Industrial &gt; Real Estate &gt; Residential Properties',
    product_type: 'Real Estate &gt; Residential &gt; 3 BHK Apartments',
    mpn: 'EEVVA-3BHK-973',
    item_group_id: 'EEVVA-RESIDENCES'
  },
  {
    id: 'EEVVA-3BHK-LUXURIA',
    title: 'Siddhashila EEVVA 3 BHK Luxuria Ultra-Spacious Flat in Punawale, Pune (1102 sq.ft.)',
    description: 'Ultra-luxury 3 BHK Luxuria residence with 1102 sq.ft. carpet area, 3 scenic balconies, dry kitchen, and panoramic corridor views. Access to 46,000 sq.ft. podium amenities deck. MahaRERA: PM1260002503079.',
    link: `${baseUrl}/#configurations`,
    image_link: 'https://siddhashila.com/assets/img/residential/eevva/3BHKLuxuria.jpg',
    additional_image_link: 'https://siddhashilaeevva.com/wp-content/uploads/2026/03/Semi-Ariel-NIght-Cam4.webp',
    price: '12500000.00 INR',
    condition: 'new',
    availability: 'in_stock',
    brand: 'Siddhashila Group',
    google_product_category: 'Business &amp; Industrial &gt; Real Estate &gt; Residential Properties',
    product_type: 'Real Estate &gt; Residential &gt; 3 BHK Luxury Apartments',
    mpn: 'EEVVA-3BHK-1102',
    item_group_id: 'EEVVA-RESIDENCES'
  }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Siddhashila EEVVA Punawale - Official Residential Inventory</title>
    <link>${baseUrl}</link>
    <description>Google Merchant Product Feed for Siddhashila EEVVA 2 and 3 BHK luxury residences in Punawale, Pune.</description>
`;

products.forEach(p => {
  xml += `    <item>
      <g:id>${p.id}</g:id>
      <g:title>${p.title}</g:title>
      <g:description>${p.description}</g:description>
      <g:link>${p.link}</g:link>
      <g:image_link>${p.image_link}</g:image_link>
      <g:additional_image_link>${p.additional_image_link}</g:additional_image_link>
      <g:price>${p.price}</g:price>
      <g:condition>${p.condition}</g:condition>
      <g:availability>${p.availability}</g:availability>
      <g:brand>${p.brand}</g:brand>
      <g:google_product_category>${p.google_product_category}</g:google_product_category>
      <g:product_type>${p.product_type}</g:product_type>
      <g:mpn>${p.mpn}</g:mpn>
      <g:item_group_id>${p.item_group_id}</g:item_group_id>
    </item>\n`;
});

xml += `  </channel>
</rss>`;

fs.writeFileSync('google-merchant-feed.xml', xml);
console.log('google-merchant-feed.xml generated successfully!');
