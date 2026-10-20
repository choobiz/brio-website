// Contact file (vCard 3.0) for a team card. Opening it on a phone offers
// "Add to Contacts" with the photo, so the person ends up in their address
// book instead of a browser tab they'll close.
//
// Prerendered at build (generateStaticParams), which is why reading the photo
// from public/ with fs is safe here: it runs on the build machine, not in a
// serverless function without the public folder.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { COMPANY } from "@/lib/constants";
import { getAllCards, getCard } from "@/lib/team";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCards().map((c) => ({ slug: c.slug }));
}

// vCard text values escape backslash, comma, semicolon and newline.
function esc(v: string): string {
  return v.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
}

// RFC 2426 line folding: 75 octets, continuation lines start with a space.
function fold(line: string): string {
  if (line.length <= 75) return line;
  const parts = [line.slice(0, 75)];
  for (let i = 75; i < line.length; i += 74) parts.push(" " + line.slice(i, i + 74));
  return parts.join("\r\n");
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card) return new Response("Not found", { status: 404 });

  let photo: string | null = null;
  try {
    const buf = await readFile(path.join(process.cwd(), "public", card.photo));
    photo = buf.toString("base64");
  } catch {
    photo = null; // a card without a photo is still a card
  }

  const url = `${COMPANY.website}/card/${card.slug}`;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(card.lastName)};${esc(card.firstName)};;;`,
    `FN:${esc(card.name)}`,
    `ORG:${esc(COMPANY.name)}`,
    `TITLE:${esc(card.title)}`,
    `TEL;TYPE=CELL,VOICE:${card.phoneClean}`,
    `TEL;TYPE=WORK,VOICE:${COMPANY.phoneClean}`,
    `EMAIL;TYPE=INTERNET,WORK:${card.email}`,
    `URL:${COMPANY.website}`,
    ...(card.linkedin ? [`X-SOCIALPROFILE;TYPE=linkedin:${card.linkedin}`] : []),
    `ADR;TYPE=WORK:;;267 Esplanade W;North Vancouver;BC;V7M 1A5;Canada`,
    `NOTE:${esc(`${card.pitch}\nDigital card: ${url}`)}`,
    ...(photo ? [`PHOTO;ENCODING=b;TYPE=JPEG:${photo}`] : []),
    "END:VCARD",
  ];

  const body = lines.map(fold).join("\r\n") + "\r\n";
  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${card.name.replace(/[^A-Za-z0-9]+/g, "-")}.vcf"`,
      "Cache-Control": "public, max-age=300",
    },
  });
}
