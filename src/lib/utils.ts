import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function toTitleCase(text: string) {
  return text.replace(/\w\S*/g, (
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  ));
};

export const navItems = [
  {
    label: 'Usage',
    url: 'usage'
  },
  {
    label: 'text variants',
    url: 'text-variants'
  },
  {
    label: 'hooks',
    url: 'hooks'
  }
];

export const features = [
  {
    name: "2M+ Weekly Framer Motion Users.",
    description:
      "Framer Motion is one of the most popular animation library for React. Find some quick and easy to use animations for your next project.",
  },
  {
    name: "Easy Integration.",
    description:
      "All the variants are super easy to integrate into your own project. Just copy and paste.",
  },
  {
    name: "Beautiful Animations.",
    description:
      "Hand crafted animations that are simple, subtle, and beautiful.",
  },
  {
    name: 'Custom hooks',
    description:
      "React custom hooks written in typescript"
  }
];

export const faqs = [
  {
    id: 1,
    question: "Why Use Animation and Hooks?",
    answer:
      "Animation and Hooks contains ready to use animations & hooks for your next project. These are production-ready and can be used in any of your apps.",
  },
  {
    id: 2,
    question: "Why Framer Motion?",
    answer:
      "Framer Motion is one of the most popular animation libraries for React with an average of 2M+ weekly downloads on NPM. It's easy to use and has a great API.",
  },
  {
    id: 3,
    question: "Do I need to pay to use Animation and Hooks?",
    answer:
      "No!!! It's completely free to use. You can copy and paste the code into your own project.",
  },
  {
    id: 4,
    question: "Can I use Animation and Hooks in my commercial projects?",
    answer:
      "Yes! You can use Animation and Hooks in your personal and commercial projects.",
  },
  {
    id: 5,
    question: "Do I need to give credit to Animation and Hooks?",
    answer:
      "No, you don't need to give credit to Animation and Hooks.",
  },
];

export let generateZeros = (n: number) => Array(n).fill(0);
