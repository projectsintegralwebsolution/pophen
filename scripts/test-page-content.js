const http = require('http');

async function getHtml(path) {
  return new Promise((resolve) => {
    http.get({ hostname: '127.0.0.1', port: 3001, path }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    });
  });
}

async function verify() {
  console.log('--- Checking /our-clientele ---');
  const clienteleHtml = await getHtml('/our-clientele');
  const clients = ['Intel', 'Tesla', 'CATL', 'Tata Electronics', 'Premier Energies', 'Bosch', 'GlobalFoundries'];
  for (const c of clients) {
    console.log(`  Client "${c}":`, clienteleHtml.includes(c) ? '✓ Found' : '✗ Missing');
  }

  console.log('\n--- Checking /product-certifications ---');
  const certHtml = await getHtml('/product-certifications');
  const certs = ['FM4882', 'Analab', 'TÜV SÜD', 'Intertek', 'Download Complete Dossier'];
  for (const c of certs) {
    console.log(`  Cert "${c}":`, certHtml.includes(c) ? '✓ Found' : '✗ Missing');
  }

  console.log('\n--- Checking /products/r-series ---');
  const rSeriesHtml = await getHtml('/products/r-series');
  const rElements = ['Technical Specifications', 'Technical Drawings & System Details', 'R50 / R75 / R100', 'FM4882'];
  for (const el of rElements) {
    console.log(`  Element "${el}":`, rSeriesHtml.includes(el) ? '✓ Found' : '✗ Missing');
  }

  console.log('\n--- Checking /products/ck2000-walkable ---');
  const ckHtml = await getHtml('/products/ck2000-walkable');
  const ckElements = ['150 kg', '250 kg/m²', 'Walkable Ceiling Grid Profile', 'Technical Specifications'];
  for (const el of ckElements) {
    console.log(`  Element "${el}":`, ckHtml.includes(el) ? '✓ Found' : '✗ Missing');
  }
}

verify().catch(console.error);
