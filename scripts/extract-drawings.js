const fs = require('fs');
const path = require('path');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');
const sharp = require('sharp');

const pdfPath = 'C:/Users/admin/.gemini/antigravity/brain/4fe64949-94f3-476a-a01f-008163cc17c9/.user_uploaded/media_1793864043916_da880914.pdf';

async function extractImagesFromPages(startPage, endPage) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data }).promise;

  for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
    const page = await doc.getPage(pageNum);
    const operatorList = await page.getOperatorList();
    let imgIdx = 0;

    for (let i = 0; i < operatorList.fnArray.length; i++) {
      if (operatorList.fnArray[i] === pdfjs.OPS.paintImageXObject) {
        const imgName = operatorList.argsArray[i][0];
        try {
          const imgObj = await page.objs.get(imgName);
          if (imgObj && imgObj.data) {
            imgIdx++;
            const width = imgObj.width;
            const height = imgObj.height;
            console.log(`Page ${pageNum} Image ${imgIdx}: ${imgName} (${width}x${height}, channels: ${imgObj.data.length / (width * height)})`);
            
            // If width > 80 and height > 80, save to drawings or tmp
            if (width > 80 && height > 80) {
              const outPath = path.join(__dirname, '..', 'public', 'images', 'drawings', `p${pageNum}_img${imgIdx}_${width}x${height}.png`);
              // Create sharp image from raw rgba or rgb
              const channels = imgObj.data.length / (width * height);
              if (channels === 3 || channels === 4) {
                await sharp(Buffer.from(imgObj.data), {
                  raw: {
                    width: width,
                    height: height,
                    channels: channels
                  }
                }).png().toFile(outPath);
                console.log(`  Saved -> ${outPath}`);
              }
            }
          }
        } catch (err) {
          console.error(`  Error extracting ${imgName}:`, err.message);
        }
      }
    }
  }
}

extractImagesFromPages(11, 17).catch(console.error);
