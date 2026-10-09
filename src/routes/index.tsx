import { createFileRoute } from '@tanstack/react-router';
import { InlayHomepage } from '@/components/inlay/homepage';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Inlay Health — Your health, all in one place' },
      { name: 'description', content: 'Bring available health records together, understand changes with AI assistance, and help your doctor see the bigger picture. Connected by your permission.' },
      { property: 'og:title', content: 'Inlay Health — Your health, all in one place' },
      { property: 'og:description', content: 'One connected health picture for patients and doctors. Understand your records, follow trends, and stay in control of sharing.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: InlayHomepage,
});
