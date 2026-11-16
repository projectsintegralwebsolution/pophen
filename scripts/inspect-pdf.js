const fs = require('fs');
const path = require('path');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

const pdfPath = 'C:/Users/admin/.gemini/antigravity/brain/4fe64949-94f3-476a-a01f-008163cc17c9/.user_uploaded/media_1793864043916_da880914.pdf';

async function inspectPdf() {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data }).promise;
  console.log(`Total Pages: ${doc.numPages}`);

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const textContent = await page.getTextContent();
    const strings = textContent.items.map(item => item.str).filter(s => s.trim().length > 0);
    const summary = strings.slice(0, 10).join(' ');
    console.log(`Page ${i}: ${summary.substring(0, 120)}`);
  }
}

inspectPdf().catch(console.error);
