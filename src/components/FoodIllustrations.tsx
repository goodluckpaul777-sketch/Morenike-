import React from 'react';

interface FoodIllustrationProps {
  id: string;
  category: string;
  className?: string;
}

export const FoodIllustration: React.FC<FoodIllustrationProps> = ({ id, category, className = 'w-full h-full' }) => {
  // Return tailored high-fidelity SVG illustration for each commodity
  switch (id) {
    // 1. Fresh Peppers & Scotch Bonnet Basket
    case 'prod-1':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pep-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="basket-weave" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="tatashe-red" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="40%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="rodo-orange" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <linearGradient id="rodo-yellow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="60%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="18" fill="url(#pep-shadow)" />
          {/* Wicker Basket Body */}
          <path d="M60 130 C65 175 95 185 160 185 C225 185 255 175 260 130 Z" fill="url(#basket-weave)" />
          <ellipse cx="160" cy="130" rx="100" ry="18" fill="#92400e" stroke="#78350f" strokeWidth="3" />
          {/* Basket Weave Lines */}
          <path d="M80 140 Q160 160 240 140 M90 155 Q160 175 230 155 M110 170 Q160 185 210 170" stroke="#fef3c7" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 3" />
          
          {/* Large Red Bell Pepper (Tatashe) Left */}
          <g transform="translate(75, 70)">
            <path d="M25 10 C10 10 0 25 5 50 C10 75 35 78 45 78 C60 78 75 65 72 45 C70 20 55 10 38 10 Z" fill="url(#tatashe-red)" />
            <path d="M28 15 C18 18 12 30 15 48" stroke="#fca5a5" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            {/* Green Stem */}
            <path d="M36 10 C38 -2 46 -6 50 -8 C47 0 45 6 42 10 Z" fill="#15803d" />
          </g>

          {/* Large Red Bell Pepper (Tatashe) Right */}
          <g transform="translate(170, 75)">
            <path d="M35 12 C18 12 5 28 8 52 C12 75 40 76 52 76 C68 76 80 62 76 40 C72 16 52 12 35 12 Z" fill="url(#tatashe-red)" />
            <path d="M40 18 C30 22 22 34 24 50" stroke="#fca5a5" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            <path d="M42 12 C44 2 52 -2 56 -5 C53 3 50 8 47 12 Z" fill="#15803d" />
          </g>

          {/* Scotch Bonnet Peppers (Ata Rodo) Clustered in center */}
          {/* Orange Rodo 1 */}
          <g transform="translate(130, 85)">
            <path d="M18 8 C8 8 2 18 4 32 C6 44 18 50 26 50 C36 50 42 40 40 28 C38 14 28 8 18 8 Z" fill="url(#rodo-orange)" />
            <path d="M12 18 C8 24 8 32 10 38" stroke="#ffedd5" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            <path d="M20 8 C20 0 24 -4 28 -6 C26 0 24 4 23 8 Z" fill="#166534" />
          </g>

          {/* Yellow Rodo 2 */}
          <g transform="translate(110, 105)">
            <path d="M16 6 C8 6 2 14 4 26 C6 38 16 42 22 42 C30 42 36 34 34 24 C32 12 24 6 16 6 Z" fill="url(#rodo-yellow)" />
            <path d="M10 14 C7 20 8 26 10 30" stroke="#fef9c3" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <path d="M17 6 C17 -1 21 -4 24 -5 C22 0 20 3 19 6 Z" fill="#15803d" />
          </g>

          {/* Red Rodo 3 */}
          <g transform="translate(165, 100)">
            <path d="M16 6 C8 6 3 14 4 26 C6 38 16 42 24 42 C32 42 38 34 36 24 C34 12 24 6 16 6 Z" fill="url(#tatashe-red)" />
            <path d="M10 14 C7 20 8 26 10 30" stroke="#fee2e2" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M18 6 C18 0 22 -3 25 -4 C23 1 21 4 20 6 Z" fill="#16a34a" />
          </g>

          {/* Ripe Plum Tomatoes spilling */}
          <circle cx="100" cy="125" r="16" fill="#dc2626" />
          <circle cx="95" cy="120" r="5" fill="#fca5a5" opacity="0.6" />
          <path d="M100 110 L102 113 L105 111 L103 114 L106 115 L102 116 Z" fill="#16a34a" />

          <circle cx="215" cy="122" r="17" fill="#dc2626" />
          <circle cx="210" cy="117" r="5" fill="#fca5a5" opacity="0.6" />
          <path d="M215 106 L217 109 L220 107 L218 110 L221 111 L217 112 Z" fill="#16a34a" />
        </svg>
      );

    // 2. Benue & Abakaliki Giant Yam Tubers
    case 'prod-2':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="yam-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="yam-bark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5c3822" />
              <stop offset="50%" stopColor="#3d2112" />
              <stop offset="100%" stopColor="#221109" />
            </linearGradient>
            <linearGradient id="yam-flesh" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="170" rx="130" ry="16" fill="url(#yam-shadow)" />

          {/* Large Back Yam Tuber */}
          <g transform="rotate(-12 160 120)">
            <rect x="50" y="90" width="220" height="42" rx="21" fill="url(#yam-bark)" stroke="#1c1917" strokeWidth="2" />
            {/* Bark Ring Texture */}
            <path d="M85 92 Q87 111 85 130 M120 92 Q123 111 120 130 M165 92 Q168 111 165 130 M210 92 Q213 111 210 130" stroke="#78350f" strokeWidth="2.5" strokeOpacity="0.5" />
            <path d="M70 100 Q150 96 230 100" stroke="#854d0e" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.4" />
          </g>

          {/* Front Heavy Yam Tuber with Cut End */}
          <g transform="rotate(6 150 140)">
            <path d="M60 115 C50 115 45 125 45 140 C45 155 50 165 60 165 L220 165 C240 165 260 155 265 140 C260 125 240 115 220 115 Z" fill="url(#yam-bark)" stroke="#1c1917" strokeWidth="2" />
            {/* Bark rings */}
            <path d="M90 117 Q93 140 90 163 M135 117 Q138 140 135 163 M180 117 Q183 140 180 163 M220 117 Q222 140 220 163" stroke="#78350f" strokeWidth="3" strokeOpacity="0.6" />
            {/* Fibrous roots */}
            <path d="M100 165 Q95 178 92 185 M160 165 Q163 175 165 182 M210 165 Q215 174 218 180" stroke="#a16207" strokeWidth="1.5" strokeLinecap="round" />
            {/* Cut End revealing pristine white flesh */}
            <ellipse cx="60" cy="140" rx="16" ry="24" fill="url(#yam-flesh)" stroke="#78350f" strokeWidth="2.5" />
            <ellipse cx="60" cy="140" rx="10" ry="17" fill="#ffffff" opacity="0.7" />
            <circle cx="60" cy="140" r="4" fill="#fef08a" opacity="0.5" />
          </g>

          {/* Cut Yam Slice beside it */}
          <g transform="translate(230, 100)">
            <ellipse cx="28" cy="40" rx="18" ry="26" fill="url(#yam-bark)" stroke="#1c1917" strokeWidth="1.5" />
            <ellipse cx="25" cy="40" rx="16" ry="24" fill="url(#yam-flesh)" stroke="#78350f" strokeWidth="2" />
            <ellipse cx="25" cy="40" rx="10" ry="16" fill="#ffffff" opacity="0.6" />
          </g>
        </svg>
      );

    // 3. Pure Virgin Red Palm Oil
    case 'prod-3':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="oil-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="red-palm-oil" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="40%" stopColor="#dc2626" />
              <stop offset="85%" stopColor="#991b1b" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
            <linearGradient id="yellow-jerrycan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="30%" stopColor="#facc15" />
              <stop offset="80%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="110" ry="15" fill="url(#oil-shadow)" />

          {/* Yellow 25L Jerrycan in Background */}
          <g transform="translate(60, 45)">
            <rect x="15" y="30" width="85" height="100" rx="10" fill="url(#yellow-jerrycan)" stroke="#a16207" strokeWidth="2" />
            {/* Jerrycan handle */}
            <path d="M25 30 L25 15 C25 10 35 10 40 10 L75 10 C80 10 90 10 90 15 L90 30" fill="none" stroke="#ca8a04" strokeWidth="8" strokeLinecap="round" />
            {/* Jerrycan Cap */}
            <rect x="30" y="2" width="22" height="10" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
            {/* Indent lines */}
            <rect x="30" y="45" width="55" height="30" rx="4" fill="none" stroke="#854d0e" strokeWidth="1.5" strokeOpacity="0.4" />
            <rect x="30" y="85" width="55" height="30" rx="4" fill="none" stroke="#854d0e" strokeWidth="1.5" strokeOpacity="0.4" />
            <text x="58" y="105" fontSize="11" fontWeight="bold" fill="#713f12" textAnchor="middle" fontFamily="sans-serif">25L PURE</text>
          </g>

          {/* Clear Glass 5L Gallon Bottle filled with Red Palm Oil */}
          <g transform="translate(155, 30)">
            {/* Bottle body */}
            <rect x="15" y="45" width="75" height="105" rx="8" fill="url(#red-palm-oil)" stroke="#450a0a" strokeWidth="2" />
            {/* Bottle Neck */}
            <path d="M38 45 L38 25 L68 25 L68 45 Z" fill="url(#red-palm-oil)" stroke="#450a0a" strokeWidth="1.5" />
            {/* Yellow Cap */}
            <rect x="35" y="15" width="36" height="12" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
            {/* Bottle Glass Highlights */}
            <path d="M22 55 L22 140" stroke="#fecaca" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
            <path d="M82 55 L82 140" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            <ellipse cx="53" cy="90" rx="22" ry="30" fill="#f87171" opacity="0.25" />
            {/* Grade 1 Badge */}
            <rect x="25" y="75" width="55" height="32" rx="4" fill="#ffffff" opacity="0.9" />
            <text x="52" y="88" fontSize="8" fontWeight="bold" fill="#991b1b" textAnchor="middle" fontFamily="sans-serif">ONDO SPECIAL</text>
            <text x="52" y="99" fontSize="9" fontWeight="black" fill="#15803d" textAnchor="middle" fontFamily="sans-serif">GRADE 1 OIL</text>
          </g>

          {/* Wooden Spoon dripping red palm oil */}
          <g transform="translate(235, 95) rotate(-20)">
            <ellipse cx="20" cy="20" rx="16" ry="12" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
            <ellipse cx="20" cy="20" rx="13" ry="9" fill="url(#red-palm-oil)" />
            <path d="M36 20 L80 18" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
            {/* Droplet */}
            <path d="M20 32 C17 37 15 42 15 45 C15 49 18 51 21 51 C24 51 27 49 27 45 C27 42 23 37 20 32 Z" fill="#dc2626" />
          </g>
        </svg>
      );

    // 4. Crispy White Garri (Garri Ijebu Super Grade)
    case 'prod-4':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="garri-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sack-burlap" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="50%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="garri-granules" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fef9c3" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#garri-shadow)" />

          {/* Burlap 50kg Sack Rolled Down */}
          <g transform="translate(65, 45)">
            <path d="M25 45 C25 25 35 15 65 15 L125 15 C155 15 165 25 165 45 L175 125 C175 135 160 140 145 140 L45 140 C30 140 15 135 15 125 Z" fill="url(#sack-burlap)" stroke="#b45309" strokeWidth="2" />
            {/* Sack rolled lip */}
            <path d="M15 45 C15 35 45 30 95 30 C145 30 175 35 175 45 C175 55 145 60 95 60 C45 60 15 55 15 45 Z" fill="#fde68a" stroke="#92400e" strokeWidth="2.5" />
            {/* Sack Weave Texture */}
            <path d="M30 75 Q95 70 160 75 M30 95 Q95 90 160 95 M35 115 Q95 110 155 115" stroke="#b45309" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <rect x="45" y="75" width="100" height="35" rx="3" fill="#ffffff" opacity="0.8" />
            <text x="95" y="90" fontSize="10" fontWeight="bold" fill="#15803d" textAnchor="middle" fontFamily="sans-serif">GARRI IJEBU</text>
            <text x="95" y="103" fontSize="9" fontWeight="bold" fill="#78350f" textAnchor="middle" fontFamily="sans-serif">50KG FINE SOUR</text>
            {/* Overflowing crisp white garri mound */}
            <path d="M25 42 Q95 8 165 42 Q95 55 25 42 Z" fill="url(#garri-granules)" />
            {/* Granule texture dots */}
            <circle cx="70" cy="35" r="1.5" fill="#fef08a" />
            <circle cx="85" cy="28" r="1.5" fill="#ffffff" />
            <circle cx="100" cy="25" r="2" fill="#ffffff" />
            <circle cx="115" cy="30" r="1.5" fill="#fef08a" />
            <circle cx="130" cy="35" r="2" fill="#ffffff" />
            <circle cx="95" cy="38" r="1.5" fill="#fef9c3" />
          </g>

          {/* Measuring Paint Bucket (Custard Bucket) beside it */}
          <g transform="translate(205, 100)">
            <path d="M15 20 L25 75 L75 75 L85 20 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="50" cy="20" rx="35" ry="10" fill="url(#garri-granules)" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Red handle */}
            <path d="M12 25 C12 0 88 0 88 25" fill="none" stroke="#ef4444" strokeWidth="2.5" />
            <rect x="32" y="38" width="36" height="22" rx="2" fill="#3b82f6" />
            <text x="50" y="52" fontSize="7" fontWeight="bold" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">4.5KG</text>
          </g>
        </svg>
      );

    // 5. Clean De-Stoned Long Grain Parboiled Rice
    case 'prod-5':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="rice-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="rice-sack" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#rice-shadow)" />

          {/* White Woven Poly Rice Sack */}
          <g transform="translate(85, 35)">
            <path d="M20 50 C20 30 35 20 75 20 C115 20 130 30 130 50 L140 140 C140 148 130 152 115 152 L35 152 C20 152 10 148 10 140 Z" fill="url(#rice-sack)" stroke="#64748b" strokeWidth="2" />
            {/* Rice Sack rolled lip */}
            <path d="M10 50 C10 40 40 32 75 32 C110 32 140 40 140 50 C140 60 110 68 75 68 C40 68 10 60 10 50 Z" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
            {/* Emblem */}
            <circle cx="75" cy="100" r="28" fill="#15803d" />
            <circle cx="75" cy="100" r="24" fill="#fef08a" />
            <text x="75" y="97" fontSize="8" fontWeight="bold" fill="#166534" textAnchor="middle" fontFamily="sans-serif">ROYAL MILL</text>
            <text x="75" y="108" fontSize="10" fontWeight="black" fill="#166534" textAnchor="middle" fontFamily="sans-serif">RICE 50KG</text>
            <text x="75" y="132" fontSize="8" fontWeight="bold" fill="#15803d" textAnchor="middle" fontFamily="sans-serif">100% DE-STONED</text>
            {/* Overflowing rice grains */}
            <path d="M20 48 Q75 18 130 48 Q75 60 20 48 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            {/* Grains */}
            <ellipse cx="55" cy="40" rx="4" ry="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(-15 55 40)" />
            <ellipse cx="75" cy="35" rx="4" ry="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(25 75 35)" />
            <ellipse cx="95" cy="38" rx="4" ry="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(-30 95 38)" />
            <ellipse cx="65" cy="48" rx="4" ry="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(40 65 48)" />
            <ellipse cx="85" cy="45" rx="4" ry="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(-10 85 45)" />
          </g>

          {/* Golden Rice Stalks on side */}
          <g transform="translate(230, 70)">
            <path d="M15 100 Q25 40 45 10" stroke="#ca8a04" strokeWidth="2.5" fill="none" />
            <ellipse cx="43" cy="12" rx="4" ry="7" fill="#facc15" stroke="#a16207" strokeWidth="1" transform="rotate(30 43 12)" />
            <ellipse cx="38" cy="22" rx="4" ry="7" fill="#facc15" stroke="#a16207" strokeWidth="1" transform="rotate(-30 38 22)" />
            <ellipse cx="33" cy="34" rx="4" ry="7" fill="#facc15" stroke="#a16207" strokeWidth="1" transform="rotate(35 33 34)" />
            <ellipse cx="28" cy="46" rx="4" ry="7" fill="#facc15" stroke="#a16207" strokeWidth="1" transform="rotate(-25 28 46)" />
          </g>
        </svg>
      );

    // 6. Derica & Basket Plum Sweet Tomatoes
    case 'prod-6':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tom-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="crate-wood" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <radialGradient id="tomato-shine" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="35%" stopColor="#ef4444" />
              <stop offset="80%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </radialGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#tom-shadow)" />

          {/* Wooden Agrohandlers Tomato Crate */}
          <g transform="translate(60, 85)">
            <rect x="10" y="20" width="180" height="70" rx="4" fill="url(#crate-wood)" stroke="#451a03" strokeWidth="2" />
            {/* Slats */}
            <line x1="10" y1="42" x2="190" y2="42" stroke="#451a03" strokeWidth="3" />
            <line x1="10" y1="65" x2="190" y2="65" stroke="#451a03" strokeWidth="3" />
            {/* Corner braces */}
            <rect x="8" y="18" width="14" height="74" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
            <rect x="178" y="18" width="14" height="74" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
            <circle cx="15" cy="28" r="2" fill="#1c1917" />
            <circle cx="15" cy="80" r="2" fill="#1c1917" />
            <circle cx="185" cy="28" r="2" fill="#1c1917" />
            <circle cx="185" cy="80" r="2" fill="#1c1917" />
          </g>

          {/* Heaping Tomatoes inside crate */}
          {/* Back row tomatoes */}
          <circle cx="100" cy="80" r="20" fill="url(#tomato-shine)" />
          <circle cx="135" cy="72" r="21" fill="url(#tomato-shine)" />
          <circle cx="170" cy="70" r="22" fill="url(#tomato-shine)" />
          <circle cx="205" cy="80" r="20" fill="url(#tomato-shine)" />

          {/* Middle row */}
          <circle cx="85" cy="95" r="21" fill="url(#tomato-shine)" />
          <circle cx="120" cy="90" r="23" fill="url(#tomato-shine)" />
          <circle cx="155" cy="88" r="24" fill="url(#tomato-shine)" />
          <circle cx="190" cy="92" r="22" fill="url(#tomato-shine)" />
          <circle cx="225" cy="98" r="19" fill="url(#tomato-shine)" />

          {/* Front row */}
          <circle cx="105" cy="108" r="22" fill="url(#tomato-shine)" />
          <circle cx="140" cy="106" r="23" fill="url(#tomato-shine)" />
          <circle cx="175" cy="107" r="22" fill="url(#tomato-shine)" />

          {/* Green Calyx / Leaves on top tomatoes */}
          <g transform="translate(135, 78)">
            <circle cx="0" cy="0" r="2.5" fill="#14532d" />
            <path d="M0 0 L-6 -5 M0 0 L5 -6 M0 0 L7 2 M0 0 L1 7 M0 0 L-6 4" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g transform="translate(170, 76)">
            <circle cx="0" cy="0" r="2.5" fill="#14532d" />
            <path d="M0 0 L-6 -4 M0 0 L4 -6 M0 0 L7 3 M0 0 L0 7 M0 0 L-5 5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g transform="translate(140, 96)">
            <circle cx="0" cy="0" r="2.5" fill="#14532d" />
            <path d="M0 0 L-5 -5 M0 0 L5 -5 M0 0 L6 3 M0 0 L0 6 M0 0 L-6 3" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    // 7. Oron Crayfish & Smoked Dried Prawns
    case 'prod-7':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="cray-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="crayfish-orange" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#cray-shadow)" />

          {/* Natural Shallow Basket Tray */}
          <ellipse cx="160" cy="140" rx="110" ry="32" fill="#78350f" stroke="#451a03" strokeWidth="2" />
          <ellipse cx="160" cy="138" rx="104" ry="28" fill="#b45309" />

          {/* Pile of whole dried Oron Crayfish */}
          {/* Individual detailed crayfish */}
          {/* Big center crayfish */}
          <g transform="translate(140, 95) rotate(-15)">
            {/* Curved body segments */}
            <ellipse cx="25" cy="20" rx="16" ry="11" fill="url(#crayfish-orange)" stroke="#7c2d12" strokeWidth="1.5" />
            <circle cx="14" cy="16" r="2" fill="#0f172a" />
            {/* Tail segments */}
            <path d="M38 20 C48 20 54 28 58 38 C54 44 46 44 42 36 Z" fill="url(#crayfish-orange)" stroke="#7c2d12" strokeWidth="1.2" />
            <path d="M58 38 L68 44 M58 38 L65 48 M58 38 L60 50" stroke="#c2410c" strokeWidth="1.5" />
            {/* Antennae */}
            <path d="M12 18 C-5 15 -15 25 -25 35 M12 14 C-5 6 -10 -2 -18 -8" stroke="#ea580c" strokeWidth="1.2" fill="none" />
            {/* Claws */}
            <path d="M18 24 Q8 32 4 40 M22 24 Q16 35 15 42" stroke="#9a3412" strokeWidth="2" fill="none" />
          </g>

          {/* Crayfish left */}
          <g transform="translate(90, 110) rotate(25)">
            <ellipse cx="22" cy="18" rx="14" ry="9" fill="url(#crayfish-orange)" stroke="#7c2d12" strokeWidth="1.2" />
            <circle cx="12" cy="15" r="1.5" fill="#0f172a" />
            <path d="M34 18 C42 18 48 24 50 32 C46 36 40 36 36 30 Z" fill="url(#crayfish-orange)" stroke="#7c2d12" strokeWidth="1" />
            <path d="M10 15 C-2 10 -8 5 -15 0" stroke="#ea580c" strokeWidth="1" fill="none" />
          </g>

          {/* Crayfish right */}
          <g transform="translate(200, 115) rotate(-40)">
            <ellipse cx="22" cy="18" rx="15" ry="10" fill="url(#crayfish-orange)" stroke="#7c2d12" strokeWidth="1.2" />
            <circle cx="12" cy="15" r="1.5" fill="#0f172a" />
            <path d="M34 18 C44 18 50 25 52 34 C48 38 42 38 38 32 Z" fill="url(#crayfish-orange)" stroke="#7c2d12" strokeWidth="1" />
            <path d="M10 15 C-2 12 -10 18 -18 25" stroke="#ea580c" strokeWidth="1" fill="none" />
          </g>

          {/* Sifted clean mound in basket */}
          <ellipse cx="160" cy="138" rx="75" ry="18" fill="#c2410c" opacity="0.6" />
          <text x="160" y="165" fontSize="9" fontWeight="bold" fill="#fef08a" textAnchor="middle" fontFamily="sans-serif">ORON SALTWATER · SAND-FREE</text>
        </svg>
      );

    // 8. Brown Honey Beans (Oloyin)
    case 'prod-8':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="beans-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="beans-burlap" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="70%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <radialGradient id="bean-grain" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#beans-shadow)" />

          {/* Sack of Honey Beans */}
          <g transform="translate(80, 45)">
            <path d="M20 40 C20 20 35 15 75 15 L95 15 C135 15 150 20 150 40 L155 125 C155 135 140 140 125 140 L45 140 C30 140 15 135 15 125 Z" fill="url(#beans-burlap)" stroke="#451a03" strokeWidth="2" />
            <path d="M15 40 C15 30 45 22 85 22 C125 22 155 30 155 40 C155 50 125 58 85 58 C45 58 15 50 15 40 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
            {/* Text badge */}
            <rect x="40" y="80" width="90" height="30" rx="3" fill="#ffffff" opacity="0.85" />
            <text x="85" y="94" fontSize="10" fontWeight="bold" fill="#78350f" textAnchor="middle" fontFamily="sans-serif">EWA OLOYIN</text>
            <text x="85" y="104" fontSize="8" fontWeight="bold" fill="#15803d" textAnchor="middle" fontFamily="sans-serif">WEEVIL-FREE 50KG</text>
            {/* Mound of glossy honey beans */}
            <path d="M25 38 Q85 10 145 38 Q85 52 25 38 Z" fill="#92400e" />
          </g>

          {/* Spilled individual honey beans with characteristic kidney shape and eye */}
          <g transform="translate(195, 120)">
            {/* Bean 1 */}
            <path d="M10 10 C18 6 26 12 24 20 C22 28 12 26 8 20 C6 16 7 12 10 10 Z" fill="url(#bean-grain)" stroke="#451a03" strokeWidth="1" />
            <ellipse cx="14" cy="18" rx="2" ry="1" fill="#ffffff" />
            {/* Bean 2 */}
            <path d="M30 18 C38 14 46 20 44 28 C42 36 32 34 28 28 C26 24 27 20 30 18 Z" fill="url(#bean-grain)" stroke="#451a03" strokeWidth="1" />
            <ellipse cx="34" cy="26" rx="2" ry="1" fill="#ffffff" />
            {/* Bean 3 */}
            <path d="M18 32 C26 28 34 34 32 42 C30 50 20 48 16 42 C14 38 15 34 18 32 Z" fill="url(#bean-grain)" stroke="#451a03" strokeWidth="1" />
            <ellipse cx="22" cy="40" rx="2" ry="1" fill="#ffffff" />
          </g>
        </svg>
      );

    // 9. Dry Cameroun Black Pepper & Ground Iru
    case 'prod-9':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="spice-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#spice-shadow)" />

          {/* Traditional Clay Pot with Fermented Locust Beans (Iru) */}
          <g transform="translate(70, 75)">
            <ellipse cx="50" cy="45" rx="45" ry="30" fill="#78350f" stroke="#451a03" strokeWidth="2.5" />
            <ellipse cx="50" cy="30" rx="40" ry="18" fill="#292524" stroke="#1c1917" strokeWidth="2" />
            {/* Fermented dark locust beans inside */}
            <circle cx="35" cy="28" r="4.5" fill="#1c1917" />
            <circle cx="45" cy="25" r="5" fill="#27272a" />
            <circle cx="58" cy="26" r="4.5" fill="#18181b" />
            <circle cx="40" cy="34" r="5" fill="#27272a" />
            <circle cx="54" cy="33" r="5.5" fill="#1c1917" />
            <circle cx="68" cy="30" r="4" fill="#27272a" />
            <text x="50" y="85" fontSize="10" fontWeight="bold" fill="#78350f" textAnchor="middle" fontFamily="sans-serif">RAW IRU (LOCUST BEANS)</text>
          </g>

          {/* Jar of Cameroun Black Pepper */}
          <g transform="translate(180, 50)">
            <rect x="15" y="30" width="60" height="85" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
            {/* Black pepper inside */}
            <rect x="18" y="45" width="54" height="68" rx="6" fill="#1c1917" />
            {/* Wooden lid */}
            <rect x="12" y="20" width="66" height="12" rx="3" fill="#92400e" stroke="#78350f" strokeWidth="1.5" />
            {/* Label */}
            <rect x="22" y="60" width="46" height="30" rx="2" fill="#ffffff" />
            <text x="45" y="73" fontSize="7" fontWeight="bold" fill="#991b1b" textAnchor="middle" fontFamily="sans-serif">CAMEROUN</text>
            <text x="45" y="83" fontSize="8" fontWeight="black" fill="#0f172a" textAnchor="middle" fontFamily="sans-serif">PEPPER</text>
          </g>
        </svg>
      );

    // 10. Fresh Oven-Smoked Catfish
    case 'prod-10':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="fish-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="smoked-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a16207" />
              <stop offset="40%" stopColor="#78350f" />
              <stop offset="85%" stopColor="#451a03" />
              <stop offset="100%" stopColor="#1c1917" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#fish-shadow)" />

          {/* Hardwood Skewered Curved Smoked Catfish */}
          <g transform="translate(85, 35)">
            {/* Bamboo skewering ring */}
            <circle cx="75" cy="75" r="62" fill="none" stroke="#d97706" strokeWidth="2.5" strokeDasharray="12 4" />
            {/* Curled Catfish Body */}
            <path d="M35 55 C20 85 35 125 75 135 C115 145 145 115 145 80 C145 45 120 25 80 25 C55 25 40 38 35 55 Z" fill="url(#smoked-gold)" stroke="#1c1917" strokeWidth="2.5" />
            {/* Grill / Oven rack scorch marks */}
            <line x1="45" y1="50" x2="65" y2="40" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
            <line x1="45" y1="75" x2="70" y2="65" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
            <line x1="55" y1="105" x2="80" y2="95" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
            <line x1="75" y1="125" x2="100" y2="115" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
            <line x1="110" y1="110" x2="130" y2="95" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
            {/* Fish head details */}
            <ellipse cx="40" cy="50" rx="14" ry="18" fill="#292524" />
            <circle cx="36" cy="45" r="2.5" fill="#ffffff" />
            <circle cx="36" cy="45" r="1.5" fill="#000000" />
            {/* Whiskers */}
            <path d="M30 45 Q15 40 5 45 M30 52 Q15 55 8 62" stroke="#78350f" strokeWidth="1.5" fill="none" />
            {/* Tail fin */}
            <path d="M78 25 L88 12 L72 15 Z" fill="#451a03" stroke="#1c1917" strokeWidth="1.5" />
          </g>

          <text x="160" y="172" fontSize="9" fontWeight="bold" fill="#78350f" textAnchor="middle" fontFamily="sans-serif">HARDWOOD SMOKED · ZERO DIESEL FUMES</text>
        </svg>
      );

    // 11. Plantains Bundle
    case 'prod-11':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="plan-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="plantain-green-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#65a30d" />
              <stop offset="45%" stopColor="#eab308" />
              <stop offset="85%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="120" ry="16" fill="url(#plan-shadow)" />

          {/* Heavy Plantain Bunch */}
          <g transform="translate(60, 40)">
            {/* Main farm stalk */}
            <path d="M100 15 L100 135" stroke="#3f6212" strokeWidth="12" strokeLinecap="round" />
            
            {/* Plantain Finger 1 */}
            <path d="M100 35 C65 45 40 75 45 110 C55 110 65 95 95 65 Z" fill="url(#plantain-green-gold)" stroke="#365314" strokeWidth="2" />
            {/* Plantain Finger 2 */}
            <path d="M100 50 C55 65 35 95 40 130 C50 130 65 110 95 78 Z" fill="url(#plantain-green-gold)" stroke="#365314" strokeWidth="2" />
            {/* Plantain Finger 3 */}
            <path d="M100 35 C135 45 160 75 155 110 C145 110 135 95 105 65 Z" fill="url(#plantain-green-gold)" stroke="#365314" strokeWidth="2" />
            {/* Plantain Finger 4 */}
            <path d="M100 50 C145 65 165 95 160 130 C150 130 135 110 105 78 Z" fill="url(#plantain-green-gold)" stroke="#365314" strokeWidth="2" />
            {/* Plantain Finger 5 Center */}
            <path d="M95 60 C80 90 85 125 100 145 C115 125 120 90 105 60 Z" fill="url(#plantain-green-gold)" stroke="#365314" strokeWidth="2" />
            {/* Ripening speckles */}
            <circle cx="55" cy="95" r="1.5" fill="#451a03" />
            <circle cx="65" cy="85" r="1.5" fill="#451a03" />
            <circle cx="145" cy="95" r="1.5" fill="#451a03" />
            <circle cx="135" cy="85" r="1.5" fill="#451a03" />
          </g>
        </svg>
      );

    // 12. Golden Groundnut Oil
    case 'prod-12':
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gno-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c1917" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="groundnut-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="85%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="180" rx="110" ry="15" fill="url(#gno-shadow)" />

          {/* 5L Clear Bottle of Golden Peanut Oil */}
          <g transform="translate(115, 30)">
            <rect x="20" y="45" width="70" height="105" rx="8" fill="url(#groundnut-gold)" stroke="#854d0e" strokeWidth="2" />
            <path d="M40 45 L40 25 L70 25 L70 45 Z" fill="url(#groundnut-gold)" stroke="#854d0e" strokeWidth="1.5" />
            {/* Blue Cap */}
            <rect x="36" y="15" width="38" height="12" rx="2" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5" />
            {/* Reflection sheens */}
            <path d="M26 55 L26 140" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
            {/* Peanut emblem */}
            <rect x="28" y="75" width="54" height="35" rx="3" fill="#ffffff" opacity="0.9" />
            <text x="55" y="88" fontSize="7" fontWeight="bold" fill="#15803d" textAnchor="middle" fontFamily="sans-serif">DOUBLE FILTERED</text>
            <text x="55" y="99" fontSize="8" fontWeight="black" fill="#ca8a04" textAnchor="middle" fontFamily="sans-serif">PEANUT OIL 5L</text>
          </g>

          {/* Roasted Peanuts in pod beside it */}
          <g transform="translate(65, 125)">
            <path d="M10 20 C10 10 20 8 30 15 C38 10 48 10 50 20 C50 30 40 32 30 25 C20 30 10 30 10 20 Z" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="22" cy="18" r="1.5" fill="#78350f" opacity="0.4" />
            <circle cx="38" cy="18" r="1.5" fill="#78350f" opacity="0.4" />
          </g>
        </svg>
      );

    // Fallback default
    default:
      return (
        <svg className={className} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="170" rx="100" ry="14" fill="#1c1917" fillOpacity="0.3" />
          <rect x="90" y="50" width="140" height="100" rx="16" fill="#15803d" stroke="#14532d" strokeWidth="2" />
          <circle cx="160" cy="100" r="30" fill="#fef08a" />
          <text x="160" y="105" fontSize="16" fontWeight="bold" fill="#14532d" textAnchor="middle">MORENIKE</text>
        </svg>
      );
  }
};
