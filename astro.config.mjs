// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://TON_USERNAME.github.io',
    base: '/pulsars-docs',
    integrations: [
        starlight({
            title: 'Pulsars Docs',
            customCss: ['./src/styles/custom.css'],
            sidebar: [
                {
                    label: 'Introduction',
                    items: [{ label: 'Univers Pulsars', slug: 'pulsars-intro' }],
                },
                {
                    label: 'Univers',
                    badge: { text: 'Lore', variant: 'note' },
                    autogenerate: { directory: 'univers' },
                },
                {
                    label: 'Personnages',
                    badge: { text: 'Cast', variant: 'tip' },
                    autogenerate: { directory: 'personnages' },
                },
                {
                    label: 'Production',
                    badge: { text: 'Pipeline', variant: 'caution' },
                    autogenerate: { directory: 'production' },
                },
                {
                    label: 'Bible graphique',
                    badge: { text: 'Design', variant: 'tip' },
                    autogenerate: { directory: 'bible-graphique' },
                },
                {
                    label: 'BD',
                    autogenerate: { directory: 'bd' },
                },
                {
                    label: 'TikTok',
                    badge: { text: 'Format', variant: 'caution' },
                    autogenerate: { directory: 'tiktok' },
                },
                {
                    label: 'Scripts',
                    badge: { text: 'Écriture', variant: 'note' },
                    autogenerate: { directory: 'scripts' },
                },
            ],
        }),
        react(),
    ],
});
