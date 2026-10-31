const http = require('http');

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

function post(url, payload) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };
    const req = http.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data: JSON.parse(data) }));
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runTests() {
  console.log('=== STARTING AUTOMATED HOMEPAGE & BACKEND TESTS ===\n');

  // Test 1: Fetch Homepage HTML
  console.log('[Test 1] Testing Homepage GET http://localhost:3000/');
  const home = await get('http://localhost:3000/');
  console.log('Homepage status:', home.status);
  if (home.status !== 200) throw new Error('Homepage returned status ' + home.status);

  // Checks:
  const html = home.data;

  // Check H1
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  console.log('H1 found:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NONE');
  if (!h1Match) throw new Error('Missing primary H1 on homepage!');

  // Check Developer Credit
  const devCreditPresent = html.includes('https://integralwebsolution.in/') && html.includes('Integral Web Solution');
  console.log('Developer Credit ("Integral Web Solution" -> https://integralwebsolution.in/):', devCreditPresent ? 'PASS' : 'FAIL');
  if (!devCreditPresent) throw new Error('Missing Developer Credit link to integralwebsolution.in');

  // Check WhatsApp link
  const waPresent = html.includes('wa.me/917400197293') || html.includes('917400197293');
  console.log('WhatsApp official link present:', waPresent ? 'PASS' : 'FAIL');
  if (!waPresent) throw new Error('Missing WhatsApp official phone number link');

  // Check Official Phone & Email & Address
  const phonePresent = html.includes('7400197293');
  const emailPresent = html.includes('info@pophen.in');
  const addressPresent = html.includes('Vikhroli');
  console.log('Phone, Email, Address present:', { phonePresent, emailPresent, addressPresent });
  if (!phonePresent || !emailPresent || !addressPresent) throw new Error('Missing verified contact info');

  // Check Verified Products
  const products = ['Cleanroom Walls', 'Ceilings', 'Doors', 'Cleanroom Windows', 'Mobile Clean Air Unit'];
  const allProductsPresent = products.every(p => html.includes(p));
  console.log('All 5 core products present:', allProductsPresent ? 'PASS' : 'FAIL');
  if (!allProductsPresent) throw new Error('One or more product lines missing');

  // Check Verified Industries
  const industries = ['Semiconductor', 'Pharmaceutical', 'Biotechnology', 'Medical Devices'];
  const allIndustriesPresent = industries.every(ind => html.includes(ind));
  console.log('All 4 industry applications present:', allIndustriesPresent ? 'PASS' : 'FAIL');
  if (!allIndustriesPresent) throw new Error('One or more industries missing');

  // Check Verified Activities
  const activities = ['Cleanrooms and Laboratories', 'Clean Interior', 'Design and Engineering', 'Maintenance', 'Academy', 'International'];
  const allActivitiesPresent = activities.every(act => html.includes(act));
  console.log('All 6 turnkey activities present:', allActivitiesPresent ? 'PASS' : 'FAIL');

  // Check Strict Scope: NO Blogs or Insights
  const hasBlogs = html.toLowerCase().includes('recent blog') || html.toLowerCase().includes('blog post') || html.toLowerCase().includes('latest insights');
  console.log('Scope check: No Blogs or Insights present:', !hasBlogs ? 'PASS' : 'FAIL');
  if (hasBlogs) throw new Error('Blogs section detected when forbidden by prompt');

  // Test 2: API POST /api/enquiry with valid payload
  console.log('\n[Test 2] Testing Valid Enquiry Submission to /api/enquiry');
  const validPayload = {
    fullName: 'Dr. Vikram Mehta',
    companyName: 'Sun Pharma Advanced Research',
    email: 'vikram.mehta@example.com',
    phone: '+91 98200 12345',
    productInterest: 'Pophen Modular Cleanroom Wall Systems',
    message: 'We require 450 sq. meters of modular wall panels for an ISO Class 7 pharmaceutical sterile suite in Mumbai.',
    hp_website: '',
  };
  const validRes = await post('http://localhost:3000/api/enquiry', validPayload);
  console.log('Valid response status:', validRes.status, validRes.data);
  if (!validRes.data.success || !validRes.data.referenceId) {
    throw new Error('Valid enquiry failed to return success and referenceId');
  }

  // Test 3: API POST /api/enquiry with invalid payload (missing email and message too short)
  console.log('\n[Test 3] Testing Invalid Enquiry Submission Validation');
  const invalidPayload = {
    fullName: '',
    companyName: '',
    email: 'not-an-email',
    phone: '',
    productInterest: '',
    message: 'short',
    hp_website: '',
  };
  const invalidRes = await post('http://localhost:3000/api/enquiry', invalidPayload);
  console.log('Invalid response status:', invalidRes.status, invalidRes.data);
  if (invalidRes.status !== 400 || !invalidRes.data.errors) {
    throw new Error('Invalid enquiry should return 400 with validation errors');
  }

  // Test 4: API POST /api/enquiry with spam honeypot
  console.log('\n[Test 4] Testing Spam Honeypot Submission');
  const spamPayload = {
    fullName: 'Spam Bot',
    companyName: 'Spam Co',
    email: 'spam@bot.com',
    phone: '+1 800 555 0199',
    productInterest: 'Doors',
    message: 'Spam promotional content here',
    hp_website: 'http://spam-link.ru',
  };
  const spamRes = await post('http://localhost:3000/api/enquiry', spamPayload);
  console.log('Spam honeypot response:', spamRes.data);

  // Test 5: Verify static image assets load with 200
  console.log('\n[Test 5] Testing Static Image Asset Accessibility');
  const sampleImages = [
    '/images/pophen-logo.webp',
    '/images/hero-cleanroom-Chp3Ho9d.webp',
    '/images/cleanroom-walls-detail-CJABaUMG.webp',
    '/images/cleanroom-ceilings-hero-d8AQO7Df.webp',
    '/images/cleanroom-doors-hero-D007b7fJ.webp',
    '/images/cleanroom-windows-hero-eqB039vc.webp',
    '/images/mobile-cleanair-unit-CWd-RN4y.webp',
    '/images/life-science-CFnV1sC8.webp',
    '/images/high-tech-shhypHUg.webp',
  ];

  for (const img of sampleImages) {
    const imgRes = await get(`http://localhost:3000${img}`);
    if (imgRes.status !== 200) {
      throw new Error(`Asset ${img} returned HTTP ${imgRes.status}`);
    }
  }
  console.log('All sample image assets loaded with HTTP 200 OK!');

  console.log('\n=== ALL TESTS PASSED SUCCESSFULLY! ===');
}

runTests().catch(err => {
  console.error('\nTEST FAILED:', err);
  process.exit(1);
});
