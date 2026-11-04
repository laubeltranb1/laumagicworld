// All the text on the site lives here so it can be edited without touching components.

export const site = {
  name: "Laura Beltran",
  roles: "Reiki Master Practitioner · Animal Communicator",
  // Country code + number, digits only
  whatsapp: "971521006115",
  whatsappMessage: "Hi Laura! I'd like to know more about a session",
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export type ChakraId =
  | "root"
  | "sacral"
  | "solar"
  | "heart"
  | "throat"
  | "thirdEye"
  | "crown";

export type Chakra = {
  id: ChakraId;
  name: string;
  sanskrit: string;
  place: string;
  theme: string;
};

// Listed from the ground up, the way energy rises through the body.
export const chakras: Chakra[] = [
  {
    id: "root",
    name: "Root",
    sanskrit: "Muladhara",
    place: "Base of the spine",
    theme: "Safety, grounding, trust",
  },
  {
    id: "sacral",
    name: "Sacral",
    sanskrit: "Svadhisthana",
    place: "Lower belly",
    theme: "Emotions, play, creativity",
  },
  {
    id: "solar",
    name: "Solar Plexus",
    sanskrit: "Manipura",
    place: "Stomach",
    theme: "Confidence, will, inner fire",
  },
  {
    id: "heart",
    name: "Heart",
    sanskrit: "Anahata",
    place: "Center of the chest",
    theme: "Love, compassion, bonding",
  },
  {
    id: "throat",
    name: "Throat",
    sanskrit: "Vishuddha",
    place: "Throat",
    theme: "Expression, truth, being heard",
  },
  {
    id: "thirdEye",
    name: "Third Eye",
    sanskrit: "Ajna",
    place: "Between the brows",
    theme: "Intuition, inner sight",
  },
  {
    id: "crown",
    name: "Crown",
    sanskrit: "Sahasrara",
    place: "Top of the head",
    theme: "Spirit, peace, oneness",
  },
];

export const pillars = [
  {
    chakra: "throat" as ChakraId,
    title: "Relax",
    text: "Slow down, breathe and let the nervous system soften into deep rest.",
  },
  {
    chakra: "heart" as ChakraId,
    title: "Connect",
    text: "Return to yourself, to your animal and to the quiet bond you share.",
  },
  {
    chakra: "crown" as ChakraId,
    title: "Heal",
    text: "Gently release what weighs you down so balance can return on its own.",
  },
];

export const reikiBenefits = [
  "Deep relaxation and calm",
  "Release of stress, fear and anxiety",
  "Emotional support through change, recovery or grief",
  "A renewed sense of balance and clarity",
];

// The three short rituals carried out before every treatment.
export const reijiHo = [
  {
    step: "Gassho",
    text: "Hands together at the heart, I connect to Reiki and become still.",
  },
  {
    step: "Intention",
    text: "I pray for the wellbeing of the one receiving, and raise my hands to the third eye, asking Reiki to guide them to where energy is needed.",
  },
  {
    step: "Intuition",
    text: "I let intuition lead the session, following the energy rather than a fixed routine.",
  },
];

export const bondCards = [
  {
    chakra: "sacral" as ChakraId,
    title: "Mirrors",
    text: "Animals are deeply sensitive to the energy of their home. They often reflect our emotions back to us, sometimes carrying our stress so we can finally see it.",
  },
  {
    chakra: "heart" as ChakraId,
    title: "Teachers",
    text: "They live fully in the present moment and love without conditions. Simply being with them invites us to slow down and open the heart.",
  },
  {
    chakra: "thirdEye" as ChakraId,
    title: "Companions on purpose",
    text: "Many believe animals come into our lives at the right time, each with something to teach, to heal or to share on our path together.",
  },
];

// From contracted (heavy) to expanded (light) states.
export const vibrationScale = [
  "Shame",
  "Guilt",
  "Fear",
  "Grief",
  "Anger",
  "Courage",
  "Acceptance",
  "Love",
  "Joy",
  "Peace",
];

export const communicationSteps = [
  {
    title: "Share",
    text: "You send a clear photo of your animal and the questions or concerns on your heart.",
  },
  {
    title: "Quiet",
    text: "I ground myself, open with Reiki and quiet the mind so I can tune in to your animal's energy.",
  },
  {
    title: "Listen",
    text: "Animals answer through images, feelings, sensations and impressions rather than words.",
  },
  {
    title: "Bring it home",
    text: "I share everything I received, along with gentle guidance for you and your companion.",
  },
];

export const communicationHelps = [
  "Changes in behavior or mood",
  "Moving home or welcoming a new family member",
  "Understanding their needs and preferences",
  "Illness, aging and end-of-life transitions",
  "Grief and connecting with an animal who has passed",
];

export const services = [
  {
    chakra: "heart" as ChakraId,
    title: "Reiki for Animals",
    format: "In person or at a distance",
    text: "A calm, non-invasive session your animal can receive while resting, eating or simply nearby. Supportive for anxious, rescued, senior or recovering animals.",
  },
  {
    chakra: "thirdEye" as ChakraId,
    title: "Reiki for Humans",
    format: "In person or at a distance",
    text: "Time just for you to rest, release tension and come back into balance. You stay fully clothed and simply lie down and receive.",
  },
  {
    chakra: "throat" as ChakraId,
    title: "Animal Communication",
    format: "At a distance, from a photo",
    text: "A heart-to-heart conversation with your animal to understand what they feel, what they need and what they would like you to know.",
  },
  {
    chakra: "crown" as ChakraId,
    title: "Animal & Human Together",
    format: "In person or at a distance",
    text: "A shared session for you and your companion, harmonizing the energy you both live in and deepening the bond between you.",
  },
];

export const faqs = [
  {
    q: "Does my animal need to stay still?",
    a: "Not at all. Animals receive Reiki in their own way. They can move, lie down or walk away, and they often come back for more when they are ready.",
  },
  {
    q: "How can a session work at a distance?",
    a: "Energy is not limited by space. Distance Reiki and animal communication connect through intention, so your animal can stay comfortably at home.",
  },
  {
    q: "Does Reiki replace the vet or the doctor?",
    a: "No. Reiki is a complementary practice that works alongside medical and veterinary care, never instead of it.",
  },
];
