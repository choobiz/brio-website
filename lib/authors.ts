/**
 * Blog author roster. Each post's frontmatter references an author by `id`.
 * Posts with an unknown id fall back to the BRIO Team default rather than 404.
 *
 * Avatars intentionally omitted — components render without them when undefined.
 */

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  email?: string;
  linkedin?: string;
}

const AUTHORS: Record<string, Author> = {
  brio: {
    id: "brio",
    name: "BRIO Construction",
    role: "Vancouver Renovation Contractor",
    bio: "Built by BRIO is a Vancouver-area construction firm known for guaranteed completion dates and transparent fixed-price quotes on residential and commercial renovations.",
  },
  amir: {
    id: "amir",
    name: "Amir Omidvar",
    role: "Founder & Principal",
    bio: "Founded BRIO in 2018 to bring on-time, fixed-price guarantees to Vancouver renovations after watching too many projects spiral on his own home build.",
  },
  sam: {
    id: "sam",
    name: "Sam Hajian",
    role: "Senior Project Manager",
    bio: "Runs the build side of every BRIO project — 12 years on the trades, 8 of them as a permit-savvy project manager who actually answers his phone.",
  },
  mila: {
    id: "mila",
    name: "Mila Chen",
    role: "Lead Designer",
    bio: "Translates inspiration-board ideas into fixed budgets — 9 years designing kitchens, bathrooms, and basement suites that don't look dated in five years.",
  },
};

export function getAuthor(id: string | undefined): Author {
  if (!id) return AUTHORS.brio;
  return AUTHORS[id] ?? AUTHORS.brio;
}

export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS);
}
