// Array of possible headlines
const headlines = [
  "Design beautiful experiences with our intelligent platform",
  "Transform your ideas into reality with AI-powered design",
  "Craft stunning visuals in seconds with our creative tools",
  "Revolutionize your workflow with intelligent design solutions",
  "Unleash your creativity with next-generation design tools",
  "Create professional designs without the learning curve",
  "Elevate your brand with our powerful design platform"
];

// Array of possible subheadlines
const subheadlines = [
  "Transform your ideas into stunning visuals with the power of AI. No design experience required.",
  "Our AI-powered platform helps you create beautiful designs in minutes, not hours.",
  "Join thousands of creators who've simplified their design process with our intelligent tools.",
  "Skip the learning curve and start creating professional designs today with our intuitive platform.",
  "From concept to creation in record time. Experience the future of design with our AI tools.",
  "Our platform combines your vision with AI precision to create designs that truly stand out."
];

// Array of possible CTA button texts
const ctaTexts = [
  "Get Started Free",
  "Try It Now",
  "Start Creating",
  "Begin Your Journey",
  "Design For Free",
  "Join For Free",
  "Start Your Trial"
];

// Array of possible image URLs (from Pexels)
const imageUrls = [
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

// Function to get a random item from an array
const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Function to generate random content
export const generateRandomContent = () => {
  const randomIndex = Math.floor(Math.random() * headlines.length);
  
  return {
    headline: headlines[randomIndex],
    subheadline: subheadlines[randomIndex],
    ctaText: ctaTexts[randomIndex],
    imageUrl: imageUrls[randomIndex]
  };
};