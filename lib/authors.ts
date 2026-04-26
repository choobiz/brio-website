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
};

export function getAuthor(id: string | undefined): Author {
  if (!id) return AUTHORS.brio;
  return AUTHORS[id] ?? AUTHORS.brio;
}

export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS);
}
