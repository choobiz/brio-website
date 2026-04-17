export interface ProjectSection {
  heading: string;
  content: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  type: "Commercial" | "Residential";
  projectType: string;
  year: string;
  description: string;
  sections: ProjectSection[];
  ctaText: string;
  ctaLink: string;
  heroImage?: string;
  images?: string[];
  youtubeId?: string;
  showcaseImage?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "downtown-coffeeshop",
    name: "Downtown Coffeeshop Renovation",
    subtitle:
      "Bringing a refined European café experience to the heart of Downtown Vancouver",
    type: "Commercial",
    projectType: "Commercial Tenant Improvement",
    year: "2024-25",
    showcaseImage: true,
    heroImage: "/images/projects/coffeeshop/hero.jpg",
    images: [
      "/images/projects/coffeeshop/img-1.jpg",
      "/images/projects/coffeeshop/img-2.jpg",
      "/images/projects/coffeeshop/img-3.jpg",
      "/images/projects/coffeeshop/img-4.jpg",
      "/images/projects/coffeeshop/img-5.jpg",
      "/images/projects/coffeeshop/img-6.jpg",
      "/images/projects/coffeeshop/img-7.jpg",
    ],
    description:
      "Bringing a refined European café experience to the heart of Downtown Vancouver, this project involved the complete interior fit-out of PAUL Le Café, a globally recognized French bakery and coffee brand. Located in the lobby of a prominent commercial tower, the renovation focused on delivering a sleek, elegant café that blends hospitality, efficiency, and sophisticated design.\n\nFrom concept to completion, this space was designed to reflect PAUL's premium identity while accommodating the functional requirements of a high-traffic service counter and casual seating area. The result is a modern, inviting café that balances brand character with contemporary West Coast aesthetics.",
    sections: [
      {
        heading: "Design Intent",
        content:
          "The design embraced PAUL's Parisian roots with a minimalist-modern twist. The goal was to create a bright, welcoming environment that would stand out within a corporate setting, drawing passersby with its warmth, elegance, and simplicity. The clean lines and well-defined zones reinforce the brand's refined image while ensuring clarity of movement for both staff and customers.",
      },
      {
        heading: "Materials & Finishes",
        content:
          "Premium materials were selected for their durability and aesthetic appeal. Matte black tile with a subtle geometric pattern serves as the backdrop to the coffee station, adding depth without overwhelming the space. Warm walnut wood millwork is paired with brushed aluminum panels and a sleek black stone countertop, grounding the design in quality and timelessness. Rose-gold ceiling accents introduce a soft contrast, lending warmth and character to the high-volume ceiling area.",
      },
      {
        heading: "Lighting & Seating",
        content:
          "Linear pendant fixtures add a strong horizontal rhythm, drawing the eye toward the counter and anchoring the space. Integrated ambient lighting ensures the café remains inviting throughout the day. The seating area features marble-topped tables with plush leather chairs in a caramel hue, offering both comfort and style for guests who choose to linger.",
      },
      {
        heading: "Functional Enhancements",
        content:
          "The back-of-house layout was optimized for high-efficiency workflows, allowing staff to move seamlessly between beverage prep, pastry service, and POS. A compact yet fully equipped barista station integrates grinders, espresso machines, blenders, and refrigeration without clutter. The front counter also includes a temperature-controlled pastry display and retail shelving for quick grab-and-go access.",
      },
      {
        heading: "Brand Integration",
        content:
          "Branding elements were woven subtly yet clearly into the space. The PAUL Le Café name is prominently displayed above the counter in illuminated 3D signage, mirroring the wall-mounted interior version for consistency. Digital menu screens and branded cup displays reinforce the identity without visual noise, ensuring a harmonious balance between function and form.",
      },
    ],
    ctaText: "Looking to reimagine your commercial space?",
    ctaLink: "/commercial-renovations#get-in-touch",
    youtubeId: "L4tiI0Xdgss",
  },
  {
    slug: "richmond-dental",
    name: "Richmond Dental Office Renovation",
    subtitle:
      "Where Comfort Meets Commerce — A Hybrid Office Built for Flexibility",
    type: "Commercial",
    projectType: "Commercial Tenant Improvement",
    year: "2024-25",
    heroImage: "/images/projects/dental/hero.jpg",
    images: [
      "/images/projects/dental/img-1.jpg",
      "/images/projects/dental/img-2.jpg",
      "/images/projects/dental/img-3.jpg",
      "/images/projects/dental/img-4.jpg",
      "/images/projects/dental/img-5.jpg",
      "/images/projects/dental/img-6.jpg",
      "/images/projects/dental/img-7.jpg",
    ],
    description:
      'Some spaces are designed for function. Others are designed to feel like home. But what if you could have both?\n\nThat was the challenge presented to us when a fast-growing dental product company approached BRIO Construction with a unique request. They needed a new tenant space—yes, an office for their team—but it had to be more than that. It had to feel warm, welcoming, and adaptable… almost like a living space.\n\nFrom day one, we knew this wasn\'t going to be your standard commercial tenant improvement.',
    sections: [
      {
        heading: "Listening First, Designing Smart",
        content:
          'We kicked things off with a series of collaborative planning sessions—diving deep into the client\'s vision, workflow, and unique operational needs. This wasn\'t just about desks and walls. It was about creating a space where team members felt relaxed and focused, where meetings felt less like boardrooms and more like conversations around the kitchen table.\n\nWe worked hand-in-hand with the client to map out what functionality looked like for them, and how to deliver it without losing the sense of comfort and warmth they were looking for.',
      },
      {
        heading: "Custom Work, Tight Timelines, Big Impact",
        content:
          "This project involved a number of custom elements, from tailored cabinetry and feature lighting to multi-use breakout areas that could double as lounge space or client-facing zones. Blending commercial-grade durability with residential-style touches required creativity—and a close eye on quality and cost.\n\nDespite these complexities, our team delivered the build on time and remarkably close to budget. That's the BRIO difference: thoughtful planning, hands-on project management, and a commitment to doing things the right way, not the easy way.",
      },
      {
        heading: "The Final Result: A Space That Works Like Home",
        content:
          "What stands today is something truly special: a hybrid office that feels like no other. Sleek, calm, and purposefully laid out, the space flows naturally—offering dedicated work areas, soft seating, and touches of home throughout. It's a place where the team can brainstorm, host clients, or simply enjoy their workday without the stiffness of a typical office environment.\n\nOur client couldn't be happier—and neither could we.",
      },
    ],
    ctaText: "Looking to reimagine your commercial space?",
    ctaLink: "/commercial-renovations#get-in-touch",
    youtubeId: "9mYdrAYki08",
  },
  {
    slug: "north-van-brokerage",
    name: "North Van Brokerage Renovation",
    subtitle:
      "From Optics to Opportunity — A Real Estate Office Transformation in North Vancouver",
    type: "Commercial",
    projectType: "Commercial Tenant Improvement",
    year: "2024-25",
    heroImage: "/images/projects/brokerage/hero.jpg",
    images: [
      "/images/projects/brokerage/img-1.jpg",
      "/images/projects/brokerage/img-2.jpg",
      "/images/projects/brokerage/img-3.jpg",
      "/images/projects/brokerage/img-4.jpg",
      "/images/projects/brokerage/img-5.jpg",
      "/images/projects/brokerage/img-6.jpg",
    ],
    description:
      "In one of North Vancouver's busiest intersections, a once dated optical store from the 1990s has found a vibrant new purpose. What was once a quiet retail space has been reimagined into a bright, modern real estate brokerage office—brought to life by the vision of our client and the BRIO Construction team.\n\nThe journey began with a simple but exciting challenge: our client, the owner of a successful nearby brokerage, had outgrown her previous office. She had found the perfect new location—a 2,000 sq ft ground-floor corner unit with great visibility and natural light—but the interior needed a total reinvention.",
    sections: [
      {
        heading: "Smart Planning, Seamless Execution",
        content:
          "During our design and consultation phase, collaboration was key. We worked closely with the client to develop a plan that was both beautiful and cost-effective. Every design decision—from layout to finishes—was made with function and flow in mind.\n\nOne of the major considerations was the location itself. Positioned on a busy corner, construction logistics had to be tightly managed to minimize disruption.",
      },
      {
        heading: "A Space That Works as Hard as the Team",
        content:
          "As the renovation unfolded, the old optical layout was stripped away, making room for a flexible, modern office concept. Polished white floors and exposed ceilings give the space a bright, expansive feel. A mix of private meeting spaces and open desks support both collaboration and focus, while carefully layered lighting adds warmth and balance.\n\nTouches of red—a nod to the brokerage's branding—pop against the neutral palette, and lush greenery and custom millwork add texture and life.",
      },
      {
        heading: "From Vision to Reality",
        content:
          "This renovation was a true collaboration—driven by a passionate business owner and supported by a team that understood her goals. At BRIO, we pride ourselves on delivering more than just builds. We deliver environments that help businesses grow, teams thrive, and clients feel at ease.",
      },
    ],
    ctaText: "Thinking of reimagining your workspace?",
    ctaLink: "/commercial-renovations#get-in-touch",
    youtubeId: "_s-pV7NH_X8",
  },
  {
    slug: "trinity-duplex",
    name: "Trinity Duplex",
    subtitle:
      "From Vision to Value — Building a Profitable Duplex with Purpose",
    type: "Residential",
    projectType: "New Duplex Construction",
    year: "2022-24",
    heroImage: "/images/projects/trinity/hero.jpg",
    images: [
      "/images/projects/trinity/img-1.jpg",
      "/images/projects/trinity/img-2.jpg",
      "/images/projects/trinity/img-3.jpg",
      "/images/projects/trinity/img-4.jpg",
      "/images/projects/trinity/img-5.jpg",
    ],
    description:
      "Every great build starts with a dream. But when that dream is backed by a smart strategy and a trusted construction partner, it becomes something more—a success story.\n\nThat's exactly what happened when our client came to BRIO Construction with a clear goal: to make a profitable real estate investment while being hands-on throughout the journey.",
    sections: [
      {
        heading: "From Concept to Concrete",
        content:
          "Our work began well before shovels hit the ground. We helped the client identify the right piece of land—one that offered opportunity, flexibility, and long-term upside. From there, we rolled up our sleeves and got to work on feasibility studies, carefully analyzing zoning, density options, and design potential.\n\nThrough collaborative planning, we unlocked an even bigger opportunity by guiding the client through a rezoning process that allowed for a high-quality duplex—maximizing the site's potential without overextending the budget.",
      },
      {
        heading: "Navigating Permits, Streamlining Progress",
        content:
          "Once the vision was solidified, we shifted into execution mode. Permitting can be a long and complex process, but our in-house team made it feel seamless—liaising with municipal staff, staying ahead of paperwork, and making sure all compliance boxes were checked before construction began.\n\nOn site, our crew kept things moving like clockwork. Thanks to a detailed schedule and an open line of communication with the client, we delivered the project on time and under budget—without cutting corners on quality.",
      },
      {
        heading: "The Finished Product: Two Homes, One Big Win",
        content:
          "The result was a stunning, modern duplex that checked all the right boxes: smart layout, quality materials, curb appeal, and lasting value. But more than that, it was a space built with intention—every square foot designed to appeal to future buyers.\n\nAnd the market responded. The property sold within the expected timeframe, exceeding the client's projected return on investment.",
      },
    ],
    ctaText: "Thinking about your own investment build?",
    ctaLink: "/spec-home-construction#get-in-touch",
  },
  {
    slug: "east-broadway-condo",
    name: "East Broadway Condo",
    subtitle:
      "First Home, First Dream — A Thoughtful Condo Renovation in Vancouver",
    type: "Residential",
    projectType: "Condo Renovation",
    year: "2022",
    heroImage: "/images/projects/east-broadway/hero.jpg",
    images: [
      "/images/projects/east-broadway/img-1.jpg",
      "/images/projects/east-broadway/img-2.jpg",
      "/images/projects/east-broadway/img-3.jpg",
      "/images/projects/east-broadway/img-4.jpg",
      "/images/projects/east-broadway/img-5.jpg",
    ],
    description:
      "When you're stepping into your first home, every detail matters. You're not just buying walls and windows—you're creating a space where life happens.\n\nTheir goal was clear: to transform a standard condo into something that felt like theirs. But like many first-time buyers, they were working with a strict budget and wanted to make smart decisions that didn't sacrifice style or quality.",
    sections: [
      {
        heading: "Listening First, Planning Smart",
        content:
          'The process started with a few honest conversations. What did "home" look like to them? What were their priorities—and what could they live without for now?\n\nWe walked through the space together, pointing out cost-saving opportunities and recommending materials that offered the right mix of durability, style, and price. We focused on high-impact updates—the kind of changes that instantly elevate a space without blowing the budget.',
      },
      {
        heading: "Tackling Challenges with Creative Solutions",
        content:
          "Like many condo renovations, this one came with a few unique challenges: tight timelines, strata restrictions, and fixed spatial limits. But where others might see limitations, we saw opportunities.\n\nOur team found clever ways to maximize square footage—reconfiguring cabinetry, selecting low-profile fixtures, and optimizing storage without clutter.",
      },
      {
        heading: "The Reveal: A Space That Feels Like Home",
        content:
          "When we handed over the keys, the reaction said it all. The space felt fresh, modern, and most of all, personal. Friends and family who visited couldn't believe the transformation—and more than one asked for our number.",
      },
    ],
    ctaText: "Ready to bring your vision to life—without breaking the bank?",
    ctaLink: "/home-renovations#get-in-touch",
  },
  {
    slug: "lolo-duplex",
    name: "LoLo Duplex",
    subtitle:
      "A Home for Today, Security for Tomorrow — Building a Custom Duplex in North Vancouver",
    type: "Residential",
    projectType: "New Duplex Construction",
    year: "2021-22",
    heroImage: "/images/projects/lolo/hero.jpg",
    images: [
      "/images/projects/lolo/img-1.jpg",
      "/images/projects/lolo/img-2.jpg",
      "/images/projects/lolo/img-3.jpg",
      "/images/projects/lolo/img-4.jpg",
      "/images/projects/lolo/img-5.jpg",
    ],
    description:
      "Every now and then, a project comes along that perfectly captures why we do what we do. This North Vancouver duplex was one of those stories.\n\nOur client, a longtime homeowner, had a vision: to breathe new life into their aging property by redeveloping it into something modern, functional, and future-focused. The dream? A custom-built duplex—one unit designed just for them, and the other as a rental suite to generate steady income.",
    sections: [
      {
        heading: "From Vision to Blueprint",
        content:
          "From day one, this was a partnership. We worked closely with the homeowner to understand their goals—everything from their preferred layout and finishes to how the rental unit should be optimized for long-term tenants.\n\nThen, we got to work on the heavy lifting behind the scenes: securing approvals, rezoning, and navigating the permit process—all while keeping the homeowner informed every step of the way.",
      },
      {
        heading: "Building with Precision and Purpose",
        content:
          "Once permits were in hand, the real transformation began. Our crews brought their expertise and attention to detail to every phase of construction—pouring the foundation, framing, roofing, and crafting a beautiful final product inside and out.\n\nThroughout the process, we kept things on track, on budget, and on schedule—coordinating trades, solving surprises before they became problems, and always prioritizing quality.",
      },
      {
        heading: "The Result: Two Beautiful Homes, One Bright Future",
        content:
          "Today, our client is happily settled in their custom unit—built just the way they imagined—while the second half of the duplex brings in reliable rental income every month. It's more than just a new home; it's a lifestyle upgrade and a long-term investment rolled into one.",
      },
    ],
    ctaText: "Have a property with potential?",
    ctaLink: "/custom-home-construction#get-in-touch",
  },
  {
    slug: "jefferson-residence",
    name: "Jefferson Residence",
    subtitle:
      "A Thoughtful Home Renovation That Turned a House Into a Home",
    type: "Residential",
    projectType: "Home Renovation",
    year: "2021",
    heroImage: "/images/projects/jefferson/hero.jpg",
    images: [
      "/images/projects/jefferson/img-1.jpg",
      "/images/projects/jefferson/img-2.jpg",
      "/images/projects/jefferson/img-3.jpg",
      "/images/projects/jefferson/img-4.jpg",
      "/images/projects/jefferson/img-5.jpg",
    ],
    description:
      "Every great renovation begins with a vision—and this one started with a simple goal: to turn a newly purchased house into a true reflection of the people who live in it.\n\nOur clients came to BRIO Construction with a clear desire for more than just updates. They wanted a home that felt modern and functional, yes—but also warm, personal, and suited to their lifestyle.",
    sections: [
      {
        heading: "From Wish List to Game Plan",
        content:
          'We began the process with a series of detailed consultations, sitting down to understand what "home" meant for them. Were they entertainers? Did they need space for work-from-home life? How should the space flow, and what did modern design really mean to them?\n\nThrough thoughtful conversations and careful planning, we crafted a personalized renovation plan—balancing their aesthetic preferences with functional needs.',
      },
      {
        heading: "Building With Precision",
        content:
          "Once we had a shared vision, the BRIO team got to work—prioritizing quality craftsmanship and efficiency every step of the way. Renovations always come with surprises, but thanks to clear communication and detailed planning, the project stayed on schedule and within budget.\n\nOur tradespeople brought a high level of skill to every detail, from millwork to tiling, ensuring the finished space didn't just look beautiful—it felt beautiful to live in.",
      },
      {
        heading: "The Final Reveal",
        content:
          'Walking through the finished home with our clients was one of those moments that reminds us why we do what we do. Their reaction said it all: joy, relief, excitement—and most importantly, that feeling of "this is our place now."',
      },
    ],
    ctaText: "Have a renovation dream of your own?",
    ctaLink: "/home-renovations#get-in-touch",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
