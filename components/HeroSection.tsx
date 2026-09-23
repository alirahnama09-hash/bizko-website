export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bizko-navy to-[#081a33] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-bizko-teal/10 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-bizko-teal-light/5 blur-3xl" />
        <svg
          className="absolute -bottom-24 -left-20 h-72 w-72 opacity-60"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle cx="150" cy="150" r="115" stroke="#16A6A6" strokeOpacity="0.09" strokeWidth="2" />
          <circle cx="150" cy="150" r="85" stroke="#16A6A6" strokeOpacity="0.06" strokeWidth="1.5" />
          <circle cx="150" cy="150" r="55" stroke="#16A6A6" strokeOpacity="0.05" strokeWidth="1" />
        </svg>
        <svg
          className="absolute -right-10 top-16 hidden h-40 w-40 opacity-50 xl:block"
          viewBox="0 0 160 160"
          fill="none"
        >
          <path
            d="M20 140 C60 70 100 70 125 40"
            stroke="#16A6A6"
            strokeOpacity="0.1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="125" cy="40" r="4" stroke="#16A6A6" strokeOpacity="0.12" strokeWidth="2" />
        </svg>
        <svg
          className="absolute bottom-24 right-[18%] hidden h-20 w-20 opacity-40 lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M14 86 L86 14" stroke="#16A6A6" strokeOpacity="0.08" strokeWidth="1.5" />
          <path d="M40 86 L86 40" stroke="#16A6A6" strokeOpacity="0.06" strokeWidth="1.5" />
          <path d="M14 60 L60 14" stroke="#16A6A6" strokeOpacity="0.06" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="relative">{children}</div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-10 w-full text-white"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,24 C180,44 360,10 540,18 C720,26 900,40 1080,28 C1260,16 1350,10 1440,20 L1440,48 L0,48 Z" />
      </svg>
    </section>
  );
}