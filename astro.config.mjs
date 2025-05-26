// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://bigpigmoon.github.io",
  base: "ezy_mutants",
  integrations: [
    starlight({
      editLink: {
        baseUrl: "https://github.com/bigpigmoon/ezy_mutants/edit/master/",
      },
      title: "Ezy Mutants",
      defaultLocale: "ru",
      locales: {
        ru: {
          label: "Русский",
          lang: "ru",
        },
        en: {
          label: "English",
        },
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Введение",
          link: "/intro",
        },
        {
          label: "Мир",
          autogenerate: { directory: "world" },
        },
        {
          label: "Персонаж",
          autogenerate: { directory: "char" },
        },
        {
          label: "Механики игры",
          autogenerate: { directory: "game" },
        },
        {
          label: "Раздел мастера",
          autogenerate: { directory: "master" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/bigpigmoon/ezy_mutants",
        },
        {
          icon: "telegram",
          label: "Telegram",
          href: "https://t.me/gamedevshiz",
        },
      ],
    }),
  ],
});
