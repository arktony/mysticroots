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
    slug: "family",
    name: "Family & Home",
    symbol: "⌂",
    tagline: "Bring peace back under your roof and your children back to themselves.",
    description:
      "A home in turmoil drains everyone in it. Whether a child has been lost to drugs and bad company, relatives are at war, or a couple cannot conceive, family work restores the bonds that hold a household together.",
    image: "/images/family-sunset.jpg",
    spells: [
      {
        slug: "child-addiction-recovery",
        name: "Child Addiction & Drug Recovery",
        short: "Pull a son or daughter back from drugs, alcohol and the people feeding them.",
        intro:
          "Watching a child disappear into drugs or drink is one of the heaviest things a parent can carry. This casting works on the hold the substance and the crowd have over your child, softens their resistance to help, and draws them back toward home and clear thinking. It works alongside treatment and counselling, never instead of them.",
        helpsWith: [
          "A son or daughter using drugs or drinking heavily",
          "Bad company that keeps pulling them back",
          "Refusal to accept help or go to treatment",
          "Theft, lies and violence at home linked to addiction",
        ],
        process: [
          "A private consultation with the parent or guardian",
          "A reading to see what holds the child and who feeds it",
          "A release casting to loosen the grip of the substance and the crowd",
          "A home blessing and guidance on supporting recovery",
        ],
        timeframe: "Parents often report a softening and renewed contact within 2 to 4 weeks.",
        image: "/images/family-hands.jpg",
      },
      {
        slug: "wayward-child",
        name: "Wayward or Rebellious Child",
        short: "Restore respect, obedience and direction in a child who has gone astray.",
        intro:
          "Disrespect, truancy, running away, and dangerous friends can turn a good child into a stranger. This casting calms rebellion, breaks the influence of those leading them astray, and reopens the child's heart to their parents.",
        helpsWith: [
          "Disobedience, disrespect and constant conflict",
          "Skipping school or dropping out",
          "Running away or staying out all night",
          "Friends and partners who are a bad influence",
        ],
        process: [
          "Consultation about the child and what changed",
          "A cleansing of outside influence on the child",
          "A peace and obedience casting for the home",
          "Guidance for the parent on rebuilding the bond",
        ],
        timeframe: "A calmer home is usually noticed within the first two weeks.",
        image: "/images/children-hill.jpg",
      },
      {
        slug: "family-peace",
        name: "Family Peace & Reconciliation",
        short: "End feuds between relatives and bring the family back to one table.",
        intro:
          "Inheritance fights, old grudges, and jealousy between siblings can split a family for a generation. This casting cools anger, exposes the lies that keep people apart, and draws relatives back toward forgiveness.",
        helpsWith: [
          "Siblings or in-laws who no longer speak",
          "Inheritance and land fights within the family",
          "A parent estranged from their children",
          "Constant quarrels in the home",
        ],
        process: [
          "Consultation about the history and who is involved",
          "A peace casting using the names of those at odds",
          "A cleansing of the home or family land",
          "Follow-up as relationships begin to thaw",
        ],
        timeframe: "First conversations often restart within 2 to 3 weeks.",
        image: "/images/family-sunset.jpg",
      },
      {
        slug: "fertility",
        name: "Fertility & Childbearing",
        short: "Open the womb and bless the home with children.",
        intro:
          "For couples who have waited and hoped, fertility work removes spiritual blocks, lifts work done against the union, and blesses the womb and the home. It is cast with care alongside, never in place of, medical advice.",
        helpsWith: [
          "Difficulty conceiving with no medical explanation",
          "Repeated miscarriage",
          "Pressure from family and in-laws",
          "Blessing a pregnancy and safe delivery",
        ],
        process: [
          "A private consultation with one or both partners",
          "A reading to find any block or work against the couple",
          "A fertility blessing with roots and prayer",
          "Guidance and follow-up through the months ahead",
        ],
        timeframe: "Fertility work is renewed each lunar cycle until the blessing comes.",
        image: "/images/candles-glow.jpg",
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
    slug: "justice",
    name: "Justice & Court Cases",
    symbol: "⚖",
    tagline: "Bring truth, favour and fairness to your legal matter.",
    description:
      "A court case can hang over a life for years. Justice work seeks truth and favour: it softens hostile parties, strengthens your position, protects you from the other side's work, and draws a judgement in your favour where justice is on your side.",
    image: "/images/gavel.jpg",
    spells: [
      {
        slug: "win-court-case",
        name: "Win a Court Case",
        short: "Draw favour from judges and officials and a verdict in your favour.",
        intro:
          "Whether you are plaintiff or accused, this casting brings the truth to light, calms hostile witnesses, and draws favour from the judge and officers handling your case. It is strongest when begun well before the hearing.",
        helpsWith: [
          "Civil suits and business disputes",
          "Criminal charges and appeals",
          "Hostile witnesses and false accusations",
          "Delays and adjournments that never end",
        ],
        process: [
          "Consultation about the case, the parties and the dates",
          "A justice casting to bring truth to light",
          "A favour casting for the judge and officials",
          "Protection against the other side's work",
        ],
        timeframe: "Begin as early as possible before the hearing date.",
        image: "/images/gavel.jpg",
      },
      {
        slug: "land-property-dispute",
        name: "Land & Property Disputes",
        short: "Protect what is yours and settle land fights for good.",
        intro:
          "Land grabbing, forged titles and boundary wars with neighbours or relatives can drag on for decades. This casting protects your claim, confuses those acting in bad faith, and draws officials toward a fair and final settlement.",
        helpsWith: [
          "Land grabbing and forged documents",
          "Boundary disputes with neighbours",
          "Inheritance fights over family land",
          "Eviction threats and tenancy disputes",
        ],
        process: [
          "Consultation about the land and the history of the dispute",
          "A protection casting over the property itself",
          "A justice casting for the hearing or negotiation",
          "A seal to keep the matter from reopening",
        ],
        timeframe: "Movement in stalled cases is often seen within a month.",
        image: "/images/candles-black.jpg",
      },
      {
        slug: "bail-release",
        name: "Bail, Release & Dropped Charges",
        short: "Soften the hands that hold a loved one in custody.",
        intro:
          "When someone you love is in custody, every day matters. This casting draws favour from police, prosecutors and magistrates, softens the complainant, and opens the way for bail, release, or charges being dropped.",
        helpsWith: [
          "Securing bail or police bond",
          "A complainant who refuses to settle",
          "Charges that should never have been brought",
          "Protection of a loved one inside",
        ],
        process: [
          "Urgent consultation with the family",
          "A favour casting for the officers and court",
          "A softening casting for the complainant",
          "Protection for the person in custody",
        ],
        timeframe: "Urgent work can begin the same day you reach out.",
        image: "/images/smoke-dark.jpg",
      },
      {
        slug: "custody-divorce",
        name: "Custody & Divorce Settlements",
        short: "Protect your children and your share when a marriage ends in court.",
        intro:
          "Divorce and custody hearings can turn bitter fast. This casting protects your bond with your children, calms a vindictive former partner, and draws fairness from the court on custody, maintenance and property.",
        helpsWith: [
          "Custody and visitation battles",
          "A former partner turning children against you",
          "Unfair division of property",
          "Maintenance disputes",
        ],
        process: [
          "Consultation about the children and the history",
          "A protection casting over your bond with the children",
          "A fairness casting for the hearing",
          "A peace casting to calm the other side",
        ],
        timeframe: "Begin before the first hearing where possible.",
        image: "/images/family-hands.jpg",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    symbol: "✎",
    tagline: "Sharpen the mind and open every door to learning.",
    description:
      "For students, parents and professionals, education work clears mental fog, steadies nerves, and draws favour from examiners, admissions boards and sponsors. It is cast alongside honest study, which it strengthens rather than replaces.",
    image: "/images/old-books.jpg",
    spells: [
      {
        slug: "exam-success",
        name: "Exam Success",
        short: "Sharpen focus and bring favour on test day.",
        intro:
          "For students and professionals facing important exams, this casting clears mental fog, steadies nerves, and draws favour from examiners so that what you have studied comes back to you when it counts.",
        helpsWith: [
          "School and university examinations",
          "Professional certifications",
          "Driving tests and oral exams",
          "Fear and freezing on the day",
        ],
        process: [
          "Consultation about the exam and your worries",
          "A clarity casting to open the mind",
          "A success charm for exam day",
          "Simple practices for calm and focus",
        ],
        timeframe: "Begin a week or more before the exam.",
        image: "/images/book-candle.jpg",
      },
      {
        slug: "focus-memory",
        name: "Focus, Memory & Concentration",
        short: "Quiet a restless mind and make study stick.",
        intro:
          "Some students work hard and still cannot hold what they read. This casting clears distraction and heaviness from the mind, strengthens memory, and restores the discipline to sit and study.",
        helpsWith: [
          "Poor concentration and restlessness",
          "Forgetting what was studied",
          "Loss of motivation and discipline",
          "Children struggling at school",
        ],
        process: [
          "Consultation with the student or parent",
          "A cleansing of distraction and heaviness",
          "A clarity and memory casting",
          "A study charm and daily practices",
        ],
        timeframe: "Improved focus is often noticed within the first two weeks.",
        image: "/images/old-books.jpg",
      },
      {
        slug: "admission-scholarship",
        name: "Admission & Scholarship",
        short: "Win the place, the bursary or the sponsor you need.",
        intro:
          "A good application can still be lost in a pile. This casting draws favour from admissions boards, scholarship committees and sponsors so that your name rises to the top and the door opens.",
        helpsWith: [
          "University and college admissions",
          "Scholarships, bursaries and grants",
          "Sponsors for school fees",
          "Transfers to a better school",
        ],
        process: [
          "Consultation about the application and the deadline",
          "A favour casting for the people deciding",
          "A road-opening casting for the path ahead",
          "Follow-up until the decision comes",
        ],
        timeframe: "Begin before the application is submitted where possible.",
        image: "/images/book-candle.jpg",
      },
      {
        slug: "study-abroad",
        name: "Study Abroad & Student Visa",
        short: "Clear the way to study in the country of your choice.",
        intro:
          "Student visa refusals and sponsorship problems have ended many dreams before they began. This casting draws favour from embassies and universities, clears blocks on your journey, and protects you while you settle far from home.",
        helpsWith: [
          "Student visa interviews and refusals",
          "Proof of funds and sponsorship problems",
          "Admission to overseas universities",
          "Protection and settling abroad",
        ],
        process: [
          "Consultation about the country and the stage you are at",
          "A favour casting for the embassy and university",
          "A road-opening and protection casting for travel",
          "Guidance until you arrive",
        ],
        timeframe: "Begin before the visa interview or application.",
        image: "/images/moon-clouds.jpg",
      },
    ],
  },
  {
    slug: "success",
    name: "Success & Luck",
    symbol: "☾",
    tagline: "Tilt the odds in your favour when it matters.",
    description:
      "Interviews, visa decisions, and games of chance all turn on moments where fortune matters. Success work prepares you, clears obstacles, and brings favour from the people deciding your fate.",
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
      {
        slug: "visa-travel",
        name: "Visa & Travel",
        short: "Open the road to the country and the life you are reaching for.",
        intro:
          "Visa refusals, endless paperwork, and officials who will not look twice at your file can keep you stuck for years. This casting draws favour from embassies and officers, clears blocks on your journey, and protects you on the road.",
        helpsWith: [
          "Repeated visa or permit refusals",
          "Favour at interviews and border posts",
          "Work, study and family reunion applications",
          "Safe travel and a smooth settling in",
        ],
        process: [
          "Consultation about where you are going and what has stood in the way",
          "A road-opening casting for the journey",
          "A favour casting focused on the officials deciding your case",
          "A travel charm and guidance until you arrive",
        ],
        timeframe: "Best begun before you submit the application or attend the interview.",
        image: "/images/moon-clouds.jpg",
      },
      {
        slug: "favour-influence",
        name: "Favour & Influence",
        short: "Be heard, respected and chosen by the people who matter.",
        intro:
          "Some doors open only when the right person decides they like you. This casting draws goodwill from bosses, officials, elders and partners so that your words carry weight and your name is remembered kindly.",
        helpsWith: [
          "Hostile superiors or committees",
          "Negotiations, tenders and approvals",
          "Being overlooked despite your effort",
          "Respect within your family or community",
        ],
        process: [
          "Consultation about the people and the decision at stake",
          "A favour casting using the names involved",
          "A charm to carry into meetings",
          "Guidance on timing and approach",
        ],
        timeframe: "Shifts in how people respond to you are often felt within a week or two.",
        image: "/images/candle-tray.jpg",
      },
    ],
  },
  {
    slug: "healing",
    name: "Healing & Life Sciences",
    symbol: "❧",
    tagline: "Traditional remedies and spiritual healing for body, mind and spirit.",
    description:
      "Alongside spell work, Mystic Roots offers the healing traditions closest to it: herbal remedies prepared the old way, spiritual healing for heaviness that medicine cannot name, the reading of dreams, and guidance from the ancestors. None of it replaces a doctor. All of it works best beside one.",
    image: "/images/herbs-mortar.jpg",
    spells: [
      {
        slug: "herbal-remedies",
        name: "Traditional Herbal Remedies",
        short: "Roots and herbs prepared the way they were handed down.",
        intro:
          "Long before clinics, families turned to the roots, barks and leaves around them. Elder Mafosa prepares traditional remedies for everyday complaints and for restoring strength, vitality and balance. Remedies are offered for wellbeing and are not a substitute for medical diagnosis or treatment. Always continue any treatment your doctor has prescribed.",
        helpsWith: [
          "Low energy, poor sleep and loss of appetite",
          "Stress, tension and restlessness",
          "Strength and vitality for men and women",
          "General cleansing and wellbeing",
        ],
        process: [
          "A consultation about what you are feeling and any treatment you are on",
          "Selection and preparation of the right roots and herbs",
          "Clear instructions on preparation and use",
          "Follow-up to see how you are responding",
        ],
        timeframe: "Most remedies are taken over two to four weeks.",
        image: "/images/herbs-mortar.jpg",
      },
      {
        slug: "spiritual-healing",
        name: "Spiritual Healing & Energy Cleansing",
        short: "Lift the heaviness that medicine cannot name.",
        intro:
          "Some suffering has no test result. A weight on the chest, exhaustion that sleep does not fix, sickness that moves from one part of the body to another. Spiritual healing works on the spirit and the energy around a person to lift what has settled there.",
        helpsWith: [
          "Unexplained illness and exhaustion",
          "Heaviness, sadness and loss of joy",
          "Sickness that follows a shock, loss or attack",
          "Restoring peace after trauma",
        ],
        process: [
          "A consultation about what you feel and when it began",
          "A reading of the spiritual cause",
          "A healing ritual with herbs, water, smoke and prayer",
          "Practices to keep your energy clear",
        ],
        timeframe: "Many feel lighter the same day, with deeper change over the following weeks.",
        image: "/images/herbs-bowls.jpg",
      },
      {
        slug: "dream-interpretation",
        name: "Dream Interpretation",
        short: "Understand what your dreams are trying to tell you.",
        intro:
          "Dreams are one of the oldest ways the spirit and the ancestors speak. Recurring dreams, dreams of the dead, snakes, water, falling or being chased all carry meaning. A reading tells you what yours mean and what, if anything, needs to be done.",
        helpsWith: [
          "Recurring or disturbing dreams",
          "Dreams of departed relatives",
          "Warnings and messages you cannot read",
          "Nightmares that break your sleep",
        ],
        process: [
          "You describe the dream in as much detail as you remember",
          "A reading of its meaning and source",
          "Guidance on what action, if any, to take",
          "A cleansing if the dream points to work against you",
        ],
        timeframe: "Readings are usually returned within a day or two.",
        image: "/images/moon-clouds.jpg",
      },
      {
        slug: "ancestral-reading",
        name: "Ancestral Reading & Guidance",
        short: "Hear what the ancestors need and restore their blessing.",
        intro:
          "When a family's luck turns sour across generations, the cause is often an ancestor left unhonoured or a ritual left undone. An ancestral reading reveals what the lineage asks for and guides you in restoring their protection and blessing.",
        helpsWith: [
          "Misfortune that runs in the family",
          "Dreams and signs from departed relatives",
          "Rituals and ceremonies left unfinished",
          "Reconnecting with your roots and lineage",
        ],
        process: [
          "A consultation about your family's history and troubles",
          "A reading to hear what the ancestors ask",
          "Guidance on the offerings or ceremony required",
          "A blessing to restore their protection",
        ],
        timeframe: "Readings within days, with ceremonies arranged as needed.",
        image: "/images/incense-cones.jpg",
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
  getSpell("family", "child-addiction-recovery")!,
  getSpell("justice", "win-court-case")!,
  getSpell("money", "business-boost")!,
  getSpell("education", "exam-success")!,
].map((s) => ({ ...s, category: categories.find((c) => c.spells.includes(s))! }));
