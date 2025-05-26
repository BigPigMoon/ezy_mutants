// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  site: "https://bigpigmoon.github.io",
  base: "ezy_mutants",
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      editLink: {
        baseUrl: "https://github.com/bigpigmoon/ezy_mutants/edit/master/",
      },
      title: "Ezy Mutants",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
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
