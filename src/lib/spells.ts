export type Spell = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  helpsWith: string[];
  process: string[];
  timeframe: string;
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  symbol: string;
  tagline: string;
  description: string;
  image: string;
  spells: Spell[];
};

export const categories: Category[] = [
  {
    slug: "love",
    name: "Love & Relationships",
    symbol: "♡",
    tagline: "Reunite, attract, and protect the bonds that matter most.",
    description:
      "Love is the most requested work at Mystic Roots. Whether a partner has drifted, a marriage is under strain, or you are ready to welcome someone new, each love casting is shaped around your story and cast with care for everyone involved.",
    image: "/images/love-silhouette.jpg",
    spells: [
      {
        slug: "bring-back-lost-lover",
        name: "Bring Back a Lost Lover",
        short: "Rekindle the connection with a partner who has walked away.",
        intro:
          "When someone you love has left, the silence can feel endless. This casting works on the bond you once shared, softening resentment, reopening communication, and drawing the heart back toward reconciliation.",
        helpsWith: [
          "A partner who left suddenly or without explanation",
          "Silence after a breakup or blocked contact",
          "Third-party interference in your relationship",
          "Reconciliation after betrayal or a long separation",
        ],
        process: [
          "A private consultation to understand what happened and what you hope for",
          "A reading to see what stands between you and your partner",
          "A reunion casting with candles, roots, and your partner's name",
          "Guidance on what to do and say in the days that follow",
        ],
        timeframe: "Most clients notice a shift in communication within 3 to 14 days.",
        image: "/images/love-sunset.jpg",
      },
      {
        slug: "attraction-spell",
        name: "Attraction Spell",
        short: "Draw genuine love and attention into your life.",
        intro:
          "An attraction casting clears what has been keeping love at a distance and heightens your natural magnetism. It is not about forcing anyone. It is about becoming impossible to overlook by the right person.",
        helpsWith: [
          "Feeling invisible or overlooked",
          "A long stretch of being single",
          "Attracting a specific person's attention respectfully",
          "Confidence and presence in social settings",
        ],
        process: [
          "Consultation about the kind of partner and relationship you want",
          "A cleansing to remove old heartbreak and blockages",
          "An attraction casting charged under the waxing moon",
          "A small charm or ritual oil to carry the work with you",
        ],
        timeframe: "New attention and opportunities typically appear within 2 to 4 weeks.",
        image: "/images/candles-glow.jpg",
      },
      {
        slug: "stop-divorce-breakup",
        name: "Stop a Divorce or Breakup",
        short: "Calm the storm and give your relationship room to heal.",
        intro:
          "Arguments, distance, and outside pressure can push a couple toward separation even when love is still there. This casting cools conflict, quiets interfering voices, and restores patience and tenderness between you.",
        helpsWith: [
          "Constant arguments and growing distance",
          "A partner talking about leaving or filing papers",
          "In-laws, friends, or rivals turning your partner against you",
          "Rebuilding trust after a rough season",
        ],
        process: [
          "A consultation to hear both the history and the current crisis",
          "A peace casting to calm tempers and soften hearts",
          "A binding of the household against outside interference",
          "Follow-up guidance as things settle",
        ],
        timeframe: "Tension usually eases within the first week, with deeper change over a month.",
        image: "/images/candle-tray.jpg",
      },
      {
        slug: "marriage-commitment",
        name: "Marriage & Commitment",
        short: "Move a hesitant relationship toward lasting commitment.",
        intro:
          "If your partner loves you but cannot seem to take the next step, this casting dissolves fear and hesitation and strengthens their desire for a shared future with you.",
        helpsWith: [
          "A partner who avoids talk of marriage or the future",
          "Long engagements that never reach the altar",
          "Family objections to your union",
          "Strengthening an existing marriage",
        ],
        process: [
          "Consultation about where the relationship stands today",
          "A commitment casting using both of your names",
          "A blessing for your home and future together",
          "Guidance for the conversations ahead",
        ],
        timeframe: "Clients often report a clearer, more committed partner within 2 to 6 weeks.",
        image: "/images/love-silhouette.jpg",
      },
    ],
  },
  {
    slug: "protection",
    name: "Protection & Cleansing",
    symbol: "✦",
    tagline: "Remove what harms you and seal your life against it.",
    description:
      "When misfortune follows you, sleep is troubled, or you sense ill will from someone close, protection work restores peace. These castings cleanse what has attached itself to you and build a shield so it cannot return.",
    image: "/images/sage-dark.jpg",
    spells: [
      {
        slug: "curse-removal",
        name: "Curse & Black Magic Removal",
        short: "Lift curses, hexes, and dark work sent against you.",
        intro:
          "A run of unexplained bad luck, sudden illness, broken relationships, or constant nightmares can be signs that someone has worked against you. This cleansing identifies the source and removes it at the root.",
        helpsWith: [
          "Repeated misfortune with no natural explanation",
          "Nightmares, heaviness, or a sense of being watched",
          "Sudden breakdowns in health, money, or relationships",
          "Generational or family curses",
        ],
        process: [
          "A reading to confirm whether dark work is present and where it came from",
          "A full spiritual cleansing with herbs, water, and fire",
          "Removal and return of the work to its sender",
          "A protective seal so it cannot be repeated",
        ],
        timeframe: "Relief is often felt within days of the cleansing.",
        image: "/images/smoke-dark.jpg",
      },
      {
        slug: "protection-from-enemies",
        name: "Protection from Enemies",
        short: "Shield yourself, your family, and your home from harm.",
        intro:
          "Jealousy and envy are real forces. A protection casting surrounds you and those you love with a barrier that turns away gossip, sabotage, and spiritual attack before it reaches you.",
        helpsWith: [
          "Known enemies or jealous rivals",
          "Protection for children and family members",
          "Safeguarding a home, shop, or vehicle",
          "Ongoing protection for public or prominent people",
        ],
        process: [
          "Consultation about the threats you face",
          "A protection casting for each person or place named",
          "A protective charm or amulet prepared for you",
          "Instructions for renewing the protection",
        ],
        timeframe: "Protection takes effect immediately and is renewed as needed.",
        image: "/images/incense-cones.jpg",
      },
      {
        slug: "spiritual-cleansing",
        name: "Spiritual Cleansing",
        short: "Clear heavy energy and restore your inner balance.",
        intro:
          "Not every burden is a curse. Grief, trauma, and years of stress leave residue that dulls your luck and your joy. A spiritual cleansing washes it away and leaves you lighter, clearer, and open to good things.",
        helpsWith: [
          "Feeling stuck, heavy, or drained",
          "Beginning a new chapter after loss or divorce",
          "Cleansing a new home or workplace",
          "Preparing for an important event or decision",
        ],
        process: [
          "A short consultation about what you are carrying",
          "A herbal and water cleansing ritual",
          "A blessing to invite peace and renewal",
          "Simple practices to keep your energy clear",
        ],
        timeframe: "Most people feel lighter the same day.",
        image: "/images/sage-dark.jpg",
      },
      {
        slug: "reverse-bad-luck",
        name: "Reverse Bad Luck",
        short: "Break a streak of misfortune and open the road ahead.",
        intro:
          "When everything you touch seems to go wrong, the road itself needs to be opened. This casting breaks the pattern of misfortune and clears the way for opportunity to find you again.",
        helpsWith: [
          "Repeated failures despite hard work",
          "Doors closing at the last moment",
          "Accidents, losses, and delays that keep piling up",
          "Starting over after a difficult year",
        ],
        process: [
          "A reading to find where the blockage sits",
          "A road-opening casting with roots and candles",
          "A luck-drawing charm to carry with you",
          "Follow-up guidance on next steps",
        ],
        timeframe: "A change in fortune is usually noticed within 2 to 3 weeks.",
        image: "/images/moon-clouds.jpg",
      },
    ],
  },
  {
    slug: "money",
    name: "Money & Business",
    symbol: "◈",
    tagline: "Attract wealth, customers, and steady prosperity.",
    description:
      "Money work removes the blocks that keep abundance out of reach and draws in customers, opportunities, and steady flow. Whether you run a market stall or a growing company, these castings are tailored to your goals.",
    image: "/images/gold-coins.jpg",
    spells: [
      {
        slug: "wealth-attraction",
        name: "Wealth Attraction",
        short: "Open the channels of abundance in your life.",
        intro:
          "Wealth attraction clears scarcity from your path and calls money toward you through opportunities, gifts, and unexpected openings. It is often combined with a cleansing for lasting effect.",
        helpsWith: [
          "Money that comes in and leaves just as fast",
          "Missed opportunities and bad timing",
          "Family patterns of poverty",
          "Attracting investors, sponsors, or helpers",
        ],
        process: [
          "Consultation about your financial situation and goals",
          "A cleansing of money blockages",
          "A wealth casting charged with roots, coins, and oils",
          "A prosperity charm for your wallet or workplace",
        ],
        timeframe: "New openings tend to appear within 2 to 4 weeks.",
        image: "/images/gold-coins.jpg",
      },
      {
        slug: "business-boost",
        name: "Business Boosting",
        short: "Grow your business and outshine competitors.",
        intro:
          "A business boosting casting draws customers, increases sales, and guards your enterprise against jealous competitors and bad-faith dealings. It is prepared for your specific trade and location.",
        helpsWith: [
          "Slow sales and quiet shops",
          "Competitors who seem to steal your customers",
          "Expanding to a new branch or market",
          "Winning contracts and tenders",
        ],
        process: [
          "Consultation about your business and its challenges",
          "A cleansing of the premises or online presence",
          "A customer-drawing and sales casting",
          "A protective seal against sabotage",
        ],
        timeframe: "Many clients see increased traffic within the first month.",
        image: "/images/crystals-table.jpg",
      },
      {
        slug: "customer-attraction",
        name: "Customer Attraction",
        short: "Fill your shop, salon, bar, or service with clients.",
        intro:
          "Specially prepared for traders and service providers, this casting makes your business the one people remember and return to. It works alongside honest effort to bring steady, loyal customers.",
        helpsWith: [
          "New businesses struggling to get noticed",
          "Loyal customers drifting elsewhere",
          "Seasonal slumps",
          "Online shops and social media sales",
        ],
        process: [
          "Consultation about your trade and customers",
          "A magnet casting tied to your business name",
          "A charm placed at the entrance or till",
          "Guidance on keeping the flow steady",
        ],
        timeframe: "A noticeable lift in customers within 2 to 3 weeks is common.",
        image: "/images/candles-black.jpg",
      },
      {
        slug: "debt-relief",
        name: "Debt Relief",
        short: "Ease the weight of debt and find a way out.",
        intro:
          "Debt is as much a spiritual weight as a financial one. This casting loosens the grip of creditors, brings patience and favourable terms, and attracts the means to settle what is owed.",
        helpsWith: [
          "Pressure from lenders and collectors",
          "Loans that never seem to shrink",
          "Negotiating repayment or forgiveness",
          "Attracting the money needed to clear debt",
        ],
        process: [
          "Consultation about what is owed and to whom",
          "A casting to soften creditors and open negotiation",
          "A wealth-drawing casting to bring settlement money",
          "Practical guidance on next steps",
        ],
        timeframe: "Relief and favourable developments often come within a month.",
        image: "/images/candle-tray.jpg",
      },
    ],
  },
  {
    slug: "success",
    name: "Success & Luck",
    symbol: "☾",
    tagline: "Tilt the odds in your favour when it matters.",
    description:
      "Interviews, court dates, exams, and games of chance all turn on moments where fortune matters. Success work prepares you, clears obstacles, and brings favour from the people deciding your fate.",
    image: "/images/moon-clouds.jpg",
    spells: [
      {
        slug: "job-promotion",
        name: "Job & Promotion",
        short: "Win the interview, the role, or the promotion you deserve.",
        intro:
          "This casting draws favour from employers and decision makers, calms nerves, and removes rivals and blocks standing between you and the position you want.",
        helpsWith: [
          "Interviews and job applications",
          "Overlooked for promotion",
          "Hostile bosses or colleagues",
          "Securing a transfer or work visa",
        ],
        process: [
          "Consultation about the role and the people involved",
          "A favour casting focused on the decision makers",
          "A confidence charm to carry to the interview",
          "Follow-up support until the outcome",
        ],
        timeframe: "Best begun at least a week before the interview or decision.",
        image: "/images/crystal-purple.jpg",
      },
      {
        slug: "court-case",
        name: "Court Case",
        short: "Bring favour and fairness to your legal matter.",
        intro:
          "Court case work seeks truth and favour. It softens hostile parties, strengthens your position, and draws a judgement in your favour where justice is on your side.",
        helpsWith: [
          "Civil and family disputes",
          "Land and property matters",
          "Criminal charges and bail",
          "Immigration and visa hearings",
        ],
        process: [
          "Consultation about the case and the parties",
          "A justice casting to bring truth to light",
          "A favour casting for judges and officials",
          "Protection against the other side's work",
        ],
        timeframe: "Begin as early as possible before the hearing date.",
        image: "/images/candles-black.jpg",
      },
      {
        slug: "exam-success",
        name: "Exam Success",
        short: "Sharpen focus and bring favour on test day.",
        intro:
          "For students and professionals facing important exams, this casting clears mental fog, steadies nerves, and draws favour from examiners.",
        helpsWith: [
          "School and university examinations",
          "Professional certifications",
          "Driving tests and interviews",
          "Concentration and memory",
        ],
        process: [
          "Consultation about the exam and your worries",
          "A clarity casting to open the mind",
          "A success charm for exam day",
          "Simple practices for calm and focus",
        ],
        timeframe: "Begin a week or more before the exam.",
        image: "/images/tarot-palo-santo.jpg",
      },
      {
        slug: "lottery-gambling-luck",
        name: "Lottery & Gambling Luck",
        short: "Draw fortune to your side in games of chance.",
        intro:
          "Luck work heightens your intuition and draws fortune toward you in lotteries, betting, and games of chance. It is cast responsibly, with guidance to play within your means.",
        helpsWith: [
          "Lottery and raffle draws",
          "Sports betting and casino games",
          "Timing and intuition",
          "Breaking a losing streak",
        ],
        process: [
          "Consultation about how and where you play",
          "A luck casting charged under the full moon",
          "A luck charm to carry when you play",
          "Guidance on timing and responsible play",
        ],
        timeframe: "Luck castings are active for one lunar cycle and can be renewed.",
        image: "/images/moon-clouds.jpg",
      },
    ],
  },
];

export const allSpells = categories.flatMap((c) =>
  c.spells.map((s) => ({ ...s, category: c }))
);

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getSpell = (categorySlug: string, slug: string) =>
  getCategory(categorySlug)?.spells.find((s) => s.slug === slug);

export const featuredSpells = [
  getSpell("love", "bring-back-lost-lover")!,
  getSpell("protection", "curse-removal")!,
  getSpell("money", "business-boost")!,
  getSpell("success", "job-promotion")!,
  getSpell("love", "stop-divorce-breakup")!,
  getSpell("protection", "protection-from-enemies")!,
].map((s) => ({ ...s, category: categories.find((c) => c.spells.includes(s))! }));
