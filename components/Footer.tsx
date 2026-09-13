export default function Footer() {
  return (
    <footer className="bg-bizko-navy text-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-4 text-sm text-white/80">
        <p>© {new Date().getFullYear()} بیزکو — گروه نرم‌افزاری</p>
      </div>
    </footer>
  );
}