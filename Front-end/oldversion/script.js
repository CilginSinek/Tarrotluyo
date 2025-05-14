const defaultCards = [
  {
    "Meaning": "New beginnings, adventure, spontaneity",
    "Reversed": "Hesitation, recklessness, fear of change",
    "Astrological": "Uranus",
    "Element": "Air",
    "Name": "The Fool",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/the-fool-tarot-card.jpg"
  },
  {
    "Meaning": "Manifestation, resourcefulness, divine connection",
    "Reversed": "Deception, manipulation, wasted potential",
    "Astrological": "Mercury",
    "Element": "Air",
    "Chakra": "Solar Plexus",
    "Name": "The Magician",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/the-magician-tarot-card.jpg"
  },
  {
    "Meaning": "Intuition, mystery, spiritual insight",
    "Reversed": "Secrets, confusion, blocked intuition",
    "Astrological": "Moon",
    "Element": "Water",
    "Chakra": "Third Eye",
    "Name": "The High Priestess",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/the-high-priestess-tarot-card.jpg"
  },
  {
    "Meaning": "Fertility, abundance, nurturing energy",
    "Reversed": "Dependence, creative block, neglect",
    "Astrological": "Venus",
    "Element": "Fire",
    "Chakra": "Root",
    "Name": "The Empress",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2021/07/the-empress-tarot-card.jpg"
  },
  {
    "Meaning": "Leadership, stability, protection",
    "Reversed": "Tyranny, lack of control",
    "Astrological": "Aries",
    "Element": "Fire",
    "Chakra": "Root",
    "Name": "The Emperor",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Emperor-tarot-card.jpg"
  },
  {
    "Meaning": "Spiritual guidance, tradition, higher learning",
    "Reversed": "Rebellion, challenging authority, breaking free from outdated beliefs",
    "Astrological": "Taurus",
    "Element": "Earth",
    "Chakra": "Crown",
    "Name": "The Hierophant",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Hierophant-tarot-card.jpg"
  },
  {
    "Meaning": "Love, relationships, major life choices",
    "Reversed": "Disharmony, imbalance, misaligned values",
    "Astrological": "Gemini",
    "Element": "Air",
    "Chakra": "Heart",
    "Name": "The Lovers",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Lovers-tarot-card.jpg"
  },
  {
    "Meaning": "Success, control, determination",
    "Reversed": "Lack of direction, self-doubt, recklessness",
    "Astrological": "Cancer",
    "Element": "Water",
    "Chakra": "Solar Plexus",
    "Name": "The Chariot",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Chariot-tarot-card.jpg"
  },
  {
    "Meaning": "Courage, confidence, inner strength",
    "Reversed": "Self-doubt, weakness, fear",
    "Astrological": "Leo",
    "Element": "Fire",
    "Chakra": "Heart",
    "Name": "Strength",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Strength-tarot-card.jpg"
  },
  {
    "Meaning": "Wisdom, solitude, introspection",
    "Reversed": "Isolation, loneliness, disconnection",
    "Astrological": "Virgo",
    "Element": "Earth",
    "Chakra": "Crown",
    "Name": "The Hermit",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Hermit-tarot-card.jpg"
  },
  {
    "Meaning": "Luck, destiny, turning points",
    "Reversed": "Bad luck, resistance to change, setbacks",
    "Astrological": "Jupiter",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Wheel of Fortune",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Wheel-of-Fortune-tarot-card.jpg"
  },
  {
    "Meaning": "Truth, fairness, law, balance",
    "Reversed": "Dishonesty, unfairness, lack of accountability&nbsp;",
    "Astrological": "Libra",
    "Element": "Air",
    "Chakra": "Heart",
    "Name": "Justice",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Justice-tarot-card.jpg"
  },
  {
    "Meaning": "Letting go, surrender, new perspective",
    "Reversed": "Resistance, stagnation, unwillingness to change",
    "Astrological": "Neptune",
    "Element": "Water",
    "Chakra": "Crown",
    "Name": "The Hanged Man",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Hanged-Man-tarot-card.jpg"
  },
  {
    "Meaning": "Transformation, rebirth, letting go",
    "Reversed": "Resistance to change, stagnation, fear",
    "Astrological": "Scorpio",
    "Element": "Water",
    "Chakra": "Sacral",
    "Name": "Death",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Death-tarot-card.jpg"
  },
  {
    "Meaning": "Balance, patience, moderation",
    "Reversed": "Imbalance, excess, lack of self-control",
    "Astrological": "Sagittarius",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Temperance",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Temperance-tarot-card.jpg"
  },
  {
    "Meaning": "Temptation, attachment, self-destruction",
    "Reversed": "Breaking free, releasing control, awareness",
    "Astrological": "Capricorn",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "Devil",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Devil-tarot-card.jpg"
  },
  {
    "Meaning": "Sudden change, transformation",
    "Reversed": "Fear of change, avoiding disaster, resistance",
    "Astrological": "Mars",
    "Element": "Fire",
    "Chakra": "Root",
    "Name": "The Tower",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Tower-tarot-card.jpg"
  },
  {
    "Meaning": "Hope, healing, inspiration",
    "Reversed": "Lack of faith, despair, self-doubt",
    "Astrological": "Aquarius",
    "Element": "Air",
    "Chakra": "Crown",
    "Name": "The Star",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Star-tarot-card.jpg"
  },
  {
    "Meaning": "Mystery, dreams, intuition",
    "Reversed": "Fear, anxiety, deception",
    "Astrological": "Pisces",
    "Element": "Water",
    "Chakra": "Third Eye",
    "Name": "The Moon",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Moon-tarot-card.jpg"
  },
  {
    "Meaning": "Joy, success, enlightenment",
    "Reversed": "Ego, unrealistic expectations, sadness",
    "Astrological": "Sun",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "The Sun",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Sun-tarot-card.jpg"
  },
  {
    "Meaning": "Self-reflection, renewal, clarity",
    "Reversed": "Self-doubt, stagnation, refusing change",
    "Astrological": "Pluto",
    "Element": "Fire",
    "Chakra": "Crown",
    "Name": "Judgement",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Judgement-tarot-card.jpg"
  },
  {
    "Meaning": "Success, fulfillment, new possibilities",
    "Reversed": "Incompletion, delays, lack of closure",
    "Astrological": "Saturn",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "The World",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-World-tarot-card.jpg"
  },
  {
    "Meaning": "New love, emotional fulfillment, creative inspiration",
    "Reversed": "Blocked emotions, heartbreak, missed opportunities",
    "Astrological": "Water signs (Cancer, Scorpio, Pisces)",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Ace of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ace-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Harmony, balance, romantic partnerships",
    "Reversed": "Imbalance, one-sided relationships, disharmony",
    "Astrological": "Venus in Cance",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Two of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Two-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Celebration, friendship, social gatherings",
    "Reversed": "Gossip, overindulgence, isolation",
    "Astrological": "Mercury in Cancer",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Three of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Cups-tarot-cards.jpg"
  },
  {
    "Meaning": "Contemplation, boredom, missed opportunities",
    "Reversed": "Awareness, seizing opportunities, newfound motivation",
    "Astrological": "Moon in Cancer",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Four of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Four-of-Cups-tarot-cards.jpg"
  },
  {
    "Meaning": "Loss, regret, disappointment",
    "Reversed": "Acceptance, emotional healing, moving forward",
    "Astrological": "Mars in Scorpio",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Five of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Five-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Nostalgia, childhood memories, kindness",
    "Reversed": "Stuck in the past, unrealistic expectations",
    "Astrological": "Sun in Scorpio",
    "Element": "Water",
    "Name": "Six of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Choices, imagination, wishful thinking",
    "Reversed": "Clarity, reality check, avoiding illusions",
    "Astrological": "Venus in Scorpio",
    "Element": "Water",
    "Chakra": "Third Eye",
    "Name": "Seven of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Walking away, seeking deeper meaning, transition",
    "Reversed": "Fear of change, stagnation, refusing to move on",
    "Astrological": "Saturn in Pisces",
    "Element": "Water",
    "Chakra": "Sacral",
    "Name": "Eight of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Wish fulfillment, satisfaction, emotional abundance",
    "Reversed": "Unfulfilled desires, materialism, lack of inner happiness",
    "Astrological": "Jupiter in Pisces",
    "Element": "Water",
    "Chakra": "Solar Plexus",
    "Name": "Nine of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Happiness, family harmony, emotional fulfillment",
    "Reversed": "Misalignment, broken relationships, unrealistic expectations",
    "Astrological": "Mars in Pisces",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Ten of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Creativity, emotional curiosity, new love",
    "Reversed": "Immaturity, emotional insecurity, creative block",
    "Astrological": "Water signs (Cancer, Scorpio, Pisces)",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Page of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Romance, charm, following one’s heart",
    "Reversed": "Moodiness, deception, unrealistic expectations",
    "Astrological": "Pisces",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "Knight of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knights-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Compassion, intuition, emotional depth",
    "Reversed": "Emotional overwhelm, sensitivity, co-dependency",
    "Astrological": "Cancer",
    "Element": "Water",
    "Name": "Queen of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "Emotional balance, wisdom, leadership",
    "Reversed": "Emotional manipulation, mood swings, repression",
    "Astrological": "Scorpio",
    "Element": "Water",
    "Chakra": "Heart",
    "Name": "King of Cups",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Cups-tarot-card.jpg"
  },
  {
    "Meaning": "New financial opportunities, career advancements, prosperity",
    "Reversed": "Missed chances, instability, financial setbacks",
    "Astrological": "Earth signs (Taurus, Virgo, Capricorn)",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "Ace of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Ace-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Balance, adaptability, managing multiple responsibilities",
    "Reversed": "Overwhelmed, financial stress, disorganization",
    "Astrological": "Jupiter in Capricorn",
    "Element": "Earth",
    "Name": "Two of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Two-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Teamwork, collaboration, skill-building",
    "Reversed": "Lack of teamwork, poor planning, miscommunication",
    "Astrological": "Mars in Capricorn",
    "Element": "Earth",
    "Chakra": "Solar Plexus",
    "Name": "Three of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Financial stability, security, saving money",
    "Reversed": "Greed, materialism, fear of loss",
    "Astrological": "Sun in Capricorn",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "Four of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Four-of-Pentacles-tarot-card-2.jpg"
  },
  {
    "Meaning": "Financial loss, hardship, feeling left out",
    "Reversed": "Recovery, hope, overcoming struggles",
    "Astrological": "Mercury in Taurus",
    "Element": "Earth",
    "Name": "Five of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Five-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Generosity, giving and receiving, financial balance",
    "Reversed": "Debt, power imbalance, strings attached",
    "Astrological": "Moon in Taurus",
    "Element": "Earth",
    "Chakra": "Heart",
    "Name": "Six of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Long-term investments, patience, steady progress",
    "Reversed": "Impatience, lack of rewards, wasted effort",
    "Astrological": "Saturn in Taurus",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "Seven of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Hard work, skill development, dedication",
    "Reversed": "Lack of motivation, cutting corners, stagnation",
    "Astrological": "Sun in Virgo",
    "Element": "Earth",
    "Chakra": "Solar Plexus",
    "Name": "Eight of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Financial independence, luxury, self-sufficiency",
    "Reversed": "Material dependence, financial insecurity, setbacks",
    "Astrological": "Venus in Virgo",
    "Element": "Earth",
    "Chakra": "Solar Plexus",
    "Name": "Nine of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Wealth, family security, long-term success",
    "Reversed": "Financial instability, loss, lack of support",
    "Astrological": "Mercury in Virgo",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "Ten of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Ambition, new career opportunities, study and learning",
    "Reversed": "Lack of focus, procrastination, missed chances",
    "Astrological": "Earth signs (Taurus, Virgo, Capricorn)",
    "Element": "Earth",
    "Name": "Page of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Hard work, perseverance, responsibility",
    "Reversed": "Stubbornness, lack of ambition, feeling stuck",
    "Astrological": "Virgo",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "Knight of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knight-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Financial wisdom, nurturing, stability",
    "Reversed": "Financial dependence, work-life imbalance, insecurity",
    "Astrological": "Capricorn",
    "Element": "Earth",
    "Name": "Queen of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Leadership, financial mastery, wealth",
    "Reversed": "Greed, materialism, financial mismanagement",
    "Astrological": "Taurus",
    "Element": "Earth",
    "Chakra": "Root",
    "Name": "King of Pentacles",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Pentacles-tarot-card.jpg"
  },
  {
    "Meaning": "Mental clarity, truth, breakthroughs, new ideas",
    "Reversed": "Confusion, dishonesty, lack of direction",
    "Astrological": "Air signs (Gemini, Libra, Aquarius)",
    "Element": "Air",
    "Chakra": "Third Eye",
    "Name": "Ace of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Ace-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Indecision, difficult choices, needing balance",
    "Reversed": "Avoidance, delays, refusal to see the truth",
    "Astrological": "Moon in Libra",
    "Element": "Air",
    "Chakra": "Third Eye",
    "Name": "Two of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Two-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Heartbreak, sorrow, emotional pain",
    "Reversed": "Emotional healing, forgiveness, recovery",
    "Astrological": "Saturn in Libra",
    "Element": "Air",
    "Chakra": "Heart",
    "Name": "Three of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Rest, recovery, contemplation, mental peace",
    "Reversed": "Burnout, anxiety, restlessness",
    "Astrological": "Jupiter in Libra",
    "Element": "Air",
    "Chakra": "Third Eye",
    "Name": "Four of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Four-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Conflict, betrayal, competition, self-interest",
    "Reversed": "Resolution, compromise, learning from past mistakes",
    "Astrological": "Venus in Aquarius",
    "Element": "Air",
    "Chakra": "Solar Plexus",
    "Name": "Five of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Five-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Moving forward, transition, leaving hardships behind",
    "Reversed": "Resistance to change, emotional baggage",
    "Astrological": "Mercury in Aquarius",
    "Element": "Air",
    "Chakra": "Throat",
    "Name": "Six of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Deception, strategy, secrecy, trickery",
    "Reversed": "Exposure of lies, making amends, self-deception",
    "Astrological": "Moon in Aquarius",
    "Element": "Air",
    "Chakra": "Throat",
    "Name": "Seven of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Feeling trapped, limitations, mental restrictions",
    "Reversed": "Empowerment, breaking free, regaining control",
    "Astrological": "Jupiter in Gemini",
    "Element": "Air",
    "Chakra": "Third Eye",
    "Name": "Eight of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Anxiety, worry, sleepless nights, overthinking",
    "Reversed": "Healing, relief, releasing fears",
    "Astrological": "Mars in Gemini",
    "Element": "Air",
    "Chakra": "Third Eye",
    "Name": "Nine of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Painful endings, betrayal, deep transformation",
    "Reversed": "Recovery, new beginnings, overcoming hardships",
    "Astrological": "Sun in Gemini",
    "Element": "Air",
    "Chakra": "Root",
    "Name": "Ten of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Curiosity, intelligence, seeking truth",
    "Reversed": "Gossip, deception, immature communication",
    "Astrological": "Air signs (Gemini, Libra, Aquarius)",
    "Element": "Air",
    "Chakra": "Throat",
    "Name": "Page of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Ambition, assertiveness, pursuing truth",
    "Reversed": "Impulsiveness, recklessness, aggression",
    "Astrological": "Gemini",
    "Element": "Air",
    "Chakra": "Solar Plexus",
    "Name": "Knight of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knight-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Wisdom, independence, strong intellect",
    "Reversed": "Coldness, judgment, emotional detachment",
    "Astrological": "Libra",
    "Element": "Air",
    "Chakra": "Third Eye",
    "Name": "Queen of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "Leadership, strategic thinking, authority",
    "Reversed": "Corruption, manipulation, misuse of power",
    "Astrological": "Aquarius",
    "Element": "Air",
    "Chakra": "Throat",
    "Name": "King of Swords",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Swords-tarot-card.jpg"
  },
  {
    "Meaning": "New beginnings, inspiration, creative spark",
    "Reversed": "Delays, creative blocks, lack of motivation",
    "Astrological": "Fire signs (Aries, Leo, Sagittarius)",
    "Element": "Fire",
    "Chakra": "Sacral",
    "Name": "Ace of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/The-Ace-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Planning, vision, making bold choices",
    "Reversed": "Fear of change, lack of direction, missed opportunities",
    "Astrological": "Mars in Aries",
    "Element": "Fire",
    "Name": "Two of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Two-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Expansion, progress, waiting for results",
    "Reversed": "Delays, frustration, lack of foresight",
    "Astrological": "Sun in Aries",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Three of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Three-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Celebration, harmony, homecoming, stability",
    "Reversed": "Instability, postponed celebrations, tension",
    "Astrological": "Venus in Aries",
    "Element": "Fire",
    "Chakra": "Root",
    "Name": "Four of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Four-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Competition, conflict, rivalry, creative tension",
    "Reversed": "Resolution, compromise, avoiding conflict",
    "Astrological": "Saturn in Leo",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Five of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Five-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Victory, success, public recognition",
    "Reversed": "Lack of confidence, ego issues, private victories",
    "Astrological": "Jupiter in Leo",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Six of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Six-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Standing your ground, perseverance, challenges",
    "Reversed": "Defensiveness, overwhelm, giving up",
    "Astrological": "Mars in Leo",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Seven of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Seven-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Fast movement, progress, rapid action",
    "Reversed": "Delays, obstacles, miscommunication",
    "Astrological": "Mercury in Sagittarius",
    "Element": "Fire",
    "Chakra": "Sacral",
    "Name": "Eight of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Eight-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Resilience, perseverance, last stretch before success",
    "Reversed": "Exhaustion, paranoia, feeling overwhelmed",
    "Astrological": "Moon in Sagittarius",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Nine of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Nine-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Burdens, responsibilities, hard work",
    "Reversed": "Burnout, delegation, letting go of stress",
    "Astrological": "Saturn in Sagittarius",
    "Element": "Fire",
    "Chakra": "Root",
    "Name": "Ten of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Ten-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Enthusiasm, exploration, new opportunities",
    "Reversed": "Lack of direction, procrastination, immaturity",
    "Astrological": "Fire signs (Aries, Leo, Sagittarius)",
    "Element": "Fire",
    "Chakra": "Sacral",
    "Name": "Page of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Page-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Adventure, ambition, impulsive action",
    "Reversed": "Haste, recklessness, delays",
    "Astrological": "Sagittarius",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Knight of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Knight-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Confidence, charisma, leadership",
    "Reversed": "Insecurity, jealousy, being controlling",
    "Astrological": "Leo",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "Queen of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/Queen-of-Wands-tarot-card.jpg"
  },
  {
    "Meaning": "Vision, leadership, mastery of personal power",
    "Reversed": "Arrogance, impulsiveness, domineering behavior",
    "Astrological": "Aries",
    "Element": "Fire",
    "Chakra": "Solar Plexus",
    "Name": "King of Wands",
    "Image": "https://alittlesparkofjoy.com/wp-content/uploads/2025/02/King-of-Wands-tarot-card.jpg"
  }
]

const shuffleArray = (array) =>
  [...array]
    .map((value) => ({
      value: { ...value, reversed: Math.random() < 0.5 },
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const cardNames = shuffleArray(defaultCards);

const container = document.getElementById("card-container");
const selectedCards = [];
const redirectToResults = () => {
  const selectedSpread = document.querySelector('input[name="spread"]:checked');
  const topicInput = document.getElementById("topic");

  if (selectedSpread) {
    localStorage.setItem("spreadType", selectedSpread.value);
    switch (selectedSpread.value) {
      case "Tek Açılım":
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards.slice(0, 1)));
        break;
      case "Üçlü Açılım":
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards.slice(0, 3)));
        break;
      case "Klasik Açılım":
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards.slice(0, 5)));
        break;
      case "Kent Açılımı":
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards.slice(0, 7)));
        break;
    }
  }

  if (topicInput) {
    localStorage.setItem("SpreadTopic", topicInput.value);
  }

  window.location.href = "result.html";
}


cardNames.forEach((obj) => {
  const card = document.createElement("div");
  card.className = "flip-card w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96"; // Kart yüksekliği artırıldı

  const cardInner = document.createElement("div");
  cardInner.className = "flip-card-inner relative w-full h-full";

  const cardFront = document.createElement("div");
  cardFront.className =
    "flip-card-front absolute w-full h-full bg-gray-800 rounded-lg shadow-lg flex items-center justify-center";
  const img = document.createElement("img");
  img.src = obj.Image;
  img.alt = obj.Name;
  img.className = "w-full h-full object-cover rounded-lg";
  if (obj.reversed) {
    console.log(obj.Name, obj.reversed);
    img.style.transform = "rotate(180deg)";
  }
  cardFront.appendChild(img);

  const cardBack = document.createElement("div");
  cardBack.className =
    "flip-card-back absolute w-full h-full bg-gray-800 rounded-lg shadow-lg flex items-center justify-center";
  cardBack.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/previews/008/203/958/large_2x/classic-vintage-frame-decorative-border-frame-free-vector.jpg')";
  cardBack.style.backgroundSize = "cover";
  cardBack.style.backgroundPosition = "center";

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);

  card.addEventListener("click", () => {
    const checkedRadio = document.querySelector(
      'input[name="spread"]:checked'
    );
    if (!checkedRadio) {
      alert("Lütfen önce bir açılım türü seçin!");
      return;
    }

    switch (checkedRadio.value){
      case "Tek Açılım":
        if(selectedCards.length > 1){
          redirectToResults();
        }else{
          if (!card.classList.contains("open")) {
            card.classList.add("open"); // Kartı aç
            selectedCards.push(obj); // Seçilen kartı listeye ekle
            redirectToResults();
          }
        }
        break;
      case "Üçlü Açılım":
        if(selectedCards.length > 3){
          // redirect results page
        }
        else{
          if (!card.classList.contains("open")) {
            card.classList.add("open"); // Kartı aç
            selectedCards.push(obj); // Seçilen kartı listeye ekle
            if(selectedCards.length == 3){
              redirectToResults();
            }
          }
        }
        break;
      case "Klasik Açılım":
        if(selectedCards.length > 5){
          redirectToResults();
        }
        else{
          if (!card.classList.contains("open")) {
            card.classList.add("open"); // Kartı aç
            selectedCards.push(obj); // Seçilen kartı listeye ekle
            if(selectedCards.length == 5){
              redirectToResults();
            }
          }
        }
        break;
      case "Kent Açılımı":
        if(selectedCards.length > 7){
          redirectToResults();
        }
        else{
          if (!card.classList.contains("open")) {
            card.classList.add("open"); // Kartı aç
            selectedCards.push(obj); // Seçilen kartı listeye ekle
            if(selectedCards.length == 7){
              redirectToResults();
            }
          }
        }
        break;
    }
  });

  container.appendChild(card);
});




document.getElementById("see-results").addEventListener("click", redirectToResults);

document.addEventListener("DOMContentLoaded", () => {
  const savedSpreadType = localStorage.getItem("spreadType");
  const savedSpreadTopic = localStorage.getItem("SpreadTopic");

  if (savedSpreadType) {
    const radioButtons = document.querySelectorAll('input[name="spread"]');
    radioButtons.forEach((radio) => {
      if (radio.value === savedSpreadType) {
        radio.checked = true;
      }
    });
  }

  if (savedSpreadTopic) {
    const topicInput = document.getElementById("topic");
    topicInput.value = savedSpreadTopic;
  }
});