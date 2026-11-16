const fs = require('fs');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

const pdfPath = 'C:/Users/admin/.gemini/antigravity/brain/4fe64949-94f3-476a-a01f-008163cc17c9/.user_uploaded/media_1793864043916_da880914.pdf';

async function extractPages(start, end) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data }).promise;

  for (let i = start; i <= end; i++) {
    const page = await doc.getPage(i);
    const textContent = await page.getTextContent();
    console.log(`\n=================== PAGE ${i} ===================`);
    let currentY = null;
    let line = '';
    for (const item of textContent.items) {
      if (currentY !== null && Math.abs(item.transform[5] - currentY) > 5) {
        console.log(line);
        line = '';
      }
      currentY = item.transform[5];
      line += (line ? ' ' : '') + item.str;
    }
    if (line) console.log(line);
  }
}

extractPages(12, 16).catch(console.error);
