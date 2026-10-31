const fs = require('fs');

const rawSvg = fs.readFileSync('public/images/world-map.svg', 'utf8');

// Extract all <path ... /> tags
const paths = rawSvg.match(/<path[^>]+>/g) || [];

// Mumbai approximate coordinates in this viewBox (30.767 241.591 784.077 458.627)
// India path starts around M595, 509
const mumbaiX = 595;
const mumbaiY = 505;

// Destination endpoints
const destinations = [
  { name: 'Europe', x: 425, y: 345 },
  { name: 'North America', x: 215, y: 380 },
  { name: 'East Asia', x: 690, y: 415 },
  { name: 'Middle East', x: 520, y: 450 },
  { name: 'Australia', x: 710, y: 620 }
];

// Arcs from Mumbai
const arcs = destinations.map(dest => {
  const midX = (mumbaiX + dest.x) / 2;
  const midY = Math.min(mumbaiY, dest.y) - 40;
  return `
    <path d="M${mumbaiX} ${mumbaiY} Q ${midX} ${midY} ${dest.x} ${dest.y}" stroke="#00c2cb" stroke-width="1.2" stroke-dasharray="3 3" fill="none" stroke-opacity="0.75" />
    <circle cx="${dest.x}" cy="${dest.y}" r="2.5" fill="#38bdf8" fill-opacity="0.9" />
    <circle cx="${dest.x}" cy="${dest.y}" r="5" stroke="#38bdf8" stroke-width="0.8" stroke-opacity="0.4" fill="none" />
  `;
}).join('\n');

// Style country paths
const styledPaths = paths.map(p => {
  if (p.includes('id="in"')) {
    // Highlight India
    return p.replace(/<path/, '<path fill="#00c2cb" fill-opacity="0.6" stroke="#38bdf8" stroke-width="1.0" stroke-opacity="0.95"');
  }
  // Other countries - crisp outline and visible architectural cyan/blue fill
  return p.replace(/<path/, '<path fill="#0284c7" fill-opacity="0.28" stroke="#38bdf8" stroke-width="0.6" stroke-opacity="0.6"');
}).join('\n');

const newSvg = `<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="30.767 241.591 784.077 458.627"
     className="w-full h-full"
     preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Dot matrix grid pattern overlay across world -->
    <pattern id="dot-grid" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="0.75" fill="#38bdf8" fill-opacity="0.55" />
    </pattern>
    <radialGradient id="mumbaiGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00c2cb" stop-opacity="1" />
      <stop offset="50%" stop-color="#00c2cb" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#00c2cb" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- World Landmass Paths -->
  <g id="continents">
    ${styledPaths}
  </g>

  <!-- Dot Matrix Overlay Mask on Landmasses -->
  <g id="land-dots" opacity="0.6" pointer-events="none">
    ${paths.map(p => p.replace(/<path/, '<path fill="url(#dot-grid)" stroke="none"')).join('\n')}
  </g>

  <!-- Global Connection Arcs -->
  <g id="connections">
    ${arcs}
  </g>

  <!-- Mumbai Central Hub Beacon -->
  <g id="mumbai-hub">
    <circle cx="${mumbaiX}" cy="${mumbaiY}" r="12" fill="url(#mumbaiGlow)" />
    <circle cx="${mumbaiX}" cy="${mumbaiY}" r="6" stroke="#00c2cb" stroke-width="1.2" stroke-opacity="0.8" fill="none" />
    <circle cx="${mumbaiX}" cy="${mumbaiY}" r="3" fill="#ffffff" />
  </g>
</svg>`;

fs.writeFileSync('public/images/world-map-pro.svg', newSvg);
console.log('Saved public/images/world-map-pro.svg, size:', newSvg.length);
