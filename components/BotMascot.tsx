export default function BotMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* antenna */}
      <line x1="100" y1="20" x2="100" y2="40" stroke="#3FCF7F" strokeWidth="3" />
      <circle cx="100" cy="16" r="6" fill="#3FCF7F" />

      {/* head */}
      <rect x="50" y="40" width="100" height="85" rx="18" fill="#1A1D25" stroke="#2A2E38" strokeWidth="2" />

      {/* eyes */}
      <rect x="72" y="72" width="16" height="20" rx="6" fill="#3FCF7F" />
      <rect x="112" y="72" width="16" height="20" rx="6" fill="#3FCF7F" />

      {/* mouth */}
      <rect x="80" y="102" width="40" height="6" rx="3" fill="#8A8F9C" />

      {/* body */}
      <rect x="65" y="130" width="70" height="55" rx="14" fill="#1A1D25" stroke="#2A2E38" strokeWidth="2" />
      <circle cx="100" cy="157" r="10" fill="#E8A951" opacity="0.9" />

      {/* arms */}
      <rect x="40" y="138" width="20" height="10" rx="5" fill="#2A2E38" />
      <rect x="140" y="138" width="20" height="10" rx="5" fill="#2A2E38" />
    </svg>
  );
}
