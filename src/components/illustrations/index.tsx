// Custom SVG Illustrations for My Circles of Care - Disability Provider Theme
// These illustrations represent inclusive, warm imagery for disability services

import React from 'react';

interface IllustrationProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

// Hero illustration - People in a circle representing community and care
export function HeroCommunityIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="200" cy="150" r="120" fill="#FFF7ED" />

      {/* Person 1 - Standing */}
      <g transform="translate(120, 80)">
        <circle cx="20" cy="15" r="15" fill="#375278" />
        <path d="M10 35 L10 80 L15 120 M30 35 L30 80 L25 120" stroke="#375278" strokeWidth="6" strokeLinecap="round" />
        <path d="M10 45 L-5 70 M30 45 L45 70" stroke="#375278" strokeWidth="6" strokeLinecap="round" />
        <rect x="5" y="30" width="30" height="40" rx="5" fill="#FF5D10" />
      </g>

      {/* Person 2 - Wheelchair user */}
      <g transform="translate(180, 100)">
        <circle cx="20" cy="10" r="14" fill="#375278" />
        <rect x="5" y="25" width="30" height="35" rx="5" fill="#FF5D10" />
        {/* Wheelchair */}
        <circle cx="10" cy="85" r="18" stroke="#375278" strokeWidth="4" fill="none" />
        <circle cx="45" cy="85" r="12" stroke="#375278" strokeWidth="4" fill="none" />
        <path d="M5 60 L5 75 L40 75 L50 60" stroke="#375278" strokeWidth="4" fill="none" />
        <path d="M20 45 L20 75" stroke="#375278" strokeWidth="4" />
      </g>

      {/* Person 3 - With support worker */}
      <g transform="translate(260, 90)">
        <circle cx="15" cy="12" r="12" fill="#375278" />
        <rect x="3" y="26" width="24" height="32" rx="4" fill="#931919" />
        <path d="M8 58 L8 95 M22 58 L22 95" stroke="#375278" strokeWidth="5" strokeLinecap="round" />
        {/* Support hand reaching */}
        <path d="M-15 50 L3 45" stroke="#FF5D10" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Connecting circles - representing community */}
      <circle cx="200" cy="200" r="8" fill="#FF5D10" opacity="0.6" />
      <circle cx="140" cy="180" r="6" fill="#375278" opacity="0.4" />
      <circle cx="260" cy="180" r="6" fill="#375278" opacity="0.4" />

      {/* Hearts floating - representing care */}
      <path d="M150 60 C150 55 155 50 160 55 C165 50 170 55 170 60 C170 70 160 78 160 78 C160 78 150 70 150 60Z" fill="#FF5D10" opacity="0.7" />
      <path d="M250 50 C250 46 254 42 258 46 C262 42 266 46 266 50 C266 58 258 64 258 64 C258 64 250 58 250 50Z" fill="#FF5D10" opacity="0.5" />

      {/* Decorative dots */}
      <circle cx="100" cy="120" r="4" fill="#FF5D10" opacity="0.3" />
      <circle cx="300" cy="130" r="4" fill="#FF5D10" opacity="0.3" />
      <circle cx="320" cy="200" r="3" fill="#375278" opacity="0.3" />
      <circle cx="80" cy="190" r="3" fill="#375278" opacity="0.3" />
    </svg>
  );
}

// Support Coordination illustration - connecting people
export function SupportCoordinationIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central hub */}
      <circle cx="100" cy="100" r="25" fill="#FF5D10" />
      <circle cx="100" cy="100" r="18" fill="white" />
      <circle cx="100" cy="100" r="8" fill="#FF5D10" />

      {/* Connected people circles */}
      <circle cx="100" cy="35" r="20" fill="#375278" />
      <circle cx="100" cy="35" r="12" fill="#FFF7ED" />

      <circle cx="160" cy="75" r="18" fill="#375278" />
      <circle cx="160" cy="75" r="10" fill="#FFF7ED" />

      <circle cx="160" cy="140" r="18" fill="#375278" />
      <circle cx="160" cy="140" r="10" fill="#FFF7ED" />

      <circle cx="100" cy="170" r="18" fill="#375278" />
      <circle cx="100" cy="170" r="10" fill="#FFF7ED" />

      <circle cx="40" cy="140" r="18" fill="#375278" />
      <circle cx="40" cy="140" r="10" fill="#FFF7ED" />

      <circle cx="40" cy="75" r="18" fill="#375278" />
      <circle cx="40" cy="75" r="10" fill="#FFF7ED" />

      {/* Connection lines */}
      <path d="M100 55 L100 75" stroke="#FF5D10" strokeWidth="3" strokeDasharray="4 2" />
      <path d="M120 85 L142 78" stroke="#FF5D10" strokeWidth="3" strokeDasharray="4 2" />
      <path d="M120 115 L142 130" stroke="#FF5D10" strokeWidth="3" strokeDasharray="4 2" />
      <path d="M100 125 L100 152" stroke="#FF5D10" strokeWidth="3" strokeDasharray="4 2" />
      <path d="M80 115 L58 130" stroke="#FF5D10" strokeWidth="3" strokeDasharray="4 2" />
      <path d="M80 85 L58 78" stroke="#FF5D10" strokeWidth="3" strokeDasharray="4 2" />
    </svg>
  );
}

// Personal Care illustration - heart and hands
export function PersonalCareIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background soft circle */}
      <circle cx="100" cy="100" r="80" fill="#FFF7ED" />

      {/* Hands cradling */}
      <path d="M50 130 Q30 110 40 80 Q50 60 70 70 L90 90" stroke="#375278" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M150 130 Q170 110 160 80 Q150 60 130 70 L110 90" stroke="#375278" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* Heart in center */}
      <path d="M100 70 C80 50 50 60 50 90 C50 120 100 150 100 150 C100 150 150 120 150 90 C150 60 120 50 100 70Z" fill="#FF5D10" />

      {/* Small person silhouette in heart */}
      <circle cx="100" cy="95" r="12" fill="white" />
      <ellipse cx="100" cy="125" rx="10" ry="15" fill="white" />

      {/* Care sparkles */}
      <circle cx="65" cy="55" r="4" fill="#FF5D10" opacity="0.6" />
      <circle cx="135" cy="55" r="4" fill="#FF5D10" opacity="0.6" />
      <circle cx="100" cy="40" r="3" fill="#375278" opacity="0.4" />
    </svg>
  );
}

// Plan Management illustration - clipboard with checkmarks
export function PlanManagementIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clipboard */}
      <rect x="45" y="35" width="110" height="140" rx="8" fill="#375278" />
      <rect x="50" y="45" width="100" height="125" rx="4" fill="white" />

      {/* Clipboard clip */}
      <rect x="70" y="28" width="60" height="20" rx="4" fill="#FF5D10" />
      <rect x="85" y="23" width="30" height="10" rx="3" fill="#375278" />

      {/* Checklist items */}
      <rect x="60" y="60" width="15" height="15" rx="3" stroke="#FF5D10" strokeWidth="2" fill="none" />
      <path d="M63 68 L68 73 L78 60" stroke="#FF5D10" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="85" y="63" width="55" height="8" rx="2" fill="#E5E7EB" />

      <rect x="60" y="90" width="15" height="15" rx="3" stroke="#FF5D10" strokeWidth="2" fill="none" />
      <path d="M63 98 L68 103 L78 90" stroke="#FF5D10" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="85" y="93" width="55" height="8" rx="2" fill="#E5E7EB" />

      <rect x="60" y="120" width="15" height="15" rx="3" stroke="#375278" strokeWidth="2" fill="none" />
      <rect x="85" y="123" width="55" height="8" rx="2" fill="#E5E7EB" />

      <rect x="60" y="145" width="15" height="15" rx="3" stroke="#375278" strokeWidth="2" fill="none" />
      <rect x="85" y="148" width="40" height="8" rx="2" fill="#E5E7EB" />

      {/* Progress indicator */}
      <circle cx="165" cy="55" r="20" fill="#FFF7ED" />
      <circle cx="165" cy="55" r="15" stroke="#E5E7EB" strokeWidth="4" fill="none" />
      <path d="M165 40 A15 15 0 1 1 152 62" stroke="#FF5D10" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// Independent Living illustration - house with person
export function IndependentLivingIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* House */}
      <path d="M100 30 L170 80 L170 170 L30 170 L30 80 Z" fill="#FFF7ED" />
      <path d="M100 30 L170 80 L30 80 Z" fill="#FF5D10" />

      {/* Door */}
      <rect x="80" y="110" width="40" height="60" rx="4" fill="#375278" />
      <circle cx="110" cy="145" r="4" fill="#FF5D10" />

      {/* Window */}
      <rect x="45" y="95" width="25" height="30" rx="2" fill="#375278" />
      <line x1="57.5" y1="95" x2="57.5" y2="125" stroke="white" strokeWidth="2" />
      <line x1="45" y1="110" x2="70" y2="110" stroke="white" strokeWidth="2" />

      <rect x="130" y="95" width="25" height="30" rx="2" fill="#375278" />
      <line x1="142.5" y1="95" x2="142.5" y2="125" stroke="white" strokeWidth="2" />
      <line x1="130" y1="110" x2="155" y2="110" stroke="white" strokeWidth="2" />

      {/* Person with raised arms (celebration) */}
      <g transform="translate(100, 60)">
        <circle cx="0" cy="-5" r="8" fill="#375278" />
        <path d="M-12 25 L-20 5 M12 25 L20 5" stroke="#FF5D10" strokeWidth="4" strokeLinecap="round" />
        <rect x="-8" y="5" width="16" height="22" rx="3" fill="#FF5D10" />
      </g>

      {/* Stars representing achievement */}
      <path d="M40 50 L42 45 L44 50 L49 50 L45 54 L47 59 L42 56 L37 59 L39 54 L35 50 Z" fill="#FF5D10" />
      <path d="M160 50 L162 46 L164 50 L168 50 L165 53 L166 57 L162 55 L158 57 L159 53 L155 50 Z" fill="#FF5D10" />
    </svg>
  );
}

// Community Participation illustration - people together
export function CommunityParticipationIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="85" fill="#FFF7ED" />

      {/* Group of diverse people */}
      {/* Person 1 - left */}
      <circle cx="55" cy="85" r="15" fill="#375278" />
      <rect x="42" y="105" width="26" height="35" rx="5" fill="#FF5D10" />
      <path d="M48 140 L48 170 M62 140 L62 170" stroke="#375278" strokeWidth="5" strokeLinecap="round" />

      {/* Person 2 - center (wheelchair) */}
      <circle cx="100" cy="80" r="16" fill="#375278" />
      <rect x="85" y="100" width="30" height="30" rx="5" fill="#931919" />
      <circle cx="85" cy="155" r="18" stroke="#375278" strokeWidth="4" fill="none" />
      <circle cx="120" cy="155" r="12" stroke="#375278" strokeWidth="4" fill="none" />
      <path d="M85 130 L85 145 L115 145" stroke="#375278" strokeWidth="4" />

      {/* Person 3 - right */}
      <circle cx="145" cy="85" r="15" fill="#375278" />
      <rect x="132" y="105" width="26" height="35" rx="5" fill="#FF5D10" />
      <path d="M138 140 L138 170 M152 140 L152 170" stroke="#375278" strokeWidth="5" strokeLinecap="round" />

      {/* Connection arcs */}
      <path d="M70 95 Q100 70 130 95" stroke="#FF5D10" strokeWidth="3" strokeDasharray="5 3" fill="none" />

      {/* Hearts/connection symbols */}
      <circle cx="100" cy="55" r="8" fill="#FF5D10" />
      <circle cx="40" cy="120" r="5" fill="#FF5D10" opacity="0.5" />
      <circle cx="160" cy="120" r="5" fill="#FF5D10" opacity="0.5" />
    </svg>
  );
}

// Household Tasks illustration - cleaning/home help
export function HouseholdTasksIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="30" y="50" width="140" height="120" rx="8" fill="#FFF7ED" />

      {/* Sparkle/clean symbols */}
      <g fill="#FF5D10">
        <path d="M50 70 L52 65 L54 70 L59 70 L55 74 L57 79 L52 76 L47 79 L49 74 L45 70 Z" />
        <path d="M150 80 L152 76 L154 80 L158 80 L155 83 L156 87 L152 85 L148 87 L149 83 L145 80 Z" />
        <path d="M130 60 L131 57 L132 60 L135 60 L133 62 L134 65 L131 63 L128 65 L129 62 L126 60 Z" />
      </g>

      {/* Broom/mop */}
      <rect x="65" y="85" width="6" height="70" rx="2" fill="#375278" />
      <path d="M55 150 L75 150 L80 170 L50 170 Z" fill="#FF5D10" />
      <line x1="55" y1="155" x2="55" y2="168" stroke="#375278" strokeWidth="2" />
      <line x1="60" y1="155" x2="60" y2="168" stroke="#375278" strokeWidth="2" />
      <line x1="68" y1="150" x2="68" y2="168" stroke="#375278" strokeWidth="2" />
      <line x1="75" y1="155" x2="75" y2="168" stroke="#375278" strokeWidth="2" />

      {/* Person helping */}
      <g transform="translate(115, 90)">
        <circle cx="15" cy="5" r="14" fill="#375278" />
        <rect x="3" y="22" width="24" height="35" rx="4" fill="#FF5D10" />
        <path d="M8 57 L8 85 M22 57 L22 85" stroke="#375278" strokeWidth="5" strokeLinecap="round" />
        {/* Arm reaching */}
        <path d="M3 35 L-20 55" stroke="#375278" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Laundry basket */}
      <ellipse cx="165" cy="155" rx="20" ry="10" fill="#375278" />
      <path d="M145 155 L148 130 L182 130 L185 155" fill="#375278" />
      <ellipse cx="165" cy="130" rx="17" ry="8" fill="#FFF7ED" />
      {/* Clothes peek */}
      <path d="M155 125 Q165 115 175 125" stroke="#FF5D10" strokeWidth="3" fill="none" />
    </svg>
  );
}

// Diff-ability celebration illustration
export function DiffabilityIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Celebration burst */}
      <circle cx="150" cy="100" r="70" fill="#FFF7ED" />

      {/* Diverse group celebrating */}
      {/* Person 1 - arms up */}
      <g transform="translate(80, 60)">
        <circle cx="15" cy="10" r="12" fill="#375278" />
        <rect x="5" y="25" width="20" height="30" rx="4" fill="#FF5D10" />
        <path d="M5 35 L-10 15 M25 35 L40 15" stroke="#375278" strokeWidth="4" strokeLinecap="round" />
        <path d="M10 55 L10 80 M20 55 L20 80" stroke="#375278" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Person 2 - wheelchair celebrating */}
      <g transform="translate(130, 70)">
        <circle cx="20" cy="5" r="13" fill="#375278" />
        <rect x="8" y="20" width="24" height="28" rx="4" fill="#931919" />
        <path d="M8 30 L-8 15 M32 30 L48 15" stroke="#375278" strokeWidth="4" strokeLinecap="round" />
        <circle cx="10" cy="70" r="15" stroke="#375278" strokeWidth="3" fill="none" />
        <circle cx="38" cy="70" r="10" stroke="#375278" strokeWidth="3" fill="none" />
        <path d="M8 48 L8 60 L35 60" stroke="#375278" strokeWidth="3" />
      </g>

      {/* Person 3 - jumping */}
      <g transform="translate(200, 55)">
        <circle cx="15" cy="12" r="12" fill="#375278" />
        <rect x="5" y="27" width="20" height="30" rx="4" fill="#FF5D10" />
        <path d="M5 37 L-8 55 M25 37 L38 55" stroke="#375278" strokeWidth="4" strokeLinecap="round" />
        <path d="M8 57 L5 85 M22 57 L25 85" stroke="#375278" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Confetti/celebration elements */}
      <rect x="60" y="30" width="8" height="8" rx="1" fill="#FF5D10" transform="rotate(15 64 34)" />
      <rect x="240" y="40" width="8" height="8" rx="1" fill="#375278" transform="rotate(-20 244 44)" />
      <circle cx="100" cy="25" r="5" fill="#FF5D10" />
      <circle cx="200" cy="30" r="4" fill="#375278" />
      <circle cx="260" y="80" r="4" fill="#FF5D10" opacity="0.7" />

      {/* Stars */}
      <path d="M50 80 L53 72 L56 80 L64 80 L58 86 L61 94 L53 89 L45 94 L48 86 L42 80 Z" fill="#FF5D10" />
      <path d="M250 100 L252 94 L254 100 L260 100 L256 104 L258 110 L252 107 L246 110 L248 104 L242 100 Z" fill="#FF5D10" />

      {/* Ribbons */}
      <path d="M70 50 Q80 70 70 90" stroke="#FF5D10" strokeWidth="3" fill="none" />
      <path d="M230 55 Q220 75 230 95" stroke="#375278" strokeWidth="3" fill="none" />
    </svg>
  );
}

// Family Support illustration
export function FamilySupportIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* House outline */}
      <path d="M125 20 L220 80 L220 180 L30 180 L30 80 Z" fill="#FFF7ED" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M125 20 L220 80 L30 80 Z" fill="#FF5D10" opacity="0.2" />

      {/* Family group */}
      {/* Adult 1 */}
      <g transform="translate(55, 85)">
        <circle cx="18" cy="12" r="14" fill="#375278" />
        <rect x="5" y="30" width="26" height="40" rx="5" fill="#FF5D10" />
        <path d="M12 70 L12 95 M24 70 L24 95" stroke="#375278" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Child */}
      <g transform="translate(105, 105)">
        <circle cx="12" cy="8" r="10" fill="#375278" />
        <rect x="3" y="20" width="18" height="28" rx="4" fill="#931919" />
        <path d="M8 48 L8 70 M16 48 L16 70" stroke="#375278" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Adult 2 */}
      <g transform="translate(145, 85)">
        <circle cx="18" cy="12" r="14" fill="#375278" />
        <rect x="5" y="30" width="26" height="40" rx="5" fill="#FF5D10" />
        <path d="M12 70 L12 95 M24 70 L24 95" stroke="#375278" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Connecting heart above */}
      <path d="M125 60 C115 48 95 55 95 72 C95 90 125 105 125 105 C125 105 155 90 155 72 C155 55 135 48 125 60Z" fill="#FF5D10" opacity="0.8" />

      {/* Care hands below */}
      <path d="M80 175 Q60 160 70 145" stroke="#375278" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M170 175 Q190 160 180 145" stroke="#375278" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// NDIS Journey illustration
export function NDISJourneyIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Path line */}
      <path d="M30 100 Q80 100 100 70 Q120 40 150 70 Q180 100 200 70 Q220 40 270 70" stroke="#E5E7EB" strokeWidth="4" fill="none" />
      <path d="M30 100 Q80 100 100 70 Q120 40 150 70" stroke="#FF5D10" strokeWidth="4" fill="none" />

      {/* Step 1 - Start */}
      <circle cx="30" cy="100" r="18" fill="#FF5D10" />
      <text x="30" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
      <text x="30" y="130" textAnchor="middle" fill="#375278" fontSize="10">Contact</text>

      {/* Step 2 - Consultation */}
      <circle cx="100" cy="70" r="18" fill="#FF5D10" />
      <text x="100" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
      <text x="100" y="100" textAnchor="middle" fill="#375278" fontSize="10">Consult</text>

      {/* Step 3 - Plan */}
      <circle cx="150" cy="70" r="18" fill="#FF5D10" opacity="0.6" />
      <text x="150" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
      <text x="150" y="100" textAnchor="middle" fill="#375278" fontSize="10">Plan</text>

      {/* Step 4 - Support */}
      <circle cx="200" cy="70" r="18" fill="#375278" opacity="0.4" />
      <text x="200" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
      <text x="200" y="100" textAnchor="middle" fill="#375278" fontSize="10">Support</text>

      {/* Step 5 - Thrive */}
      <circle cx="270" cy="70" r="22" fill="#375278" opacity="0.3" />
      <path d="M260 70 L268 78 L282 60" stroke="#FF5D10" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="270" y="105" textAnchor="middle" fill="#375278" fontSize="10">Thrive!</text>

      {/* Person moving along path */}
      <g transform="translate(140, 35)">
        <circle cx="8" cy="5" r="8" fill="#375278" />
        <rect x="2" y="15" width="12" height="18" rx="3" fill="#FF5D10" />
      </g>
    </svg>
  );
}

// Location/Map illustration
export function LocationIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Map background */}
      <rect x="20" y="30" width="160" height="140" rx="8" fill="#FFF7ED" />

      {/* Map elements - roads */}
      <path d="M20 100 L180 100" stroke="#E5E7EB" strokeWidth="8" />
      <path d="M100 30 L100 170" stroke="#E5E7EB" strokeWidth="8" />
      <path d="M50 60 Q100 90 150 60" stroke="#E5E7EB" strokeWidth="4" />
      <path d="M50 140 Q100 110 150 140" stroke="#E5E7EB" strokeWidth="4" />

      {/* Location pin */}
      <g transform="translate(100, 55)">
        <path d="M0 60 L0 60 C-25 35 -25 5 0 -15 C25 5 25 35 0 60Z" fill="#FF5D10" />
        <circle cx="0" cy="5" r="12" fill="white" />
        <circle cx="0" cy="5" r="6" fill="#FF5D10" />
      </g>

      {/* Small markers for service area */}
      <circle cx="60" cy="80" r="8" fill="#375278" opacity="0.5" />
      <circle cx="140" cy="80" r="8" fill="#375278" opacity="0.5" />
      <circle cx="70" cy="130" r="6" fill="#375278" opacity="0.4" />
      <circle cx="130" cy="130" r="6" fill="#375278" opacity="0.4" />

      {/* Radius circle */}
      <circle cx="100" cy="90" r="50" stroke="#FF5D10" strokeWidth="2" strokeDasharray="8 4" fill="none" opacity="0.5" />
    </svg>
  );
}

// Decorative wave for sections
export function WaveDecoration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 60 Q360 120 720 60 Q1080 0 1440 60 L1440 120 L0 120 Z" fill="currentColor" />
    </svg>
  );
}

// Decorative circles background
export function CirclesDecoration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#FF5D10" opacity="0.1" />
      <circle cx="350" cy="100" r="60" fill="#375278" opacity="0.08" />
      <circle cx="100" cy="300" r="80" fill="#FF5D10" opacity="0.06" />
      <circle cx="300" cy="350" r="50" fill="#375278" opacity="0.1" />
      <circle cx="200" cy="150" r="30" fill="#FF5D10" opacity="0.08" />
      <circle cx="380" cy="280" r="35" fill="#FF5D10" opacity="0.07" />
      <circle cx="20" cy="200" r="25" fill="#375278" opacity="0.09" />
    </svg>
  );
}

export default {
  HeroCommunityIllustration,
  SupportCoordinationIllustration,
  PersonalCareIllustration,
  PlanManagementIllustration,
  IndependentLivingIllustration,
  CommunityParticipationIllustration,
  HouseholdTasksIllustration,
  DiffabilityIllustration,
  FamilySupportIllustration,
  NDISJourneyIllustration,
  LocationIllustration,
  WaveDecoration,
  CirclesDecoration,
};
