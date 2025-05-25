
const TransparentText = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-clip">
      {/* Background Image */}
      <img
        src="/bg_aim.webp"
        alt="Background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] object-cover z-0"
      />
      <div className="absolute inset-0 bg-black h-[15%] z-10" />

      {/* Overlay (optional for dark overlay) */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Centered Text */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <h1 className="fixed flex flex-row gap-4 flex-wrap text-4xl md:text-6xl font-bold text-white">
          <span>We&apos;re</span>
          <span>Passionate</span>
          <span>Thinkers</span>
        </h1>
      </div>
    </section>
  );
};

export default TransparentText;
