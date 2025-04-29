
import LogoCarouselAutoplay from "@/components/LogoCarouselAutoplay";

const testimonialLogos = [{
  src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
  alt: "Hof Liebeneck Osterspai",
  width: 180
}, {
  src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
  alt: "Homeby",
  width: 160
}, {
  src: "/lovable-uploads/new-favorent-logo.webp", // Updated to use webp format
  alt: "Favorent",
  width: 150
}, {
  src: "/lovable-uploads/fd96b10c-36ff-4492-a020-f47f221d8d39.png",
  alt: "Luxury Hideaway",
  width: 170
}, {
  src: "/lovable-uploads/404c2219-9b9a-4ebd-b8ec-aea63d21d6d7.png",
  alt: "Plau Lagoons",
  width: 160
}, {
  src: "/lovable-uploads/3f0f71e5-0006-4019-9e50-f5c4354ed3fe.png",
  alt: "Berlin Mitte Experience",
  width: 180
}, {
  src: "/lovable-uploads/9451653b-0793-4645-8889-3222d4c98e84.png",
  alt: "Fairienglück",
  width: 160
}];

export function PartnersSection() {
  return (
    <section className="bg-white py-[26px]">
      <div className="container-custom overflow-hidden">
        <LogoCarouselAutoplay logos={testimonialLogos} />
      </div>
    </section>
  );
}

export default PartnersSection;
