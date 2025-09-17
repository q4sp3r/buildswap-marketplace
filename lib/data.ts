// lib/data.ts
export type Listing = {
  id: string;
  title: string;
  short: string;
  mrr: number;     // monthly revenue
  price: number;   // asking price
  category: string;
  status: "open" | "under_review" | "sold";
  heroImage?: string;
};

export const demoListings: Listing[] = [
  {
    id: "demo-1",
    title: "Micro SaaS: Uptime Pinger",
    short: "Simple uptime monitor, 120 users, email alerts",
    mrr: 780,
    price: 18000,
    category: "DevTools",
    status: "open",
    heroImage: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "demo-2",
    title: "Notion CRM Template",
    short: "Digital product with 2k sales total, 40/mo",
    mrr: 40,
    price: 2500,
    category: "Templates",
    status: "open",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "demo-3",
    title: "Podcast Show Notes AI",
    short: "AI summary tool, 46 paying users",
    mrr: 620,
    price: 16000,
    category: "AI",
    status: "under_review",
    heroImage: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200&auto=format&fit=crop"
  }
];