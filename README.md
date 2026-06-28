# Studio Alter — Landing Page

Moderna, luksuzna landing page za frizerski studio **Studio Alter** (Zagreb).

## Tech stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4** + shadcn/ui komponente
- **framer-motion** — suptilne animacije
- **lucide-react** — ikone
- Deploy ready na **Vercel**

## Brzi start

```bash
cd alter_studio
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
npm start
```

Deploy na Vercel: poveži GitHub repo ili `vercel deploy` iz ovog foldera.

## Struktura

```
alter_studio/
├── app/                  # Next.js App Router
├── components/           # UI sekcije + chat widget
│   └── ui/               # shadcn/ui komponente
├── lib/
│   ├── data.ts           # Sadržaj, usluge, testimoniali
│   ├── chat-responses.ts # Mock chat logika (demo)
│   └── utils.ts
└── README.md
```

## Varijante boja

Trenutno aktivna: **Zlatni akcent** (`#B8956C`).

Alternative u `lib/data.ts` → `colorVariants`:

| Varijanta   | Akcent    | Osjećaj              |
|-------------|-----------|----------------------|
| Zlatna      | `#B8956C` | Luksuz, toplina (aktivna) |
| Tamnozelena | `#2D4A3E` | Prirodno, premium    |
| Bordo       | `#6B2D3C` | Elegancija, sofisticiranost |

Za promjenu: ažuriraj CSS varijable u `app/globals.css`.

## Zamjena slika

Placeholder slike su s Unsplash. Zamijeni ih u:

- `components/hero.tsx` — hero pozadina
- `components/about.tsx` — fotografija Tine
- `lib/data.ts` → `galleryItems` — galerija

Originalne fotografije sa starog sitea: `https://www.studioalter.com/cms/uploads/`

## Chat widget — spajanje pravog AI agenta

Trenutno chat koristi **mock odgovore** (`lib/chat-responses.ts`). Za produkciju:

### 1. API ruta (`app/api/chat/route.ts`)

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  // Groq primjer
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `Ti si AI asistent frizerskog salona Studio Alter u Zagrebu.
            Vlasnica je Tina (Augustina Salopek Bogunović).
            Adresa: Ribnjak ulica 18. Tel: +385 95 900 4542.
            Radno vrijeme: Pon-Pet 10-19, Sub 9-15.
            Budi topao, profesionalan, na hrvatskom. Pomažeš s bookingom.`,
        },
        ...history,
        { role: "user", content: message },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json({
    content: data.choices[0].message.content,
  });
}
```

### 2. Supabase — booking baza

```sql
create table appointments (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_phone text,
  service text,
  appointment_date timestamptz not null,
  status text default 'pending',
  created_at timestamptz default now()
);
```

### 3. Evolution API — WhatsApp integracija

- Postavi [Evolution API](https://evolution-api.com/) instancu
- Na potvrdu termina, pošalji WhatsApp poruku Tini i klijentu
- Webhook: `POST /api/whatsapp/webhook`

### 4. Env varijable (`.env.local`)

```env
GROQ_API_KEY=gsk_...
# ili
XAI_API_KEY=xai-...

SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJ...

EVOLUTION_API_URL=https://your-evolution-api.com
EVOLUTION_API_KEY=...
EVOLUTION_INSTANCE=studio-alter
```

### 5. Zamjena mock logike

U `components/chat-widget.tsx`, zamijeni `getMockResponse(text)` s fetch pozivom na `/api/chat` (komentar već označen u kodu).

## Kontakt podaci (iz starog sitea)

- **Studio:** Studio Alter
- **Vlasnica:** Tina (Augustina Salopek Bogunović)
- **Adresa:** Ribnjak ulica 18, 10000 Zagreb
- **Tel:** +385 95 900 4542
- **Email:** info@studioalter.com
- **Instagram:** [@studioalter](https://instagram.com/studioalter)
- **Facebook:** [Frizerski studio alter](https://hr-hr.facebook.com/people/Frizerski-studio-alter/100063686823494/)

## Licenca

Privatni projekt za Studio Alter.
