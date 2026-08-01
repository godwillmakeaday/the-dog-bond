export const site = {
  name: "The Dog Bond",
  tagline: "Understanding man’s most social friend.",
  description:
    "The Dog Bond is a dog ownership intelligence platform for choosing, training, managing, and living responsibly with dogs in African households.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-dog-bond.vercel.app"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Start", href: "/start-here" },
  { label: "Use", href: "/use-the-dog-bond" },
  { label: "Search", href: "/search" },
  { label: "Tools", href: "/tools" },
  { label: "Partners", href: "/partners" }
];
