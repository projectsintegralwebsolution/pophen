const fs = require('fs');
const path = require('path');

// 1. Update Header.tsx
const headerPath = path.join(__dirname, '..', 'src', 'components', 'layout', 'Header.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf8').replace(/\r\n/g, '\n');

const oldInstallations = `            <Link
              href="/projects"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors"
            >
              Installations
            </Link>`;

const newInstallationsWithClientele = `            <Link
              href="/projects"
              className="px-2.5 xl:px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              Installations
            </Link>

            <Link
              href="/our-clientele"
              className="px-2.5 xl:px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              Clientele
            </Link>

            <Link
              href="/product-certifications"
              className="px-2.5 xl:px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              Certifications
            </Link>`;

if (headerContent.includes(oldInstallations)) {
  headerContent = headerContent.replace(oldInstallations, newInstallationsWithClientele);
  fs.writeFileSync(headerPath, headerContent, 'utf8');
  console.log('✓ Header.tsx updated with Clientele and Certifications');
} else {
  console.log('• Checking Header.tsx installations match pattern...');
}

// 2. Update ProductMegaMenu.tsx link from /certifications to /product-certifications
const megaMenuPath = path.join(__dirname, '..', 'src', 'components', 'layout', 'ProductMegaMenu.tsx');
let megaContent = fs.readFileSync(megaMenuPath, 'utf8').replace(/\r\n/g, '\n');
megaContent = megaContent.replace('href="/certifications"', 'href="/product-certifications"');
fs.writeFileSync(megaMenuPath, megaContent, 'utf8');
console.log('✓ ProductMegaMenu.tsx updated with /product-certifications');

// 3. Update company.ts
const companyPath = path.join(__dirname, '..', 'src', 'data', 'company.ts');
let companyContent = fs.readFileSync(companyPath, 'utf8').replace(/\r\n/g, '\n');
if (!companyContent.includes('Our Clientele')) {
  companyContent = companyContent.replace(
    '{ name: "Installations", href: "/projects" },',
    `{ name: "Installations", href: "/projects" },
  { name: "Our Clientele", href: "/our-clientele" },
  { name: "Product Certifications", href: "/product-certifications" },`
  );
  fs.writeFileSync(companyPath, companyContent, 'utf8');
  console.log('✓ company.ts NAV_ITEMS updated with new pages');
}

// 4. Update Footer.tsx
const footerPath = path.join(__dirname, '..', 'src', 'components', 'layout', 'Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8').replace(/\r\n/g, '\n');
if (!footerContent.includes('Our Clientele')) {
  footerContent = footerContent.replace(
    '{ name: "Installations", href: "/projects" },',
    `{ name: "Installations", href: "/projects" },
    { name: "Our Clientele", href: "/our-clientele" },
    { name: "Product Certifications", href: "/product-certifications" },`
  );
  fs.writeFileSync(footerPath, footerContent, 'utf8');
  console.log('✓ Footer.tsx navigationLinks updated with new pages');
}
