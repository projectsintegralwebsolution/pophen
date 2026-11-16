const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const srcPdf = 'C:/Users/admin/.gemini/antigravity/brain/4fe64949-94f3-476a-a01f-008163cc17c9/.user_uploaded/media_1793864043916_da880914.pdf';
const docsDir = path.join(__dirname, '..', 'public', 'documents');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// 1. Copy master brochure
fs.copyFileSync(srcPdf, path.join(docsDir, 'pophen-cleanroom-architecture-profile.pdf'));
console.log('✓ Copied master brochure profile');

async function extractCertPdfs() {
  const existingPdfBytes = fs.readFileSync(srcPdf);
  const srcDoc = await PDFDocument.load(existingPdfBytes);

  // Extract Page 4 & 5 (0-indexed: 3 & 4)
  const certDoc = await PDFDocument.create();
  const [page4, page5] = await certDoc.copyPages(srcDoc, [3, 4]);
  certDoc.addPage(page4);
  certDoc.addPage(page5);
  const certBytes = await certDoc.save();
  fs.writeFileSync(path.join(docsDir, 'pophen-product-certifications-verified.pdf'), certBytes);
  console.log('✓ Created pophen-product-certifications-verified.pdf');

  // FM Certificate (page 4 only)
  const fmDoc = await PDFDocument.create();
  const [fmPage] = await fmDoc.copyPages(srcDoc, [3]);
  fmDoc.addPage(fmPage);
  fs.writeFileSync(path.join(docsDir, 'pophen-fm-approved-certificate.pdf'), await fmDoc.save());
  console.log('✓ Created pophen-fm-approved-certificate.pdf');

  // Testing reports (page 5 only)
  const reportDoc = await PDFDocument.create();
  const [repPage] = await reportDoc.copyPages(srcDoc, [4]);
  reportDoc.addPage(repPage);
  fs.writeFileSync(path.join(docsDir, 'pophen-tuv-intertek-analab-reports.pdf'), await reportDoc.save());
  console.log('✓ Created pophen-tuv-intertek-analab-reports.pdf');
}

extractCertPdfs().catch(console.error);
