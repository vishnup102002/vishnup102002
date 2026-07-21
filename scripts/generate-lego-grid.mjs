/**
 * generate-lego-grid.mjs
 * ------------------------------------------------------------------
 * Fetches a GitHub user's REAL contribution calendar via the GraphQL
 * API and renders it as an animated SVG "Lego baseplate" — each day
 * becomes a brick, colour-coded by real commit intensity, with a
 * minifig that walks across the build using native SMIL animation
 * (the same technique github.com/Platane/snk uses for its snake,
 * which is why it animates directly on github.com with no JS).
 *
 * Usage:
 *   GH_LOGIN=vishnup102002 GH_TOKEN=xxxx node generate-lego-grid.mjs
 *
 * Output:
 *   dist/lego-grid.svg
 *   dist/lego-grid-dark.svg
 * ------------------------------------------------------------------
 */

import { writeFileSync, mkdirSync } from "fs";

const GH_LOGIN = process.env.GH_LOGIN;
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;

if (!GH_LOGIN || !GH_TOKEN) {
  console.error("Missing GH_LOGIN or GH_TOKEN environment variables.");
  process.exit(1);
}

const QUERY = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
            weekday
          }
        }
      }
    }
  }
}`;

async function fetchContributions() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${GH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { login: GH_LOGIN } }),
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
  }
  return json.data.user.contributionsCollection.contributionCalendar.weeks;
}

// Real GitHub-style intensity tiers -> Lego brick colours
function tierFor(count) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

const PALETTES = {
  light: {
    bg: "#0b1220",
    seam: "#0f172a",
    tiers: ["#334155", "#14532d", "#15803d", "#22c55e", "#4ade80"],
    glow: "#4ade80",
  },
  dark: {
    bg: "#05070d",
    seam: "#000000",
    tiers: ["#1e293b", "#065f46", "#0d9448", "#10b981", "#4ade80"],
    glow: "#4ade80",
  },
};

const CELL = 12; // px per brick, centre-to-centre
const BRICK = 9; // visible brick size
const STUD_R = 2.1;
const MARGIN_X = 16;
const MARGIN_TOP = 34; // room for the minifig's walking lane
const MARGIN_BOTTOM = 10;

function buildBrick(x, y, colorTiers, tier, dayIndex, isRecent) {
  const fill = colorTiers[tier];
  const cx = x + BRICK / 2;
  const studY = y - STUD_R * 0.9;

  // Stagger the "snap-in" animation so bricks appear to be placed
  // left-to-right, in the same order the minifig walks past them.
  const delay = (dayIndex * 0.012).toFixed(3);
  const animate = isRecent
    ? `
      <animate attributeName="opacity" values="0.35;1;1" keyTimes="0;0.08;1"
        dur="9s" begin="${delay}s" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="scale"
        values="0.4;1.15;1" keyTimes="0;0.08;1" dur="9s" begin="${delay}s"
        repeatCount="indefinite" additive="sum" />`
    : "";

  return `
    <g transform="translate(${x} ${y})">
      <g style="transform-origin:${BRICK / 2}px ${BRICK / 2}px">
        <rect x="0" y="0" width="${BRICK}" height="${BRICK}" rx="1.6"
          fill="${fill}" stroke="#0f172a" stroke-width="0.9" />
        <circle cx="${BRICK / 2}" cy="0" r="${STUD_R}"
          fill="${fill}" stroke="#0f172a" stroke-width="0.8" />
        ${animate}
      </g>
    </g>`;
}

function render(weeks, palette, includeMinifig) {
  const cols = weeks.length;
  const width = MARGIN_X * 2 + cols * CELL;
  const height = MARGIN_TOP + 7 * CELL + MARGIN_BOTTOM;

  let bricks = "";
  let dayIndex = 0;
  const flatDays = [];

  weeks.forEach((week, wi) => {
    week.contributionDays.forEach((day) => {
      const tier = tierFor(day.contributionCount);
      const x = MARGIN_X + wi * CELL;
      const y = MARGIN_TOP + day.weekday * CELL;
      flatDays.push({ x, y, tier });
      dayIndex++;
    });
  });

  // Mark the most recent 14 active days as "recent" so the animation
  // reads as fresh builds snapping into place on loop.
  const recentCutoff = Math.max(0, flatDays.length - 14);
  flatDays.forEach((d, i) => {
    bricks += buildBrick(
      d.x,
      d.y,
      palette.tiers,
      d.tier,
      i,
      i >= recentCutoff && d.tier > 0
    );
  });

  const walkWidth = width - MARGIN_X * 2;
  const minifig = includeMinifig
    ? `
    <g id="minifig">
      <rect x="-3" y="-13" width="6" height="8" rx="1.4" fill="#f43f5e" stroke="#0f172a" stroke-width="0.9"/>
      <circle cx="0" cy="-17" r="4" fill="#facc15" stroke="#0f172a" stroke-width="0.9"/>
      <rect x="-2.6" y="-5" width="2.2" height="7" rx="0.8" fill="#1e3a8a" stroke="#0f172a" stroke-width="0.7"/>
      <rect x="0.4" y="-5" width="2.2" height="7" rx="0.8" fill="#1e3a8a" stroke="#0f172a" stroke-width="0.7"/>
      <animateMotion dur="18s" repeatCount="indefinite"
        path="M 0 0 H ${walkWidth}" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
      <animateTransform attributeName="transform" type="translate"
        additive="sum" values="0 0; 0 -1.4; 0 0" dur="0.5s" repeatCount="indefinite" />
    </g>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}">
  <rect x="0" y="0" width="${width}" height="${height}" fill="${palette.bg}" rx="10"/>
  <line x1="${MARGIN_X - 4}" y1="${MARGIN_TOP - 12}" x2="${width - MARGIN_X + 4}" y2="${MARGIN_TOP - 12}"
    stroke="#1e293b" stroke-width="1" stroke-dasharray="2 3"/>
  <g transform="translate(${MARGIN_X} ${MARGIN_TOP - 12})">
    ${minifig}
  </g>
  ${bricks}
</svg>`;
}

async function main() {
  const weeks = await fetchContributions();
  mkdirSync("dist", { recursive: true });

  writeFileSync("dist/lego-grid.svg", render(weeks, PALETTES.light, true));
  writeFileSync("dist/lego-grid-dark.svg", render(weeks, PALETTES.dark, true));

  console.log(`Rendered ${weeks.length} weeks for ${GH_LOGIN}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
