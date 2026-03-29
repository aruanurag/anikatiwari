import { defineConfig } from "astro/config";

const site = process.env.SITE ?? "https://anuragmohan.github.io";
const base = process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS === "true" ? "/anikatiwari" : "/");

export default defineConfig({
  site,
  base,
  output: "static"
});
