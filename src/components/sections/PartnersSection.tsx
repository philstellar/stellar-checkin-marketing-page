
import LogoCarouselAutoplay from "@/components/LogoCarouselAutoplay";

export function PartnersSection() {
  const pmsLogos = [
    {
      src: "/lovable-uploads/4d73a118-7cc1-4e3f-bf33-dec5ec07b93c.png",
      alt: "Beds24",
      width: 160
    },
    {
      src: "/lovable-uploads/349e2cab-5eb3-4451-8d9e-0cdf5927f51b.png",
      alt: "Guesty",
      width: 160
    },
    {
      src: "/lovable-uploads/dc32a014-5de5-41d8-b177-4489d94576f7.png",
      alt: "Hostfully",
      width: 160
    },
    {
      src: "/lovable-uploads/3352a02f-84ed-4bbb-a143-9c2f96f0107a.png",
      alt: "Hostaway",
      width: 160
    },
    {
      src: "/lovable-uploads/eb13347a-14b9-4262-9031-98ecc831003c.png",
      alt: "Lodgify",
      width: 160
    },
    {
      src: "/lovable-uploads/dd00ad8c-b1db-44a5-8b95-67ed878022b9.png",
      alt: "Uplisting",
      width: 160
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <LogoCarouselAutoplay logos={pmsLogos} />
      </div>
    </section>
  );
}
