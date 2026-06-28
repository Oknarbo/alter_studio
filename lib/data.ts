export const siteConfig = {
  name: "Studio Alter",
  tagline: "Precizna umjetnost njege kose u srcu Zagreba",
  description:
    "Ekskluzivni frizerski studio u centru Zagreba. Individualni pristup, vrhunska preciznost i atmosfera u kojoj se osjećate posebno.",
  owner: "Tina",
  ownerFullName: "Augustina Salopek Bogunović",
  experience: "15+ godina iskustva",
  address: "Ribnjak ulica 18, 10000 Zagreb",
  phone: "+385 95 900 4542",
  phoneRaw: "+385959004542",
  email: "info@studioalter.com",
  whatsapp: "https://wa.me/385959004542",
  facebook:
    "https://hr-hr.facebook.com/people/Frizerski-studio-alter/100063686823494/",
  instagram: "https://instagram.com/studioalter",
  founded: 2008,
  hours: {
    weekdays: "Pon – Pet: 10:00 – 19:00",
    saturday: "Subota: 09:00 – 15:00",
    sunday: "Nedjelja: Zatvoreno",
  },
};

export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "cut-style",
    name: "Šišanje & Styling",
    description:
      "Precizno šišanje prilagođeno vašem licu, tipu kose i životnom stilu. Uključuje savjetovanje i završni styling.",
    duration: "60 min",
    price: "od 350 kn",
    icon: "scissors",
  },
  {
    id: "color",
    name: "Bojanje kose",
    description:
      "Od nijansi koje osvježavaju do potpunih transformacija. Koristimo premium boje za sjaj i dugotrajnost.",
    duration: "90–120 min",
    price: "od 550 kn",
    icon: "palette",
  },
  {
    id: "highlights",
    name: "Pramenovi & Balayage",
    description:
      "Prirodni pramenovi, balayage ili ombré — tehnike koje daju dubinu i dimenziju vašoj kosi.",
    duration: "120–180 min",
    price: "od 750 kn",
    icon: "sparkles",
  },
  {
    id: "treatment",
    name: "Tretman kose",
    description:
      "Regenerativni tretmani za oštećenu, suhu ili tanku kosu. Vraćamo sjaj, elastičnost i zdravlje.",
    duration: "45 min",
    price: "od 250 kn",
    icon: "droplets",
  },
  {
    id: "blowdry",
    name: "Fen frizura",
    description:
      "Profesionalni blow-dry za svaku priliku — glatka, voluminozna ili ležerna beach wave frizura.",
    duration: "45 min",
    price: "od 200 kn",
    icon: "wind",
  },
  {
    id: "formal",
    name: "Svečana frizura",
    description:
      "Elegantne updo frizure za vjenčanja, mature i posebne događaje. Probna frizura po dogovoru.",
    duration: "90 min",
    price: "Cijene na upit",
    icon: "crown",
  },
  {
    id: "men",
    name: "Muško šišanje",
    description:
      "Klasično ili moderno muško šišanje s pažnjom prema detaljima i obliku glave.",
    duration: "30 min",
    price: "od 180 kn",
    icon: "user",
  },
  {
    id: "consultation",
    name: "Konzultacija",
    description:
      "Besplatna 15-minutna konzultacija prije većih transformacija — boja, rez, stil.",
    duration: "15 min",
    price: "Besplatno",
    icon: "message-circle",
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  span?: "tall" | "wide" | "normal";
};

// TODO: Zamijeniti placeholder slike pravim fotografijama iz salona
export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    alt: "Elegantna balayage frizura",
    caption: "Balayage s toplim tonovima",
    span: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    alt: "Precizno šišanje",
    caption: "Precizno šišanje",
    span: "normal",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb124?w=800&q=80",
    alt: "Salon atmosfera",
    caption: "Atmosfera studija",
    span: "wide",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    alt: "Boja kose",
    caption: "Bogata boja i sjaj",
    span: "normal",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    alt: "Svečana frizura",
    caption: "Svečana frizura",
    span: "tall",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    alt: "Styling detalj",
    caption: "Detalj i preciznost",
    span: "normal",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Definitivno najbolji frizerski salon u Zagrebu. Tina razumije što želim prije nego što i sama znam.",
    author: "D. V.",
    initials: "DV",
  },
  {
    id: "2",
    quote:
      "Tina je definitivno jedna od najboljih frizerki u gradu. Precizna, strpljiva i uvijek savršen rezultat.",
    author: "J. K.",
    initials: "JK",
  },
  {
    id: "3",
    quote:
      "Jednostavno najbolji frizerski salon u Zagrebu: kreativan, profesionalan, precizan i ljubazan!",
    author: "A. B.",
    initials: "AB",
  },
  {
    id: "4",
    quote:
      "Mjesto za najbolju frizuru u Zagrebu. Tina je obrazovan i precizan profesionalac — vrhunska frizerka!",
    author: "M. K.",
    initials: "MK",
  },
];

export const colorVariants = {
  gold: {
    name: "Zlatni akcent",
    accent: "#B8956C",
    accentLight: "#D4BC94",
    accentDark: "#96754A",
  },
  forest: {
    name: "Tamnozelena",
    accent: "#2D4A3E",
    accentLight: "#3D6354",
    accentDark: "#1E3329",
  },
  bordeaux: {
    name: "Bordo",
    accent: "#6B2D3C",
    accentLight: "#8B3D4E",
    accentDark: "#4A1F2A",
  },
} as const;
