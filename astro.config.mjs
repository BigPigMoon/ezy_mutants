// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://bigpigmoon.github.io",
  base: "ezy_mutants",
  integrations: [
    starlight({
      title: "Ezy Mutants",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/bigpigmoon/ezy_mutants",
        },
      ],
      sidebar: [
        {
          label: "Введение",
          link: "/ezy_mutants/intro",
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
    }),
  ],
});
