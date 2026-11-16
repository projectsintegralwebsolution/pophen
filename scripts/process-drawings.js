const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const drawingsDir = path.join(__dirname, '..', 'public', 'images', 'drawings');

async function processDrawings() {
  const mapping = [
    { src: 'p13_img1_272x164.png', dest: 'r-series-drawing.webp', title: 'R-Series Removable Wall System Cross-Section' },
    { src: 'p13_img2_206x164.png', dest: 'c-series-drawing.webp', title: 'C-Series Caulking Wall Joint & Hermetic Profile' },
    { src: 'p14_img1_241x169.png', dest: 'ss2000-drawing.webp', title: 'SS2000 Stud Wall Profile & Concealed Framework' },
    { src: 'p14_img2_263x149.png', dest: 'sl2000-drawing.webp', title: 'SL2000 Stud-less Modular Interlocking Joint' },
    { src: 'p15_img1_253x185.png', dest: 'cl2000-drawing.webp', title: 'CL2000 Pasted Wall Cladding Profile' },
    { src: 'p15_img2_622x449.png', dest: 'b-series-drawing.webp', title: 'B-Series Heavy-Duty Modular Panel Construction' },
    { src: 'p16_img1_1882x453.png', dest: 'ck2000-walkable-drawing.webp', title: 'CK2000 Heavy Duty Walkable Ceiling Grid Profile' },
    { src: 'p12_img5_266x200.png', dest: 'i-grid-drawing.webp', title: 'I-GRID Hidden Frame Flush Suspension Profile' },
    { src: 'p12_img4_266x200.png', dest: 'ck2000-ffu-drawing.webp', title: 'CK2000 FFU Integrated Ceiling Grid & Light Track' },
    { src: 'p11_img3_561x293.png', dest: 'd-grid-drawing.webp', title: 'D-GRID Heavy Industrial Plenum Ceiling System' },
    { src: 'p12_img10_279x339.png', dest: 'doors-windows-drawing.webp', title: 'Cleanroom Flush Double-Glazed Window & Door Frame' },
    { src: 'p12_img9_280x212.png', dest: 'doors-drawing.webp', title: 'Airtight Cleanroom Swing Door Assembly Detail' },
    { src: 'p12_img3_1280x933.png', dest: 'cleanroom-architecture-overview.webp', title: 'Comprehensive Fab Architectural System Layout' },
  ];

  for (const item of mapping) {
    const srcFile = path.join(drawingsDir, item.src);
    const destFile = path.join(drawingsDir, item.dest);
    if (fs.existsSync(srcFile)) {
      await sharp(srcFile)
        .webp({ quality: 90 })
        .toFile(destFile);
      console.log(`Converted: ${item.src} -> ${item.dest}`);
    } else {
      console.log(`Missing source: ${srcFile}`);
    }
  }
}

processDrawings().catch(console.error);
