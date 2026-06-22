/**
 * prerender.mjs — Static pre-rendering script for CBT
 *
 * Uses the project's already-installed puppeteer@25 to snapshot each route
 * after a 3-second hydration delay.
 *
 * Usage:  node prerender.mjs
 * Runs automatically via: npm run build  (postbuild hook)
 *
 * Requirements:
 *   - Run AFTER `vite build` so dist/ exists
 *   - `vite preview` must be available to serve the built app
 */

import puppeteer from "puppeteer";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";

const execAsync = promisify(exec);

const BASE_URL = "http://localhost:4173";
const DIST_DIR = "./dist";
const RENDER_DELAY_MS = 3000;

/** All public routes to pre-render (exclude * / NotFound) */
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/work",
  "/contact",
  "/terms",
  "/privacy",
];

async function writeSnapshot(route, html) {
  const isRoot = route === "/";
  const filePath = isRoot
    ? path.join(DIST_DIR, "index.html")
    : path.join(DIST_DIR, route.slice(1), "index.html");

  if (!isRoot) {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
  }

  await fs.writeFile(filePath, html, "utf8");
  console.log(`  ✓ Snapshot saved → ${filePath}`);
}

async function prerender() {
  console.log("\n🚀 Starting pre-render pipeline...\n");

  // Start vite preview server
  const previewProcess = exec("npx vite preview --port 4173");

  // Give it 2 seconds to boot
  await new Promise((r) => setTimeout(r, 2000));

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      console.log(`  Rendering ${url} ...`);

      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });

      // Navigate and wait for network to go idle
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Extra delay for framer-motion transitions & lazy components
      await new Promise((r) => setTimeout(r, RENDER_DELAY_MS));

      const html = await page.content();
      await page.close();

      await writeSnapshot(route, html);
    }
  } finally {
    await browser.close();
    previewProcess.kill();
  }

  console.log("\n✅ Pre-render complete. All routes snapshotted.\n");
}

prerender().catch((err) => {
  console.error("❌ Pre-render failed:", err);
  process.exit(1);
});
