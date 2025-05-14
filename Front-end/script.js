const defaultCards = [
  {
    Meaning: "New beginnings, adventure, spontaneity",
    Reversed: "Hesitation, recklessness, fear of change",
    Astrological: "Uranus",
    Element: "Air",
    Name: "The Fool",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/the-fool-tarot-card.jpg",
  },
  {
    Meaning: "Manifestation, resourcefulness, divine connection",
    Reversed: "Deception, manipulation, wasted potential",
    Astrological: "Mercury",
    Element: "Air",
    Chakra: "Solar Plexus",
    Name: "The Magician",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/the-magician-tarot-card.jpg",
  },
  {
    Meaning: "Intuition, mystery, spiritual insight",
    Reversed: "Secrets, confusion, blocked intuition",
    Astrological: "Moon",
    Element: "Water",
    Chakra: "Third Eye",
    Name: "The High Priestess",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/the-high-priestess-tarot-card.jpg",
  },
  {
    Meaning: "Fertility, abundance, nurturing energy",
    Reversed: "Dependence, creative block, neglect",
    Astrological: "Venus",
    Element: "Fire",
    Chakra: "Root",
    Name: "The Empress",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2021/07/the-empress-tarot-card.jpg",
  },
  {
    Meaning: "Leadership, stability, protection",
    Reversed: "Tyranny, lack of control",
    Astrological: "Aries",
    Element: "Fire",
    Chakra: "Root",
    Name: "The Emperor",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Emperor-tarot-card.jpg",
  },
  {
    Meaning: "Spiritual guidance, tradition, higher learning",
    Reversed:
      "Rebellion, challenging authority, breaking free from outdated beliefs",
    Astrological: "Taurus",
    Element: "Earth",
    Chakra: "Crown",
    Name: "The Hierophant",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Hierophant-tarot-card.jpg",
  },
  {
    Meaning: "Love, relationships, major life choices",
    Reversed: "Disharmony, imbalance, misaligned values",
    Astrological: "Gemini",
    Element: "Air",
    Chakra: "Heart",
    Name: "The Lovers",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Lovers-tarot-card.jpg",
  },
  {
    Meaning: "Success, control, determination",
    Reversed: "Lack of direction, self-doubt, recklessness",
    Astrological: "Cancer",
    Element: "Water",
    Chakra: "Solar Plexus",
    Name: "The Chariot",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Chariot-tarot-card.jpg",
  },
  {
    Meaning: "Courage, confidence, inner strength",
    Reversed: "Self-doubt, weakness, fear",
    Astrological: "Leo",
    Element: "Fire",
    Chakra: "Heart",
    Name: "Strength",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Strength-tarot-card.jpg",
  },
  {
    Meaning: "Wisdom, solitude, introspection",
    Reversed: "Isolation, loneliness, disconnection",
    Astrological: "Virgo",
    Element: "Earth",
    Chakra: "Crown",
    Name: "The Hermit",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Hermit-tarot-card.jpg",
  },
  {
    Meaning: "Luck, destiny, turning points",
    Reversed: "Bad luck, resistance to change, setbacks",
    Astrological: "Jupiter",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Wheel of Fortune",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Wheel-of-Fortune-tarot-card.jpg",
  },
  {
    Meaning: "Truth, fairness, law, balance",
    Reversed: "Dishonesty, unfairness, lack of accountability&nbsp;",
    Astrological: "Libra",
    Element: "Air",
    Chakra: "Heart",
    Name: "Justice",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Justice-tarot-card.jpg",
  },
  {
    Meaning: "Letting go, surrender, new perspective",
    Reversed: "Resistance, stagnation, unwillingness to change",
    Astrological: "Neptune",
    Element: "Water",
    Chakra: "Crown",
    Name: "The Hanged Man",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Hanged-Man-tarot-card.jpg",
  },
  {
    Meaning: "Transformation, rebirth, letting go",
    Reversed: "Resistance to change, stagnation, fear",
    Astrological: "Scorpio",
    Element: "Water",
    Chakra: "Sacral",
    Name: "Death",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Death-tarot-card.jpg",
  },
  {
    Meaning: "Balance, patience, moderation",
    Reversed: "Imbalance, excess, lack of self-control",
    Astrological: "Sagittarius",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Temperance",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Temperance-tarot-card.jpg",
  },
  {
    Meaning: "Temptation, attachment, self-destruction",
    Reversed: "Breaking free, releasing control, awareness",
    Astrological: "Capricorn",
    Element: "Earth",
    Chakra: "Root",
    Name: "Devil",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Devil-tarot-card.jpg",
  },
  {
    Meaning: "Sudden change, transformation",
    Reversed: "Fear of change, avoiding disaster, resistance",
    Astrological: "Mars",
    Element: "Fire",
    Chakra: "Root",
    Name: "The Tower",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Tower-tarot-card.jpg",
  },
  {
    Meaning: "Hope, healing, inspiration",
    Reversed: "Lack of faith, despair, self-doubt",
    Astrological: "Aquarius",
    Element: "Air",
    Chakra: "Crown",
    Name: "The Star",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Star-tarot-card.jpg",
  },
  {
    Meaning: "Mystery, dreams, intuition",
    Reversed: "Fear, anxiety, deception",
    Astrological: "Pisces",
    Element: "Water",
    Chakra: "Third Eye",
    Name: "The Moon",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Moon-tarot-card.jpg",
  },
  {
    Meaning: "Joy, success, enlightenment",
    Reversed: "Ego, unrealistic expectations, sadness",
    Astrological: "Sun",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "The Sun",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Sun-tarot-card.jpg",
  },
  {
    Meaning: "Self-reflection, renewal, clarity",
    Reversed: "Self-doubt, stagnation, refusing change",
    Astrological: "Pluto",
    Element: "Fire",
    Chakra: "Crown",
    Name: "Judgement",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Judgement-tarot-card.jpg",
  },
  {
    Meaning: "Success, fulfillment, new possibilities",
    Reversed: "Incompletion, delays, lack of closure",
    Astrological: "Saturn",
    Element: "Earth",
    Chakra: "Root",
    Name: "The World",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-World-tarot-card.jpg",
  },
  {
    Meaning: "New love, emotional fulfillment, creative inspiration",
    Reversed: "Blocked emotions, heartbreak, missed opportunities",
    Astrological: "Water signs (Cancer, Scorpio, Pisces)",
    Element: "Water",
    Chakra: "Heart",
    Name: "Ace of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ace-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Harmony, balance, romantic partnerships",
    Reversed: "Imbalance, one-sided relationships, disharmony",
    Astrological: "Venus in Cance",
    Element: "Water",
    Chakra: "Heart",
    Name: "Two of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Two-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Celebration, friendship, social gatherings",
    Reversed: "Gossip, overindulgence, isolation",
    Astrological: "Mercury in Cancer",
    Element: "Water",
    Chakra: "Heart",
    Name: "Three of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Cups-tarot-cards.jpg",
  },
  {
    Meaning: "Contemplation, boredom, missed opportunities",
    Reversed: "Awareness, seizing opportunities, newfound motivation",
    Astrological: "Moon in Cancer",
    Element: "Water",
    Chakra: "Heart",
    Name: "Four of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Four-of-Cups-tarot-cards.jpg",
  },
  {
    Meaning: "Loss, regret, disappointment",
    Reversed: "Acceptance, emotional healing, moving forward",
    Astrological: "Mars in Scorpio",
    Element: "Water",
    Chakra: "Heart",
    Name: "Five of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Five-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Nostalgia, childhood memories, kindness",
    Reversed: "Stuck in the past, unrealistic expectations",
    Astrological: "Sun in Scorpio",
    Element: "Water",
    Name: "Six of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Choices, imagination, wishful thinking",
    Reversed: "Clarity, reality check, avoiding illusions",
    Astrological: "Venus in Scorpio",
    Element: "Water",
    Chakra: "Third Eye",
    Name: "Seven of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Walking away, seeking deeper meaning, transition",
    Reversed: "Fear of change, stagnation, refusing to move on",
    Astrological: "Saturn in Pisces",
    Element: "Water",
    Chakra: "Sacral",
    Name: "Eight of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Wish fulfillment, satisfaction, emotional abundance",
    Reversed: "Unfulfilled desires, materialism, lack of inner happiness",
    Astrological: "Jupiter in Pisces",
    Element: "Water",
    Chakra: "Solar Plexus",
    Name: "Nine of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Happiness, family harmony, emotional fulfillment",
    Reversed: "Misalignment, broken relationships, unrealistic expectations",
    Astrological: "Mars in Pisces",
    Element: "Water",
    Chakra: "Heart",
    Name: "Ten of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Creativity, emotional curiosity, new love",
    Reversed: "Immaturity, emotional insecurity, creative block",
    Astrological: "Water signs (Cancer, Scorpio, Pisces)",
    Element: "Water",
    Chakra: "Heart",
    Name: "Page of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Romance, charm, following one’s heart",
    Reversed: "Moodiness, deception, unrealistic expectations",
    Astrological: "Pisces",
    Element: "Water",
    Chakra: "Heart",
    Name: "Knight of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knights-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Compassion, intuition, emotional depth",
    Reversed: "Emotional overwhelm, sensitivity, co-dependency",
    Astrological: "Cancer",
    Element: "Water",
    Name: "Queen of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "Emotional balance, wisdom, leadership",
    Reversed: "Emotional manipulation, mood swings, repression",
    Astrological: "Scorpio",
    Element: "Water",
    Chakra: "Heart",
    Name: "King of Cups",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Cups-tarot-card.jpg",
  },
  {
    Meaning: "New financial opportunities, career advancements, prosperity",
    Reversed: "Missed chances, instability, financial setbacks",
    Astrological: "Earth signs (Taurus, Virgo, Capricorn)",
    Element: "Earth",
    Chakra: "Root",
    Name: "Ace of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Ace-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Balance, adaptability, managing multiple responsibilities",
    Reversed: "Overwhelmed, financial stress, disorganization",
    Astrological: "Jupiter in Capricorn",
    Element: "Earth",
    Name: "Two of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Two-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Teamwork, collaboration, skill-building",
    Reversed: "Lack of teamwork, poor planning, miscommunication",
    Astrological: "Mars in Capricorn",
    Element: "Earth",
    Chakra: "Solar Plexus",
    Name: "Three of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Financial stability, security, saving money",
    Reversed: "Greed, materialism, fear of loss",
    Astrological: "Sun in Capricorn",
    Element: "Earth",
    Chakra: "Root",
    Name: "Four of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Four-of-Pentacles-tarot-card-2.jpg",
  },
  {
    Meaning: "Financial loss, hardship, feeling left out",
    Reversed: "Recovery, hope, overcoming struggles",
    Astrological: "Mercury in Taurus",
    Element: "Earth",
    Name: "Five of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Five-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Generosity, giving and receiving, financial balance",
    Reversed: "Debt, power imbalance, strings attached",
    Astrological: "Moon in Taurus",
    Element: "Earth",
    Chakra: "Heart",
    Name: "Six of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Long-term investments, patience, steady progress",
    Reversed: "Impatience, lack of rewards, wasted effort",
    Astrological: "Saturn in Taurus",
    Element: "Earth",
    Chakra: "Root",
    Name: "Seven of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Hard work, skill development, dedication",
    Reversed: "Lack of motivation, cutting corners, stagnation",
    Astrological: "Sun in Virgo",
    Element: "Earth",
    Chakra: "Solar Plexus",
    Name: "Eight of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Financial independence, luxury, self-sufficiency",
    Reversed: "Material dependence, financial insecurity, setbacks",
    Astrological: "Venus in Virgo",
    Element: "Earth",
    Chakra: "Solar Plexus",
    Name: "Nine of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Wealth, family security, long-term success",
    Reversed: "Financial instability, loss, lack of support",
    Astrological: "Mercury in Virgo",
    Element: "Earth",
    Chakra: "Root",
    Name: "Ten of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Ambition, new career opportunities, study and learning",
    Reversed: "Lack of focus, procrastination, missed chances",
    Astrological: "Earth signs (Taurus, Virgo, Capricorn)",
    Element: "Earth",
    Name: "Page of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Hard work, perseverance, responsibility",
    Reversed: "Stubbornness, lack of ambition, feeling stuck",
    Astrological: "Virgo",
    Element: "Earth",
    Chakra: "Root",
    Name: "Knight of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knight-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Financial wisdom, nurturing, stability",
    Reversed: "Financial dependence, work-life imbalance, insecurity",
    Astrological: "Capricorn",
    Element: "Earth",
    Name: "Queen of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Leadership, financial mastery, wealth",
    Reversed: "Greed, materialism, financial mismanagement",
    Astrological: "Taurus",
    Element: "Earth",
    Chakra: "Root",
    Name: "King of Pentacles",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Pentacles-tarot-card.jpg",
  },
  {
    Meaning: "Mental clarity, truth, breakthroughs, new ideas",
    Reversed: "Confusion, dishonesty, lack of direction",
    Astrological: "Air signs (Gemini, Libra, Aquarius)",
    Element: "Air",
    Chakra: "Third Eye",
    Name: "Ace of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Ace-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Indecision, difficult choices, needing balance",
    Reversed: "Avoidance, delays, refusal to see the truth",
    Astrological: "Moon in Libra",
    Element: "Air",
    Chakra: "Third Eye",
    Name: "Two of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Two-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Heartbreak, sorrow, emotional pain",
    Reversed: "Emotional healing, forgiveness, recovery",
    Astrological: "Saturn in Libra",
    Element: "Air",
    Chakra: "Heart",
    Name: "Three of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Rest, recovery, contemplation, mental peace",
    Reversed: "Burnout, anxiety, restlessness",
    Astrological: "Jupiter in Libra",
    Element: "Air",
    Chakra: "Third Eye",
    Name: "Four of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Four-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Conflict, betrayal, competition, self-interest",
    Reversed: "Resolution, compromise, learning from past mistakes",
    Astrological: "Venus in Aquarius",
    Element: "Air",
    Chakra: "Solar Plexus",
    Name: "Five of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Five-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Moving forward, transition, leaving hardships behind",
    Reversed: "Resistance to change, emotional baggage",
    Astrological: "Mercury in Aquarius",
    Element: "Air",
    Chakra: "Throat",
    Name: "Six of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Deception, strategy, secrecy, trickery",
    Reversed: "Exposure of lies, making amends, self-deception",
    Astrological: "Moon in Aquarius",
    Element: "Air",
    Chakra: "Throat",
    Name: "Seven of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Feeling trapped, limitations, mental restrictions",
    Reversed: "Empowerment, breaking free, regaining control",
    Astrological: "Jupiter in Gemini",
    Element: "Air",
    Chakra: "Third Eye",
    Name: "Eight of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Anxiety, worry, sleepless nights, overthinking",
    Reversed: "Healing, relief, releasing fears",
    Astrological: "Mars in Gemini",
    Element: "Air",
    Chakra: "Third Eye",
    Name: "Nine of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Painful endings, betrayal, deep transformation",
    Reversed: "Recovery, new beginnings, overcoming hardships",
    Astrological: "Sun in Gemini",
    Element: "Air",
    Chakra: "Root",
    Name: "Ten of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Curiosity, intelligence, seeking truth",
    Reversed: "Gossip, deception, immature communication",
    Astrological: "Air signs (Gemini, Libra, Aquarius)",
    Element: "Air",
    Chakra: "Throat",
    Name: "Page of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Ambition, assertiveness, pursuing truth",
    Reversed: "Impulsiveness, recklessness, aggression",
    Astrological: "Gemini",
    Element: "Air",
    Chakra: "Solar Plexus",
    Name: "Knight of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knight-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Wisdom, independence, strong intellect",
    Reversed: "Coldness, judgment, emotional detachment",
    Astrological: "Libra",
    Element: "Air",
    Chakra: "Third Eye",
    Name: "Queen of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "Leadership, strategic thinking, authority",
    Reversed: "Corruption, manipulation, misuse of power",
    Astrological: "Aquarius",
    Element: "Air",
    Chakra: "Throat",
    Name: "King of Swords",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Swords-tarot-card.jpg",
  },
  {
    Meaning: "New beginnings, inspiration, creative spark",
    Reversed: "Delays, creative blocks, lack of motivation",
    Astrological: "Fire signs (Aries, Leo, Sagittarius)",
    Element: "Fire",
    Chakra: "Sacral",
    Name: "Ace of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Ace-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Planning, vision, making bold choices",
    Reversed: "Fear of change, lack of direction, missed opportunities",
    Astrological: "Mars in Aries",
    Element: "Fire",
    Name: "Two of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Two-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Expansion, progress, waiting for results",
    Reversed: "Delays, frustration, lack of foresight",
    Astrological: "Sun in Aries",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Three of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Celebration, harmony, homecoming, stability",
    Reversed: "Instability, postponed celebrations, tension",
    Astrological: "Venus in Aries",
    Element: "Fire",
    Chakra: "Root",
    Name: "Four of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Four-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Competition, conflict, rivalry, creative tension",
    Reversed: "Resolution, compromise, avoiding conflict",
    Astrological: "Saturn in Leo",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Five of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Five-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Victory, success, public recognition",
    Reversed: "Lack of confidence, ego issues, private victories",
    Astrological: "Jupiter in Leo",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Six of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Standing your ground, perseverance, challenges",
    Reversed: "Defensiveness, overwhelm, giving up",
    Astrological: "Mars in Leo",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Seven of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Fast movement, progress, rapid action",
    Reversed: "Delays, obstacles, miscommunication",
    Astrological: "Mercury in Sagittarius",
    Element: "Fire",
    Chakra: "Sacral",
    Name: "Eight of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Resilience, perseverance, last stretch before success",
    Reversed: "Exhaustion, paranoia, feeling overwhelmed",
    Astrological: "Moon in Sagittarius",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Nine of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Burdens, responsibilities, hard work",
    Reversed: "Burnout, delegation, letting go of stress",
    Astrological: "Saturn in Sagittarius",
    Element: "Fire",
    Chakra: "Root",
    Name: "Ten of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Enthusiasm, exploration, new opportunities",
    Reversed: "Lack of direction, procrastination, immaturity",
    Astrological: "Fire signs (Aries, Leo, Sagittarius)",
    Element: "Fire",
    Chakra: "Sacral",
    Name: "Page of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Adventure, ambition, impulsive action",
    Reversed: "Haste, recklessness, delays",
    Astrological: "Sagittarius",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Knight of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knight-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Confidence, charisma, leadership",
    Reversed: "Insecurity, jealousy, being controlling",
    Astrological: "Leo",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "Queen of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Wands-tarot-card.jpg",
  },
  {
    Meaning: "Vision, leadership, mastery of personal power",
    Reversed: "Arrogance, impulsiveness, domineering behavior",
    Astrological: "Aries",
    Element: "Fire",
    Chakra: "Solar Plexus",
    Name: "King of Wands",
    Image:
      "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Wands-tarot-card.jpg",
  },
];

// ---- UTILITIES ----

// Fisher-Yates shuffle algorithm with reverse card probability
const shuffleArray = (array) =>
  [...array]
    .map((value) => ({
      value: { ...value, reversed: Math.random() < 0.5 },
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

// Convert degrees to radians
const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

// ---- THREE.JS VARIABLES ----
let scene, camera, renderer, controls;
let cardGroup, selectedCardsGroup;
let cards = [];
let selectedCards = [];
let maxSelections = 3;
let cardBackTexture;
let cardSize = { width: 1, height: 1.5 };
let spreadTopic = "Genel Yorum"; // Default topic
let isSelectionComplete = false;
let raycaster, mouse;

// Mobile detection
let isMobile = false;

// Function to detect if the device is mobile
function detectMobile() {
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Function to redirect mobile users to the old version
function redirectMobileUsers() {
  if (detectMobile()) {
    window.location.href = '/oldversion/index.html';
    return true; // Indicate redirect happened
  }
  return false; // No redirect needed
}

// ---- SCENE SETUP ----

// Function to create a single card with front and back faces
function createCard(cardData, x, y, z, rotationY) {
  // Create card group
  const cardObj = new THREE.Group();
  cardObj.position.set(x, y, z);
  cardObj.rotation.y = rotationY;
  cardObj.userData = { cardData: cardData, flipped: false };
  
  // Card dimensions - slightly smaller cards for better fit
  const width = cardSize.width * 0.95;
  const height = cardSize.height * 0.95;
  const thickness = 0.02;
  
  // Create card geometry
  const geometry = new THREE.BoxGeometry(width, height, thickness);
  
  // Create materials array for the card
  const materials = [];
  
  // Side materials (thin edges)
  const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
  materials.push(edgeMaterial); // right side
  materials.push(edgeMaterial); // left side
  materials.push(edgeMaterial); // top side
  materials.push(edgeMaterial); // bottom side
  
  // Create front material with card image if available
  let frontMaterial;
  if (cardData.Image) {
    // Load the card's front image
    const frontTexture = new THREE.TextureLoader().load(cardData.Image, 
      // Success callback
      texture => {
      console.log(`Loaded front texture for ${cardData.Name}`);
      if (cardData.reversed) {
        // Flip the texture vertically if the card is reversed
        texture.center.set(0.5, 0.5);
        texture.rotation = Math.PI; // Rotate 180 degrees
      }
      },
      // Progress callback
      undefined,
      // Error callback
      err => {
      console.error(`Error loading front texture for ${cardData.Name}:`, err);
      }
    );
    frontMaterial = new THREE.MeshStandardMaterial({ 
      map: frontTexture,
      color: 0xffffff
    });
  } else {
    // Fallback material if no image is available
    frontMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xdddddd,
      metalness: 0.1,
      roughness: 0.5
    });
    
    // Add card name as text if no image
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 384;
    const context = canvas.getContext('2d');
    context.fillStyle = '#f8f8f8';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#222222';
    context.font = '20px Arial';
    context.textAlign = 'center';
    context.fillText(cardData.Name || 'Unknown Card', canvas.width/2, canvas.height/2);
    
    const texture = new THREE.CanvasTexture(canvas);
    frontMaterial.map = texture;
  }
  
  // Back material with the card back texture
  const backMaterial = new THREE.MeshStandardMaterial({ 
    map: cardBackTexture,
    color: 0xffffff
  });
  
  // Add front and back materials to the materials array
  materials.push(frontMaterial); // back face (initially showing)
  materials.push(backMaterial); // front face (initially hidden)
  
  // Create the card mesh with materials
  const cardMesh = new THREE.Mesh(geometry, materials);
  cardObj.add(cardMesh);
  
  // Add to scene
  cardGroup.add(cardObj);
  
  // Add to cards array for raycasting
  cards.push(cardObj);
  
  // Add card mesh to the card object's userData for raycasting
  cardObj.userData.cardMesh = cardMesh;
  // Mark this as not hovered initially
  cardObj.userData.hovered = false;
  // Store original position for hover effects
  cardObj.userData.originalPosition = { x: x, y: y, z: z };
  
  return cardObj;
}

function initThreeJS() {
  console.log("Initializing Three.js environment");
  
  // Show loading indicator
  document.getElementById("loading").classList.add("visible");

  // The mobile check is now done on page load, but we'll keep a safety check here too
  if (detectMobile()) {
    redirectMobileUsers();
    return; // Stop initialization if redirected
  }
  
  // Desktop only from this point
  isMobile = false; // Safety reset to ensure desktop layout
  
  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x12101c);

  // Setup camera - desktop only now
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  camera.position.y = 1;

  // Setup renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById("cards-container").appendChild(renderer.domElement);
  document.getElementById("cards-container").classList.remove("hidden");

  // Setup controls - disabled to prevent user from moving camera
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enabled = false; // Disable controls
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 3;
  controls.maxDistance = 10;
  controls.maxPolarAngle = Math.PI / 2;

  // Card groups
  cardGroup = new THREE.Group();
  selectedCardsGroup = new THREE.Group();
  scene.add(cardGroup);
  scene.add(selectedCardsGroup);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 10, 5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // Setup for raycasting (card selection)
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // Setup event listeners
  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("click", onMouseClick);

  // Set a fallback texture for error cases
  cardBackTexture = new THREE.Texture();
  cardBackTexture.needsUpdate = true;

  // Load card back texture with error handling
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    // URL - Using a reliable source
    "https://static.vecteezy.com/system/resources/previews/008/203/958/large_2x/classic-vintage-frame-decorative-border-frame-free-vector.jpg",
    // onLoad callback
    (texture) => {
      console.log("Card back texture loaded successfully");
      cardBackTexture = texture;
      // Create cards once texture is loaded
      createCards(defaultCards);
      animate();

      // Hide loading indicator
      document.getElementById("loading").classList.remove("visible");
    },
    // onProgress callback
    undefined,
    // onError callback
    (err) => {
      console.error("Error loading card back texture:", err);
      // Create cards with default texture
      createCards(defaultCards);
      animate();

      // Hide loading indicator
      document.getElementById("loading").classList.remove("visible");
    }
  );
}

// Function to create all tarot cards
function createCards(cardsData) {
  console.log("Creating", cardsData.length, "cards");
  // Shuffle all 78 cards in the deck
  const shuffledCards = shuffleArray(cardsData);
  
  // Desktop layout only
  createDesktopCardLayout(shuffledCards);
}

// Desktop card layout - semi-circular arrangement
function createDesktopCardLayout(shuffledCards) {
  // Define rows configuration for semi-circular arrangement - back to original 3 rows
  const rows = 3; 
  const cardsPerRow = Math.ceil(shuffledCards.length / rows);
  
  // Create cards and arrange them in rows - original 3-row arrangement
  for (let row = 0; row < rows; row++) {
    // Increased spacing with 3 rows - more spread out
    const rowRadius = 4 + row * 1.2; // Increased from 0.8 to 1.2 for more spread
    
    // Adjusted vertical positions
    const rowElevation = -3 + row * 0.6; // Increased from 0.5 to 0.6
    const rowCards = Math.min(cardsPerRow, shuffledCards.length - row * cardsPerRow);
    
    // Calculate the angle span - wider spread as requested
    const totalAngleSpan = degToRad(150); // Increased from 120 to 150 degree span
    const anglePerCard = totalAngleSpan / (rowCards - 1 || 1); // Original spacing
    const startAngle = -totalAngleSpan / 2;
    
    for (let i = 0; i < rowCards; i++) {
      const cardIndex = row * cardsPerRow + i;
      if (cardIndex >= shuffledCards.length) break;
      
      const cardData = shuffledCards[cardIndex];
      
      // Create card - using rowElevation to position lower
      const card = createCard(
        cardData,
        Math.sin(startAngle + i * anglePerCard) * rowRadius,
        rowElevation, // Lower position
        -Math.cos(startAngle + i * anglePerCard) * rowRadius,
        Math.PI - (startAngle + i * anglePerCard)
      );
      
      // Tilt the cards slightly for a better 3D effect
      card.rotation.x = degToRad(10 + row * 5); // Each row tilted slightly more
    }
  }
}

function onWindowResize() {
  // Desktop-only resize handler
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  // Only handle hover effects if not in selection complete state
  if (!isSelectionComplete) {
    // Check for intersections with cards
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cards, true); // true = recursive, check children
    
    // Reset all cards that were previously hovered
    cards.forEach(card => {
      if (card.userData.hovered && !card.userData.selected) {
        // Make sure originalPosition exists before using it
        if (card.userData.originalPosition) {
          // Lower the card back to its original position
          gsap.to(card.position, {
            y: card.userData.originalPosition.y,
            duration: 0.2
          });
          card.userData.hovered = false;
        }
      }
    });
    
    // If we're hovering over a card
    if (intersects.length > 0) {
      // Get the actual card object (might be the mesh or the group)
      let hoveredCard = intersects[0].object;
      
      // If we hit a mesh, find its parent (the card group)
      if (!cards.includes(hoveredCard)) {
        // Go up the parent chain until we find an object in the cards array
        while (hoveredCard && !cards.includes(hoveredCard)) {
          hoveredCard = hoveredCard.parent;
        }
      }
      
      // If we found a valid card and it's not already selected
      if (hoveredCard && !hoveredCard.userData.selected) {
        // Check if originalPosition exists before trying to use it
        if (hoveredCard.userData.originalPosition) {
          // Lift the card slightly to indicate it can be selected
          gsap.to(hoveredCard.position, {
            y: hoveredCard.userData.originalPosition.y + 0.2, // Lift by 0.2 units
            duration: 0.2
          });
          hoveredCard.userData.hovered = true;
        }
      }
    }
  }
}

function onMouseClick() {
  // Don't process clicks if selection is already complete or we have enough cards
  if (isSelectionComplete || selectedCards.length >= maxSelections) return;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cards, true); // true = recursive, check children

  // Only process the click if it actually hits a card
  if (intersects.length > 0) {
    // Get the actual card object (might be the mesh or the group)
    let selectedCard = intersects[0].object;
    
    // If we hit a mesh, find its parent (the card group)
    if (!cards.includes(selectedCard)) {
      // Go up the parent chain until we find an object in the cards array
      while (selectedCard && !cards.includes(selectedCard)) {
        selectedCard = selectedCard.parent;
      }
    }
    
    // Check if we found a valid card, if it's not already selected, and if it's visible
    if (selectedCard && !selectedCards.includes(selectedCard) && selectedCard.visible) {
      // Make sure cardData exists before trying to log its name
      if (selectedCard.userData && selectedCard.userData.cardData) {
        // Randomly determine if card is reversed (20% chance)
        const isReversed = Math.random() < 0.2;
        selectedCard.userData.reversed = isReversed;
        console.log("Card selected:", selectedCard.userData.cardData.Name, isReversed ? "(Ters)" : "");
      } else {
        console.log("Card selected");
      }
      // Select this card
      selectCard(selectedCard);
    }
  }
}

function selectCard(card) {
  // Mark card as selected
  card.userData.selected = true;
  selectedCards.push(card);
  
  // Make sure it's no longer considered hovered
  card.userData.hovered = false;

    // Update selection counter
    updateSelectionInfo();

    // First flip the card to reveal front side
    gsap.to(card.rotation, {
      y: card.userData.originalRotation + Math.PI,
      // If card is reversed, also rotate it upside down
      z: card.userData.reversed ? Math.PI : 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        // Fixed spacing for desktop
        const spacing = 1.2;
        const offsetX =
          (selectedCards.length - 1) * spacing -
          ((maxSelections - 1) * spacing) / 2;
        
        // Position selected cards
        const yPos = 2.5;

        gsap.to(card.position, {
          x: offsetX,
          y: yPos,
          z: 0,  // Bring cards forward to center
          duration: 0.8,
          ease: "power2.out",
        });
        
        // Adjust rotation to face camera
        gsap.to(card.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        });
      },
    });

    // Check if we've selected exact number of cards as chosen in the form
    updateSelectionInfo();
    if (selectedCards.length === maxSelections) {
      setTimeout(completeSelection, 1500);
    }
  }

function completeSelection() {
  // Hide unselected cards
  cards.forEach((card) => {
    if (!card.userData.selected) {
      gsap.to(card.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
      });
    }
  });

  // Adjust camera position - desktop only
  gsap.to(camera.position, {
    y: 1.5,
    z: 7,
    duration: 1.2,
  });

  // Ensure cards are properly arranged side by side at the bottom
  setTimeout(() => {
    // Arrange selected cards side by side with device-specific placement
    const spacing = 1.3; // Smaller spacing for desktop
    selectedCards.forEach((card, index) => {
      const posX = (index - (selectedCards.length - 1) / 2) * spacing;
      
      // Position cards - desktop only
      const yPos = 2.5;

      gsap.to(card.position, {
        x: posX,
        y: yPos, // Higher up on mobile to stay visible
        z: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          if (index === selectedCards.length - 1) {
            displayResults();
          }
        },
      });
      
      // No mobile-specific scaling needed
    });
  }, 800);
}

function displayResults() {
  // Clear any existing content
  resultsContent.innerHTML = '';
  
  // Add topic (smaller style)
  const nameElement = document.createElement("p");
  nameElement.textContent = spreadTopic ? `"${spreadTopic}" için Tarot Açılımı` : "Tarot Açılımı";
  nameElement.classList.add("text-base", "font-bold", "mb-2");
  resultsContent.appendChild(nameElement);

  // Process card data, including all properties
  const selectedCardData = selectedCards.map(card => {
    const cardData = card.userData.cardData || card.userData;
    return {
      ...cardData,
      isReversed: card.userData.reversed
    };
  });
  
  // Create loading indicator
  const loadingElement = document.createElement("div");
  loadingElement.textContent = "Tarot yorumu alınıyor...";
  loadingElement.classList.add("text-center", "py-2");
  resultsContent.appendChild(loadingElement);
  
  // Create element for API response markdown - Put this at the top
  const apiResponseElement = document.createElement("div");
  apiResponseElement.classList.add("mb-4", "p-3", "border", "rounded", "bg-white");
  // Clear results content
  resultsContent.innerHTML = "";

  // Create a prominent API status indicator
  const apiStatusContainer = document.createElement("div");
  apiStatusContainer.classList.add("mb-6", "p-4", "bg-purple-50", "border", "border-purple-200", "rounded-lg", "text-center");
  apiStatusContainer.innerHTML = '<p class="text-lg font-bold">Tarot yorumu alınıyor...</p><p class="text-sm mt-1">Kartlarınız hazır, yorum için API bekleniyor.</p>';
  resultsContent.appendChild(apiStatusContainer);

  // Create container for API results (interpretation)
  const interpretationContainer = document.createElement("div");
  interpretationContainer.classList.add("mb-6");
  resultsContent.appendChild(interpretationContainer);

  // Create container for selected cards
  const cardGridElement = document.createElement("div");
  cardGridElement.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "gap-2",
    "mt-4"
  );
  // Show cards immediately, don't wait for API
  cardGridElement.style.display = "grid";
  resultsContent.appendChild(cardGridElement);

  // Determine spread type based on selection
  let spreadType;
  switch(maxSelections) {
    case 1:
      spreadType = "Tekli Açılım";
      break;
    case 3:
      spreadType = "Üçlü Açılım";
      break;
    case 5:
      spreadType = "Genel Açılım";
      break;
    case 7:
      spreadType = "Kent Açılımı";
      break;
    default:
      spreadType = "Genel Açılım";
  }
  
  // Make API call to get markdown interpretation
  fetch("https://tarrotworker.ismailhand.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      cards: selectedCardData, 
      spreadTopic: spreadTopic || "Genel Yorum", 
      spreadType: spreadType 
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Remove loading indicator
    loadingElement.remove();
    
    // Display the markdown response
    if (data) {
      // Simple markdown conversion (for more complex markdown, use a library)
      const htmlContent = data
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      interpretationContainer.innerHTML = htmlContent;
    } else {
      interpretationContainer.textContent = "Tarot yorumu alınamadı.";
    }
  })
  .catch(error => {
    console.error("API error:", error);
    loadingElement.remove();
    interpretationContainer.textContent = "Tarot yorumu alınırken bir hata oluştu.";
  });
  
  // Function to display selected cards in a grid
  function showSelectedCards(cards, container) {
    // Always display container immediately
    container.style.display = "grid";
    
    // Add a subtle header for the cards section
    const cardsHeader = document.createElement("div");
    cardsHeader.classList.add("col-span-full", "text-sm", "font-medium", "text-gray-700", "mb-1");
    cardsHeader.textContent = "Seçilen Kartlar";
    container.appendChild(cardsHeader);

    // Create a card element for each card
    cards.forEach((cardData) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add(
        "bg-white",
        "rounded-lg",
        "shadow-md",
        "p-3",
        "flex",
        "flex-col",
        "items-center"
      );
      
      // Create card image element with proper orientation
      const cardImg = document.createElement("img");
      cardImg.src = cardData.Image;
      cardImg.alt = cardData.Name;
      cardImg.classList.add("w-24", "h-auto", "mb-2", "object-contain");
      if (cardData.isReversed) {
        cardImg.classList.add("transform", "rotate-180");
      }
      
      cardElement.appendChild(cardImg);
      
      // Add card name and basic meaning
      const nameDiv = document.createElement("div");
      nameDiv.classList.add("font-medium", "text-center", "text-sm", "mb-1");
      nameDiv.textContent = `${cardData.Name} ${cardData.isReversed ? "(Ters)" : ""}`;
      cardElement.appendChild(nameDiv);
      
      // Add meaning based on orientation
      const meaningDiv = document.createElement("div");
      meaningDiv.classList.add("text-xs", "mt-1", "font-semibold");
      meaningDiv.textContent = `Anlam: ${cardData.isReversed ? cardData.Reversed : cardData.Meaning}`;
      cardElement.appendChild(meaningDiv);
      
      // Add all card properties if they exist
      const properties = [
        { name: "Arcana", value: cardData.Arcana },
        { name: "Takım", value: cardData.Suit },
        { name: "Element", value: cardData.Element },
        { name: "Astroloji", value: cardData.Astrology },
        { name: "Numeroloji", value: cardData.Numerology },
        { name: "Anahtar Kelimeler", value: cardData.Keywords }
      ];
      
      properties.forEach(prop => {
        if (prop.value) {
          const propDiv = document.createElement("div");
          propDiv.classList.add("text-xs", "mt-1");
          propDiv.innerHTML = `<span class="font-medium">${prop.name}:</span> ${prop.value}`;
          cardElement.appendChild(propDiv);
        }
      });
      
      container.appendChild(cardElement);
    });
  }

  // Show selected cards immediately
  showSelectedCards(selectedCardData, cardGridElement);

  // Add button to restart
  const restartButton = document.createElement("button");
  restartButton.textContent = "Yeni Açılım Yap";
  restartButton.classList.add(
    "mt-4",
    "bg-indigo-600",
    "text-white",
    "py-1",
    "px-3",
    "rounded",
    "text-sm"
  );
  restartButton.addEventListener("click", resetApp);
  resultsContent.appendChild(restartButton);

  // Show results container with animation
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  gsap.from(resultContainer, {
    y: -100,
    opacity: 0,
    duration: 0.8,
  });
}

function resetApp() {
  // Reload the page to restart
  window.location.reload();
}

function updateSelectionInfo() {
  const selectionInfo = document.getElementById("selection-info");
  selectionInfo.style.display = "block";
  selectionInfo.textContent = `Kart seçin: ${selectedCards.length}/${maxSelections}`;
}

function animate() {
  requestAnimationFrame(animate);

  // Update controls
  controls.update();

  // Render scene
  renderer.render(scene, camera);
}

// Initialize resultsContent element for card results
let resultsContent;

// ---- EVENT LISTENERS ----

document.addEventListener("DOMContentLoaded", () => {
  // Check if user is on mobile and redirect if needed - do this FIRST before any other initialization
  if (redirectMobileUsers()) {
    return; // Stop further initialization if redirected
  }
  
  // Initialize the resultsContent variable on page load
  resultsContent = document.getElementById("results-content");
  const tarotForm = document.getElementById("tarot-form");

  tarotForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get spread topic and selection
    spreadTopic = document.getElementById("spread-topic").value;
    const spreadValue = document.querySelector(
      'input[name="spread"]:checked'
    ).value;
    maxSelections = parseInt(spreadValue);

    // Hide form, show cards
    document.getElementById("form-container").style.display = "none";

    // Initialize Three.js scene
    initThreeJS();

    // Show selection info
    updateSelectionInfo();
  });
});
