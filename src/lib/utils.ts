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

export const faqs = [
  {
    id: 1,
    question: "Why Use Variant Vault?",
    answer:
      "Variant Vault contains ready to use animations & variants for your next project. These are production-ready and can be used in any of your apps.",
  },
  {
    id: 2,
    question: "Why Framer Motion?",
    answer:
      "Framer Motion is one of the most popular animation libraries for React with an average of 2M+ weekly downloads on NPM. It's easy to use and has a great API.",
  },
  {
    id: 3,
    question: "Do I need to pay to use Variant Vault?",
    answer:
      "No!!! It's completely free to use. You can copy and paste the code into your own project.",
  },
  {
    id: 4,
    question: "Can I use Variant Vault in my commercial projects?",
    answer:
      "Yes! You can use Variant Vault in your personal and commercial projects.",
  },
  {
    id: 5,
    question: "Do I need to give credit to Variant Vault?",
    answer:
      "No, you don't need to give credit to Variant Vault. However, if you want to, you can link to Variant Vault on Twitter @abdo_eth.",
  },
];
