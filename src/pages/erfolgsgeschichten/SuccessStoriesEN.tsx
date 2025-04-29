
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LogoCarouselAutoplay from '@/components/LogoCarouselAutoplay';

const testimonialLogos = [{
  src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
  alt: "Hof Liebeneck Osterspai",
  width: 180
}, {
  src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
  alt: "Homeby",
  width: 160
}, {
  src: "/lovable-uploads/35553133-b084-41da-985f-8546970c819f.png",
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

const testimonials = [{
  company: "Hof Liebeneck",
  name: "Mario Schilling",
  image: "/lovable-uploads/7ac2f1b9-71b4-4955-b98d-10b23cd137a4.png",
  properties: 4,
  joinedYear: 2024,
  quote: "Convincing guests to book directly through our website was always a challenge. Ever since we added the Stellar Trust Badge to our site, which aggregates our Airbnb and Booking.com reviews, we've already seen an uptick in bookings.\n\nI also feel much more confident with bookings from guests I haven't hosted before, since I can now offer them the choice between a security deposit or Stellar's guest damage insurance.",
  website: "https://www.liebeneck.com/"
}, {
  company: "Plau Lagoons",
  name: "Ralf Kramer",
  image: "/lovable-uploads/cda4c627-8961-489c-b264-d970daf26bed.png",
  properties: 10,
  joinedYear: 2024,
  quote: "Increasing direct bookings has recently become super important—it's not just about more revenue, but about connecting with guests personally, for example with greeting cards or special offers.\n\nBut we quickly realized: a beautiful website alone is not enough. We needed something to give our guests extra reassurance. That's exactly what Stellar's Trust Badge delivered.",
  website: "https://www.plau-lagoons.de"
}, {
  company: "Favorent",
  name: "Volker Rantz",
  image: "/lovable-uploads/d7825600-e22b-4fa5-a960-fb33e4dd0d9d.png",
  properties: 700,
  joinedYear: 2024,
  quote: "Daily guest damage insurance is a real game changer for us – both as a unique selling point to win new agency clients and for simplifying our security deposit management.\n\nWe've been able to significantly reduce friction between us as the agency, the owners, and the guests.",
  website: "https://favorent.de/"
}, {
  company: "Fairienglück",
  name: "Christopher Redenz",
  image: "/lovable-uploads/d642b640-6f64-4b66-a4d4-263a5d6f288c.png",
  properties: 6,
  joinedYear: 2024,
  quote: "As a small vacation rental owner, convincing guests to book directly through my site was always a challenge. Stellar Checkin completely changed that. The Trust Badge gives my potential guests the confidence they need right away.\n\nThe identity verification and the option to offer guest damage insurance have massively increased my booking security.",
  website: "https://www.fairienglueck.de/"
}, {
  company: "Berlin Mitte Experience",
  name: "Philipp Reuter",
  image: "/lovable-uploads/321ff530-1491-4b9c-b977-7111d0710385.png",
  properties: 8,
  joinedYear: 2024,
  quote: "As a host with multiple accommodations in Berlin Mitte, managing deposits and guest registrations was always time-consuming. With Stellar Checkin, I've fully digitized and automated these processes.\n\nI'm especially impressed by the seamless integration with our Property Management System and being able to upsell additional services directly in the check-in process.",
  website: "https://berlin-mitte.homes/de"
}, {
  company: "Homeby",
  name: "Ale Fiorotto",
  image: "/lovable-uploads/1c1f42aa-b940-4bc9-bae9-f556d48149cf.png",
  properties: 12,
  joinedYear: 2024,
  quote: "As a property management company, we used to juggle between different systems all the time. Stellar Checkin has truly simplified and digitized all our check-in processes.\n\nNow, we can collect guest data automatically, offer insurance, and upsell services, all of which have clearly boosted our efficiency and revenue.",
  website: "https://homeby.it"
}];

const SuccessStoriesEN = () => <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              Our <span className="text-apple">Success Stories</span>
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              Discover how property owners and hosts use Stellar Checkin to optimize their processes and boost their success.
            </p>
            <div className="mb-8">
              <a href="/en/brevo" className="inline-block px-8 py-3 bg-apple hover:bg-apple-600 text-white rounded-lg text-lg font-semibold font-aeonik shadow transition-colors">
                Register now
              </a>
            </div>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Success Stories" className="w-4/5 h-auto rounded-lg shadow-xl" loading="eager" />
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-royal">
          Selected Clients
        </h2>
        <LogoCarouselAutoplay logos={testimonialLogos} />
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-12">
          {/* Award Icon */}
          <svg className="h-8 w-8 text-apple" viewBox="0 0 24 24" fill="none"><path d="M11.999 2C8.132 2 5 5.132 5 8.999a6.009 6.009 0 0 0 2.307 4.713l-.881 4.73a1 1 0 0 0 1.447 1.037L12 17.197l4.128 2.282a1 1 0 0 0 1.447-1.037l-.88-4.73A6.008 6.008 0 0 0 19 8.999C19 5.132 15.868 2 11.999 2ZM12 22c-.31 0-.62-.075-.895-.225l-4.07-2.25a3 3 0 0 1-1.447-3.11l.874-4.698C4.807 9.393 5.667 5.999 8.999 5.999c1.49 0 3.139.534 5 .76 1.861-.226 3.511-.76 5-.76 3.33 0 4.192 3.394 2.237 5.917l.875 4.698a3 3 0 0 1-1.447 3.11l-4.07 2.25A1.993 1.993 0 0 1 12 22Z" fill="currentColor" /></svg>
          <h2 className="text-3xl font-bold text-royal inline-block relative">
            Success Stories
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="p-8 bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-royal">
                      <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="hover:text-apple transition-colors">
                        {testimonial.company}
                      </a>
                    </h3>
                    <p className="text-gray-600">{testimonial.name}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 whitespace-pre-line">{testimonial.quote}</p>
              </div>
              <div className="mt-auto">
                <div className="flex items-center text-sm text-gray-600 gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 inline" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M12 13c-4.418 0-8 1.79-8 4v3h16v-3c0-2.21-3.582-4-8-4z" /></svg>
                    <span>{testimonial.name}</span>
                  </div>
                  {testimonial.properties && <div className="flex items-center gap-1">
                      <svg className="h-4 w-4 inline" viewBox="0 0 24 24"><path d="M19 21V7.333c0-.233-.158-.444-.384-.491l-6-1.274a.516.516 0 0 0-.232 0l-6 1.274A.516.516 0 0 0 5 7.333V21h14z" /><rect x="9" y="13" width="6" height="8" rx="1" /><rect x="4" y="21" width="16" height="2" /></svg>
                      <span>{testimonial.properties} properties</span>
                    </div>}
                </div>
                {testimonial.joinedYear && <div className="text-sm text-gray-500 mt-2">
                    Client since {testimonial.joinedYear}
                  </div>}
              </div>
            </div>)}
        </div>
      </div>
    </section>
    <Footer />
  </>;
export default SuccessStoriesEN;
