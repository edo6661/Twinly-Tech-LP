import {
  Code,
  Database,
  Figma,
  Github,
  Globe,
  Layers,
  Layout,
  MonitorSmartphone,
  Server,
  Smartphone,
} from "lucide-react";

export const DUMMY_PROJECTS = [
  {
    id: 1,
    translationKey: "carrefour",
    type: "web",
    apps: [Figma, Github, Code, Database],
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 2,
    translationKey: "nortal",
    type: "web",
    apps: [Figma, Github],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 3,
    translationKey: "fintech",
    type: "mobile",
    apps: [Github, Database, Smartphone],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173ff9e5c52?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 4,
    translationKey: "health",
    type: "mobile",
    apps: [Figma, Code, Smartphone],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173ff9e5c52?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 5,
    translationKey: "company",
    type: "web",
    apps: [Figma, Globe],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 6,
    translationKey: "ewallet",
    type: "web",
    apps: [Server, Database, Code],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 7,
    translationKey: "smarthome",
    type: "mobile",
    apps: [MonitorSmartphone, Code, Github],
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 8,
    translationKey: "analytics",
    type: "web",
    apps: [Layout, Figma, Github],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    ],
  },
];
export const CARD_COLORS_PROJECT = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#f97316",
];
export const FILTER_OPTIONS_PROJECT = [
  { id: "all", icon: Layers },
  { id: "web", icon: Globe },
  { id: "mobile", icon: Smartphone },
];
export const SPRING_CONFIG_PROJECT = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 1,
} as const;
