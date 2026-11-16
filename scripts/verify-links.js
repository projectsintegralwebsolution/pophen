const http = require('http');

const urls = [
  '/',
  '/about',
  '/our-clientele',
  '/product-certifications',
  '/industries',
  '/industries/semiconductor',
  '/industries/battery',
  '/industries/solar-cell',
  '/industries/data-centre',
  '/industries/hi-tech',
  '/industries/medical-devices',
  '/expertise',
  '/projects',
  '/certifications',
  '/resources',
  '/solutions',
  '/contact',
  '/products',
  '/products/r-series',
  '/products/c-series',
  '/products/ss2000',
  '/products/sl2000',
  '/products/cl2000',
  '/products/b-series',
  '/products/ck2000-walkable',
  '/products/i-grid',
  '/products/ck2000-ffu',
  '/products/d-grid',
  '/products/doors-windows',
  '/products/cleanroom-walls',
  '/products/ceilings',
  '/products/doors',
  '/products/cleanroom-windows',
  '/products/modular-partitions',
  '/products/air-units',
  '/documents/pophen-fm-approved-certificate.pdf',
  '/documents/pophen-tuv-intertek-analab-reports.pdf',
  '/documents/pophen-product-certifications-verified.pdf',
  '/documents/pophen-cleanroom-architecture-profile.pdf',
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get({
      hostname: '127.0.0.1',
      port: 3001,
      path: path,
      timeout: 4000,
    }, (res) => {
      resolve({ path, statusCode: res.statusCode });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing all website routes including new pages & PDF documents on http://localhost:3001 ...');
  let hasFailure = false;
  for (const u of urls) {
    const result = await checkUrl(u);
    if (result.statusCode === 200) {
      console.log(`[PASS 200] ${u}`);
    } else {
      hasFailure = true;
      console.log(`[FAIL ${result.statusCode || 'ERR'}] ${u} -> ${result.error || ''}`);
    }
  }

  if (!hasFailure) {
    console.log('\nSUCCESS: All ' + urls.length + ' routes verified with HTTP 200!');
  } else {
    console.error('\nFAILURE: Some routes did not return 200.');
    process.exit(1);
  }
}

run();
