const fs = require('fs');
const path = require('path');

// 1. Update Header.tsx
const headerPath = path.join(__dirname, '..', 'src', 'components', 'layout', 'Header.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Replace search button with Link to /products
const oldSearchBtn = `<button
              type="button"
              onClick={() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-2 text-slate-500 hover:text-pophen-navy hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Search Cleanroom Products"
              title="Search products"
            >
              <Search className="w-4 h-4" />
            </button>`;

const newSearchBtn = `<Link
              href="/products"
              className="p-2 text-slate-500 hover:text-pophen-navy hover:bg-slate-100 rounded-lg transition-colors inline-flex items-center justify-center"
              aria-label="Search Cleanroom Products"
              title="Search products"
            >
              <Search className="w-4 h-4" />
            </Link>`;

// Normalize line endings for replacement
headerContent = headerContent.replace(/\r\n/g, '\n');
if (headerContent.includes(oldSearchBtn.replace(/\r\n/g, '\n'))) {
  headerContent = headerContent.replace(oldSearchBtn.replace(/\r\n/g, '\n'), newSearchBtn);
  fs.writeFileSync(headerPath, headerContent, 'utf8');
  console.log('✓ Header.tsx search button updated');
} else {
  console.log('• Checking Header.tsx search button pattern...');
  const searchRegex = /<button\s+type="button"\s+onClick=\{\(\)\s*=>\s*\{[\s\S]*?id\("products"\)[\s\S]*?\}[\s\S]*?className="p-2 text-slate-500[\s\S]*?<\/button>/;
  if (searchRegex.test(headerContent)) {
    headerContent = headerContent.replace(searchRegex, newSearchBtn);
    fs.writeFileSync(headerPath, headerContent, 'utf8');
    console.log('✓ Header.tsx search button updated via regex');
  } else {
    console.log('⚠ Search button pattern not matched');
  }
}

// 2. Update ProductMegaMenu.tsx
const megaMenuPath = path.join(__dirname, '..', 'src', 'components', 'layout', 'ProductMegaMenu.tsx');
let megaContent = fs.readFileSync(megaMenuPath, 'utf8').replace(/\r\n/g, '\n');

// Update TOP_ROW_ITEMS hrefs
megaContent = megaContent.replace('href: "#cleanroom-walls",', 'href: "/products/r-series",');
megaContent = megaContent.replace('href: "#ceilings",', 'href: "/products/ck2000-walkable",');
megaContent = megaContent.replace('href: "#doors",', 'href: "/products/doors-windows",');
megaContent = megaContent.replace('href: "#cleanroom-windows",', 'href: "/products/doors-windows",');

// Update BOTTOM_ROW_ITEMS hrefs
megaContent = megaContent.replace('href: "#modular-partitions",', 'href: "/products/ss2000",');
megaContent = megaContent.replace('href: "#air-units",', 'href: "/products/ck2000-ffu",');
megaContent = megaContent.replace('href: "#contact",\n    isCustom: true,', 'href: "/solutions",\n    isCustom: true,');

// Update "View All Products" link
megaContent = megaContent.replace('href="#products"', 'href="/products"');

// Update bottom 3-column value proposition items to link to certifications, contact, and resources
const oldValItem1 = `<div className="flex items-center gap-2.5 pr-3">`;
const newValItem1 = `<Link href="/certifications" className="flex items-center gap-2.5 pr-3 group hover:opacity-90 transition-opacity">`;
const oldValItem2 = `<div className="flex items-center gap-2.5 px-3">`;
const newValItem2 = `<Link href="/contact" className="flex items-center gap-2.5 px-3 group hover:opacity-90 transition-opacity">`;
const oldValItem3 = `<div className="flex items-center gap-2.5 pl-3">`;
const newValItem3 = `<Link href="/resources" className="flex items-center gap-2.5 pl-3 group hover:opacity-90 transition-opacity">`;

if (megaContent.includes(oldValItem1)) {
  megaContent = megaContent.replace(oldValItem1, newValItem1);
  megaContent = megaContent.replace(oldValItem2, newValItem2);
  megaContent = megaContent.replace(oldValItem3, newValItem3);
  // Also close the tags properly
  // Replace the closing tags of those 3 divs with </Link>
  megaContent = megaContent.replace(
    /Engineered to global cleanroom standards\s*<\/div>\s*<\/div>\s*<\/div>/,
    'Engineered to global cleanroom standards\n            </div>\n          </div>\n        </Link>'
  );
  megaContent = megaContent.replace(
    /Design, installation and service nationwide\s*<\/div>\s*<\/div>\s*<\/div>/,
    'Design, installation and service nationwide\n            </div>\n          </div>\n        </Link>'
  );
  megaContent = megaContent.replace(
    /Our engineering team provides direct support\s*<\/div>\s*<\/div>\s*<\/div>/,
    'Our engineering team provides direct support\n            </div>\n          </div>\n        </Link>'
  );
}

fs.writeFileSync(megaMenuPath, megaContent, 'utf8');
console.log('✓ ProductMegaMenu.tsx links updated');

// 3. Update company.ts
const companyPath = path.join(__dirname, '..', 'src', 'data', 'company.ts');
let companyContent = fs.readFileSync(companyPath, 'utf8').replace(/\r\n/g, '\n');

companyContent = companyContent.replace('href: "#products",', 'href: "/products",');
companyContent = companyContent.replace('href: "#cleanroom-walls",', 'href: "/products/r-series",');
companyContent = companyContent.replace('href: "#ceilings",', 'href: "/products/ck2000-walkable",');
companyContent = companyContent.replace('href: "#doors",', 'href: "/products/doors-windows",');
companyContent = companyContent.replace('href: "#cleanroom-windows",', 'href: "/products/doors-windows",');
companyContent = companyContent.replace('href: "#modular-partitions",', 'href: "/products/ss2000",');
companyContent = companyContent.replace('href: "#air-units",', 'href: "/products/ck2000-ffu",');

companyContent = companyContent.replace('href: "#about"', 'href: "/about"');
companyContent = companyContent.replace('href: "#industries"', 'href: "/industries"');
companyContent = companyContent.replace('href: "#process"', 'href: "/expertise"');
companyContent = companyContent.replace('href: "#showcase"', 'href: "/projects"');
companyContent = companyContent.replace('href: "#contact"', 'href: "/contact"');

fs.writeFileSync(companyPath, companyContent, 'utf8');
console.log('✓ company.ts NAV_ITEMS updated');

// 4. Update MobileNav.tsx
const mobileNavPath = path.join(__dirname, '..', 'src', 'components', 'layout', 'MobileNav.tsx');
let mobileNavContent = fs.readFileSync(mobileNavPath, 'utf8').replace(/\r\n/g, '\n');

// Replace href={`#${product.id}`} with href={`/products/${product.id}`}
mobileNavContent = mobileNavContent.replace('href={`#${product.id}`}', 'href={`/products/${product.id}`}');
mobileNavContent = mobileNavContent.replace('href="#products"', 'href="/products"');

fs.writeFileSync(mobileNavPath, mobileNavContent, 'utf8');
console.log('✓ MobileNav.tsx links updated');

// 5. Update Footer.tsx
const footerPath = path.join(__dirname, '..', 'src', 'components', 'layout', 'Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8').replace(/\r\n/g, '\n');

// Cleanroom systems column
footerContent = footerContent.replace('{ name: "Cleanroom Wall Panels", href: "#cleanroom-walls" }', '{ name: "Cleanroom Wall Panels", href: "/products/r-series" }');
footerContent = footerContent.replace('{ name: "Ceiling Systems", href: "#ceilings" }', '{ name: "Ceiling Systems", href: "/products/ck2000-walkable" }');
footerContent = footerContent.replace('{ name: "Cleanroom Doors", href: "#doors" }', '{ name: "Cleanroom Doors", href: "/products/doors-windows" }');
footerContent = footerContent.replace('{ name: "Cleanroom Windows", href: "#cleanroom-windows" }', '{ name: "Cleanroom Windows", href: "/products/doors-windows" }');
footerContent = footerContent.replace('{ name: "Modular Partitions", href: "#modular-partitions" }', '{ name: "Modular Partitions", href: "/products/ss2000" }');
footerContent = footerContent.replace('{ name: "Air Units & Systems", href: "#air-units" }', '{ name: "Air Units & Systems", href: "/products/ck2000-ffu" }');

// Navigation links column
footerContent = footerContent.replace('{ name: "About Us", href: "#about" }', '{ name: "About Us", href: "/about" }');
footerContent = footerContent.replace('{ name: "Products", href: "#products" }', '{ name: "Products", href: "/products" }');
footerContent = footerContent.replace('{ name: "Industries", href: "#industries" }', '{ name: "Industries", href: "/industries" }');
footerContent = footerContent.replace('{ name: "Process", href: "#process" }', '{ name: "Process", href: "/expertise" }');
footerContent = footerContent.replace('{ name: "Installations", href: "#showcase" }', '{ name: "Installations", href: "/projects" }');
footerContent = footerContent.replace('{ name: "Contact", href: "#contact" }', '{ name: "Contact", href: "/contact" }');

// Bottom copyright/legal links
footerContent = footerContent.replace('<Link href="#about" className="hover:text-white transition-colors">Privacy Policy</Link>', '<Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>');
footerContent = footerContent.replace('<Link href="#process" className="hover:text-white transition-colors">Terms of Use</Link>', '<Link href="/expertise" className="hover:text-white transition-colors">Terms of Use</Link>');
footerContent = footerContent.replace('<Link href="#contact" className="hover:text-white transition-colors">Sitemap</Link>', '<Link href="/resources" className="hover:text-white transition-colors">Sitemap</Link>');

fs.writeFileSync(footerPath, footerContent, 'utf8');
console.log('✓ Footer.tsx links updated');
