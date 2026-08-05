import React from "react";

export interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// 1. HERNIA ILLUSTRATION
export function HerniaIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      <circle cx="200" cy="150" r="110" fill="url(#hernia-bg)" opacity="0.15" />
      {/* Abdominal muscle layers */}
      <path d="M110 90C150 90 250 90 290 90" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
      <path d="M110 120C150 120 250 120 290 120" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
      {/* Muscle defect / hernia protrusion */}
      <path d="M110 150H160C160 170 170 195 200 195C230 195 240 170 240 150H290" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />
      <path d="M110 180C140 180 260 180 290 180" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
      {/* Mesh repair overlay indicator */}
      <rect x="155" y="140" width="90" height="40" rx="8" fill="url(#hernia-mesh)" stroke="#14b8a6" strokeWidth="3" strokeDasharray="4 4" />
      <circle cx="200" cy="160" r="14" fill="#0d9488" opacity="0.8" />
      <path d="M194 160L198 164L206 156" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <radialGradient id="hernia-bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 150) rotate(90) scale(110)">
          <stop stopColor="#0284c7" />
          <stop offset="1" stopColor="#0d9488" stopOpacity="0" />
        </radialGradient>
        <pattern id="hernia-mesh" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 10 M 0 0 L 10 10" stroke="#0d9488" strokeWidth="1" opacity="0.4" />
        </pattern>
      </defs>
    </svg>
  );
}

// 2. GALLBLADDER STONES ILLUSTRATION
export function GallbladderIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      <circle cx="200" cy="150" r="100" fill="#0284c7" opacity="0.08" />
      {/* Gallbladder Organ Outline */}
      <path d="M150 110C150 80 180 70 200 70C220 70 240 85 240 120C240 165 220 220 190 220C165 220 150 180 150 110Z" fill="url(#gall-grad)" stroke="#0284c7" strokeWidth="6" />
      {/* Duct */}
      <path d="M200 70C200 50 230 45 250 40" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
      {/* Gallstones */}
      <circle cx="185" cy="160" r="10" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
      <circle cx="205" cy="175" r="12" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
      <circle cx="180" cy="185" r="8" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
      {/* Laparoscopic laser beam targeting stone */}
      <line x1="260" y1="100" x2="205" y2="175" stroke="#14b8a6" strokeWidth="3" strokeDasharray="3 3" />
      <circle cx="205" cy="175" r="16" fill="#14b8a6" opacity="0.25" />
      <defs>
        <linearGradient id="gall-grad" x1="150" y1="70" x2="240" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0f2fe" />
          <stop offset="1" stopColor="#ccfbf1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. APPENDIX ILLUSTRATION
export function AppendixIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Cecum structure */}
      <path d="M140 70V170C140 200 170 220 200 220C230 220 250 200 250 170V70" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" fill="#e0f2fe" />
      {/* Appendix structure */}
      <path d="M200 220C210 240 230 255 240 240C245 230 235 210 230 205" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Inflammation glow */}
      <circle cx="235" cy="235" r="20" fill="#ef4444" opacity="0.2" />
      <circle cx="235" cy="235" r="8" fill="#dc2626" />
      {/* Keyhole indicator */}
      <circle cx="160" cy="130" r="18" fill="#0d9488" opacity="0.15" />
      <circle cx="160" cy="130" r="6" fill="#0d9488" />
    </svg>
  );
}

// 4. LIPOMA ILLUSTRATION
export function LipomaIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Epidermis & Dermis layer */}
      <path d="M80 110C140 110 150 70 200 70C250 70 260 110 320 110" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" />
      <path d="M80 200H320" stroke="#94a3b8" strokeWidth="4" strokeDasharray="6 6" />
      {/* Subcutaneous Lipoma Tumor */}
      <ellipse cx="200" cy="140" rx="55" ry="35" fill="url(#lipoma-grad)" stroke="#f59e0b" strokeWidth="4" />
      <path d="M170 135C185 125 215 125 230 135" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <defs>
        <linearGradient id="lipoma-grad" x1="145" y1="105" x2="255" y2="175" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef3c7" />
          <stop offset="1" stopColor="#fde68a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 5. VARICOSE VEINS ILLUSTRATION
export function VaricoseVeinsIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Leg contour */}
      <path d="M160 50C160 120 150 180 140 250H260C250 180 240 120 240 50" stroke="#cbd5e1" strokeWidth="4" fill="#f8fafc" />
      {/* Normal vein */}
      <path d="M180 60V240" stroke="#0ea5e9" strokeWidth="4" strokeDasharray="4 4" />
      {/* Tortuous Varicose Vein */}
      <path d="M220 60C235 80 205 110 230 140C250 165 210 200 225 240" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
      {/* Endovenous Laser Fiber */}
      <path d="M220 60C235 80 205 110 230 140" stroke="#14b8a6" strokeWidth="4" />
      <circle cx="230" cy="140" r="10" fill="#14b8a6" />
      <circle cx="230" cy="140" r="18" fill="#14b8a6" opacity="0.3" />
    </svg>
  );
}

// 6. PILES / HEMORRHOIDS ILLUSTRATION
export function PilesIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      <circle cx="200" cy="150" r="90" fill="#0284c7" opacity="0.06" />
      {/* Rectal canal contour */}
      <path d="M160 70V210C160 230 240 230 240 210V70" stroke="#0284c7" strokeWidth="6" fill="#f1f5f9" />
      {/* Hemorrhoidal cushion / vascular swellings */}
      <circle cx="160" cy="170" r="16" fill="#ef4444" opacity="0.85" stroke="#b91c1c" strokeWidth="2" />
      <circle cx="240" cy="180" r="14" fill="#f97316" opacity="0.85" stroke="#c2410c" strokeWidth="2" />
      {/* Laser Fiber energy tip */}
      <line x1="200" y1="70" x2="160" y2="170" stroke="#14b8a6" strokeWidth="3" strokeDasharray="3 3" />
      <circle cx="160" cy="170" r="22" fill="#14b8a6" opacity="0.2" />
    </svg>
  );
}

// 7. ANAL FISTULA ILLUSTRATION
export function FistulaIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Tissue layers */}
      <path d="M120 90H280V210H120V90Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="4" />
      {/* Internal opening to external opening tract */}
      <path d="M160 110C180 140 220 160 240 190" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
      {/* Laser closure probe */}
      <path d="M160 110C180 140 220 160 240 190" stroke="#14b8a6" strokeWidth="3" strokeDasharray="4 4" />
      <circle cx="240" cy="190" r="12" fill="#dc2626" opacity="0.4" />
      <circle cx="160" cy="110" r="8" fill="#14b8a6" />
    </svg>
  );
}

// 8. ANAL FISSURE ILLUSTRATION
export function FissureIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Sphincter muscle ring */}
      <circle cx="200" cy="150" r="80" stroke="#0284c7" strokeWidth="12" fill="none" strokeDasharray="12 6" />
      {/* Mucosal tear / fissure */}
      <path d="M200 70V110" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
      <circle cx="200" cy="90" r="14" fill="#ef4444" opacity="0.3" />
      {/* Gentle healing beam */}
      <line x1="200" y1="150" x2="200" y2="90" stroke="#14b8a6" strokeWidth="3" />
      <circle cx="200" cy="90" r="6" fill="#14b8a6" />
    </svg>
  );
}

// 9. DIABETIC FOOT ILLUSTRATION
export function DiabeticFootIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      <circle cx="200" cy="150" r="95" fill="#0284c7" opacity="0.06" />
      {/* Foot & ankle contour */}
      <path d="M150 60V180C150 210 170 240 220 240H270C280 240 285 230 280 220C270 200 240 190 230 190V60" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" fill="#e0f2fe" />
      {/* Ulcer wound site */}
      <circle cx="230" cy="215" r="16" fill="#ef4444" opacity="0.8" stroke="#b91c1c" strokeWidth="2" />
      {/* Laser / Healing VAC therapy beam */}
      <circle cx="230" cy="215" r="26" fill="#14b8a6" opacity="0.2" stroke="#14b8a6" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="230" cy="215" r="6" fill="#0d9488" />
    </svg>
  );
}

// 10. THYROID ILLUSTRATION
export function ThyroidIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Trachea tube */}
      <rect x="180" y="40" width="40" height="220" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="4" />
      <line x1="180" y1="80" x2="220" y2="80" stroke="#cbd5e1" strokeWidth="3" />
      <line x1="180" y1="120" x2="220" y2="120" stroke="#cbd5e1" strokeWidth="3" />
      <line x1="180" y1="160" x2="220" y2="160" stroke="#cbd5e1" strokeWidth="3" />
      {/* Butterfly Thyroid Gland Left & Right Lobes */}
      <path d="M180 140C130 110 110 160 130 200C150 220 180 180 180 170Z" fill="url(#thyroid-grad)" stroke="#0284c7" strokeWidth="4" />
      <path d="M220 140C270 110 290 160 270 200C250 220 220 180 220 170Z" fill="url(#thyroid-grad)" stroke="#0284c7" strokeWidth="4" />
      {/* Isthmus bridge */}
      <path d="M175 160H225V175H175Z" fill="#0284c7" opacity="0.7" />
      {/* Thyroid Nodule indicator */}
      <circle cx="145" cy="175" r="14" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
      <defs>
        <linearGradient id="thyroid-grad" x1="110" y1="110" x2="290" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 11. BREAST LUMP / SURGERY ILLUSTRATION
export function BreastLumpIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Soft tissue contour */}
      <path d="M110 150C110 90 160 70 200 70C240 70 290 90 290 150C290 210 240 230 200 230C160 230 110 210 110 150Z" fill="#f8fafc" stroke="#0284c7" strokeWidth="5" />
      {/* Glandular tissue pattern */}
      <circle cx="200" cy="150" r="50" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 6" fill="none" />
      {/* Fibroadenoma / Lump */}
      <circle cx="225" cy="135" r="18" fill="#f59e0b" stroke="#d97706" strokeWidth="3" />
      {/* Precision excision indicator */}
      <circle cx="225" cy="135" r="28" fill="#14b8a6" opacity="0.2" stroke="#14b8a6" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
}

// 12. CELLULITIS ILLUSTRATION
export function CellulitisIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#FEF2F2" />
      <circle cx="200" cy="150" r="95" fill="#ef4444" opacity="0.08" />
      {/* Leg contour */}
      <path d="M150 50C150 120 140 180 130 250H270C260 180 250 120 250 50" stroke="#94a3b8" strokeWidth="4" fill="#f8fafc" />
      {/* Inflamed cellulitis skin region */}
      <path d="M142 120C170 115 230 115 258 120C263 170 255 210 230 240H170C145 210 137 170 142 120Z" fill="#fca5a5" opacity="0.6" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 4" />
      {/* Drainage / Treatment point */}
      <circle cx="200" cy="170" r="14" fill="#14b8a6" opacity="0.9" />
      <path d="M194 170L198 174L206 166" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 13. ABDOMINAL CANCER SURGERY ILLUSTRATION
export function AbdominalCancerIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      <circle cx="200" cy="150" r="100" fill="#0284c7" opacity="0.08" />
      {/* Abdominal Organ / Stomach & Intestinal schematic */}
      <path d="M140 90C140 70 170 60 200 60C230 60 260 70 260 90C260 130 240 180 200 180C160 180 140 130 140 90Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="6" />
      {/* Tumor lesion */}
      <circle cx="200" cy="115" r="16" fill="#f59e0b" stroke="#d97706" strokeWidth="3" />
      {/* Laparoscopic 4K HD keyhole target vision ring */}
      <circle cx="200" cy="115" r="32" fill="#14b8a6" opacity="0.2" stroke="#14b8a6" strokeWidth="3" strokeDasharray="4 4" />
      <line x1="200" y1="75" x2="200" y2="155" stroke="#14b8a6" strokeWidth="2" />
      <line x1="160" y1="115" x2="240" y2="115" stroke="#14b8a6" strokeWidth="2" />
    </svg>
  );
}

// 14. EMERGENCY TRAUMA SURGERY ILLUSTRATION
export function EmergencyTraumaIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#FEF2F2" />
      <circle cx="200" cy="150" r="100" fill="#ef4444" opacity="0.08" />
      {/* Medical Cross Emergency Icon */}
      <rect x="170" y="80" width="60" height="140" rx="10" fill="#dc2626" />
      <rect x="130" y="120" width="140" height="60" rx="10" fill="#dc2626" />
      {/* Pulse Line overlay */}
      <path d="M90 150H130L145 110L165 190L185 130L200 160L215 150H310" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 15. PILONIDAL SINUS ILLUSTRATION
export function PilonidalSinusIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      {/* Gluteal cleft contour */}
      <path d="M140 50C170 110 170 190 140 250" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
      <path d="M260 50C230 110 230 190 260 250" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
      {/* Pilonidal sinus tract */}
      <ellipse cx="200" cy="150" rx="18" ry="30" fill="#fee2e2" stroke="#ef4444" strokeWidth="4" />
      <circle cx="200" cy="135" r="5" fill="#dc2626" />
      <circle cx="200" cy="165" r="5" fill="#dc2626" />
      {/* SILaC Laser Fiber Radial Emission */}
      <line x1="200" y1="50" x2="200" y2="150" stroke="#14b8a6" strokeWidth="4" strokeDasharray="4 4" />
      <circle cx="200" cy="150" r="25" fill="#14b8a6" opacity="0.25" />
      <circle cx="200" cy="150" r="8" fill="#14b8a6" />
    </svg>
  );
}

// 16. INTESTINAL & COLON SURGERY ILLUSTRATION
export function IntestinalColonIllustration({ className = "w-full h-full", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="400" height="300" rx="16" fill="#F8FAFC" />
      <circle cx="200" cy="150" r="95" fill="#0284c7" opacity="0.06" />
      {/* Colon Loop Contour */}
      <path d="M120 220V120C120 85 150 65 200 65C250 65 280 85 280 120V220" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M140 220V130C140 105 165 90 200 90C235 90 260 105 260 130V220" stroke="#bae6fd" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Laparoscopic resection / staple anastomosis line */}
      <line x1="165" y1="90" x2="235" y2="90" stroke="#14b8a6" strokeWidth="4" strokeDasharray="4 3" />
      <circle cx="200" cy="90" r="14" fill="#0d9488" opacity="0.8" />
      <path d="M194 90L198 94L206 86" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// MAPPER COMPONENT FOR EASY LOOKUP
export function ConditionIllustration({ slug, className }: { slug: string; className?: string }) {
  switch (slug) {
    case "hernia":
    case "hernia-repair":
      return <HerniaIllustration className={className} />;
    case "gallbladder-stones":
    case "gallbladder-appendix":
      return <GallbladderIllustration className={className} />;
    case "appendicitis":
      return <AppendixIllustration className={className} />;
    case "lipoma":
      return <LipomaIllustration className={className} />;
    case "varicose-veins":
    case "laser-varicose-veins":
      return <VaricoseVeinsIllustration className={className} />;
    case "piles":
      return <PilesIllustration className={className} />;
    case "fistula":
      return <FistulaIllustration className={className} />;
    case "fissure":
      return <FissureIllustration className={className} />;
    case "thyroid":
      return <ThyroidIllustration className={className} />;
    case "breast-lump":
    case "breast-surgery":
      return <BreastLumpIllustration className={className} />;
    case "diabetic-foot":
      return <DiabeticFootIllustration className={className} />;
    case "cellulitis":
      return <CellulitisIllustration className={className} />;
    case "abdominal-cancer-surgery":
      return <AbdominalCancerIllustration className={className} />;
    case "pilonidal-sinus":
      return <PilonidalSinusIllustration className={className} />;
    case "intestinal-colon-surgery":
      return <IntestinalColonIllustration className={className} />;
    case "emergency-trauma-surgery":
    case "laparoscopic-surgery":
    default:
      return <EmergencyTraumaIllustration className={className} />;
  }
}
