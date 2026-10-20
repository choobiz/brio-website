// Digital business cards, one entry per person. The card lives at
// /card/<slug>, the contact file at /card/<slug>/contact, and the QR on the
// printed/Wallet card points at /card/<slug>?src=qr. Adding an employee =
// add an entry here + a square photo in public/images/team/.

export interface TeamCard {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  /** Display format. */
  phone: string;
  /** E.164 with "+", for tel: links and the contact file. */
  phoneClean: string;
  /** E.164 WITHOUT "+", the format wa.me expects. Omit if not on WhatsApp. */
  whatsapp?: string;
  email: string;
  linkedin?: string;
  /** Square image under public/. */
  photo: string;
  /** One line under the name: what this person offers the people they meet. */
  pitch: string;
}

const TEAM: TeamCard[] = [
  {
    slug: "amir",
    name: "Amir Omidvar",
    firstName: "Amir",
    lastName: "Omidvar",
    title: "Founder & Principal",
    phone: "(778) 891-1356",
    phoneClean: "+17788911356",
    whatsapp: "17788911356",
    email: "amir@builtbybrio.com",
    linkedin: "https://www.linkedin.com/in/amiromidvar/",
    photo: "/images/team/amir.jpg",
    pitch:
      "Licensed residential builder for developers and owners: multiplexes, laneway homes, custom and spec homes across Metro Vancouver.",
  },
];

export function getCard(slug: string): TeamCard | undefined {
  return TEAM.find((c) => c.slug === slug);
}

export function getAllCards(): TeamCard[] {
  return TEAM;
}
