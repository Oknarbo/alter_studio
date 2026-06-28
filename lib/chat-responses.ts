export type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
  quickReplies?: string[];
};

export const INITIAL_GREETING: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Pozdrav! 👋 Ja sam AI asistent Studija Alter. Mogu vam pomoći s informacijama o uslugama, cijenama i slobodnim terminima. Kako vam mogu pomoći danas?",
  timestamp: new Date(),
  quickReplies: [
    "Želim rezervirati termin",
    "Koliko košta bojanje?",
    "Radno vrijeme?",
  ],
};

type ResponseRule = {
  keywords: string[];
  response: string;
  quickReplies?: string[];
};

const responseRules: ResponseRule[] = [
  {
    keywords: ["termin", "rezerv", "zakaž", "zakaži", "booking", "slobodn"],
    response:
      "Odlično! Evo slobodnih termina ovaj tjedan:\n\n• Utorak, 14:00 — Tina\n• Srijeda, 10:30 — Tina\n• Četvrtak, 16:00 — Tina\n• Petak, 11:00 — Tina\n\nKoji termin vam odgovara? Mogu odmah rezervirati i poslati potvrdu na WhatsApp.",
    quickReplies: ["Utorak 14:00", "Srijeda 10:30", "Ne odgovara mi, zovi me"],
  },
  {
    keywords: ["utorak", "14:00", "14"],
    response:
      "Super! Rezervirao sam vam termin:\n\n📅 Utorak, 14:00\n💇 Usluga: Šišanje & Styling\n📍 Ribnjak ulica 18, Zagreb\n\nPotvrdu ćete dobiti na WhatsApp. Trebate li promijeniti uslugu ili imate posebne zahtjeve?",
    quickReplies: ["Potvrdi termin", "Promijeni uslugu", "Dodaj bojanje"],
  },
  {
    keywords: ["srijeda", "10:30", "10"],
    response:
      "Termin je rezerviran!\n\n📅 Srijeda, 10:30\n💇 Usluga: Šišanje & Styling\n📍 Ribnjak ulica 18, Zagreb\n\nVidimo se uskoro! Ako trebate otkazati, javite se barem 24h unaprijed.",
    quickReplies: ["Hvala!", "Promijeni termin"],
  },
  {
    keywords: ["bojan", "boja", "color", "pramen", "balayage"],
    response:
      "Naše usluge bojanja:\n\n• Bojanje kose — od 550 kn (90–120 min)\n• Pramenovi & Balayage — od 750 kn (120–180 min)\n\nTina koristi premium boje za dugotrajan sjaj. Preporučujem konzultaciju prije većih promjena — besplatna je!\n\nŽelite li rezervirati termin za bojanje?",
    quickReplies: ["Da, rezerviraj termin", "Koliko traje balayage?"],
  },
  {
    keywords: ["cijen", "košta", "koliko", "price"],
    response:
      "Evo cjenika naših usluga:\n\n• Šišanje & Styling — od 350 kn\n• Bojanje kose — od 550 kn\n• Pramenovi & Balayage — od 750 kn\n• Tretman kose — od 250 kn\n• Fen frizura — od 200 kn\n\nTočne cijene ovise o dužini i stanju kose. Želite li termin ili detalje o nekoj usluzi?",
    quickReplies: ["Rezerviraj termin", "Više o balayageu"],
  },
  {
    keywords: ["radno", "vrijeme", "otvoren", "sati", "nedjelj"],
    response:
      "Radno vrijeme Studija Alter:\n\n🕙 Pon – Pet: 10:00 – 19:00\n🕘 Subota: 09:00 – 15:00\n❌ Nedjelja: Zatvoreno\n\n📍 Ribnjak ulica 18, Zagreb\n📞 +385 95 900 4542\n\nZa termin isti dan preporučujemo telefonski poziv.",
    quickReplies: ["Rezerviraj termin", "Kako doći?"],
  },
  {
    keywords: ["adres", "gdje", "lokacij", "doći", "karta"],
    response:
      "Studio Alter se nalazi u centru Zagreba:\n\n📍 Ribnjak ulica 18, 10000 Zagreb\n\nLako dostupan pješice iz centra grada. Parking u blizini na Ribnjaku.\n\nŽelite li rezervirati posjet?",
    quickReplies: ["Rezerviraj termin", "Radno vrijeme"],
  },
  {
    keywords: ["zovi", "poziv", "telefon"],
    response:
      "Naravno! Možete nas nazvati direktno na +385 95 900 4542 ili poslati poruku na WhatsApp.\n\nTina će vam osobno odgovoriti i dogovoriti idealan termin. Radujemo se vašem dolasku! ✨",
    quickReplies: ["Rezerviraj termin online", "Hvala!"],
  },
  {
    keywords: ["hvala", "super", "odlič", "perfekt"],
    response:
      "Hvala vama! Radujemo se što ćemo vam pomoći osjećati se fantastično. Ako imate još pitanja, slobodno pitajte — tu sam! 💫",
    quickReplies: ["Rezerviraj termin", "Cijene usluga"],
  },
  {
    keywords: ["potvrdi", "potvrda"],
    response:
      "Termin je potvrđen! ✅\n\nPoslali smo vam potvrdu na WhatsApp s adresom i uputama. Molimo vas da dođete 5 minuta ranije.\n\nVidimo se u Studiju Alter! ✨",
    quickReplies: ["Hvala!", "Promijeni termin"],
  },
];

const defaultResponse =
  "Hvala na poruci! Mogu vam pomoći s rezervacijom termina, informacijama o uslugama i cijenama, ili radnom vremenu. Što vas zanima?";

/**
 * Mock chat logic — zamijeniti pravim LLM pozivom (Groq / xAI).
 * Vidi README.md za upute o integraciji.
 */
export function getMockResponse(userMessage: string): {
  content: string;
  quickReplies?: string[];
} {
  const normalized = userMessage.toLowerCase().trim();

  for (const rule of responseRules) {
    if (rule.keywords.some((kw) => normalized.includes(kw))) {
      return {
        content: rule.response,
        quickReplies: rule.quickReplies,
      };
    }
  }

  return {
    content: defaultResponse,
    quickReplies: ["Rezerviraj termin", "Cijene usluga", "Radno vrijeme"],
  };
}
