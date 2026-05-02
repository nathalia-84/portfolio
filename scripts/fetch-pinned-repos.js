#!/usr/bin/env node
/**
 * Busca os pinned repositories do GitHub via GraphQL API e gera
 * src/data/pinnedRepos.json. Roda como prebuild — falha silenciosa
 * permite que o build continue usando o JSON existente.
 *
 * Requer process.env.GITHUB_TOKEN com scope public_repo ou read:user.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUTPUT_PATH = resolve(ROOT, "src/data/pinnedRepos.json");
const ENV_PATH = resolve(ROOT, ".env");

const GITHUB_USER = "nathalia-84";
const QUERY = `
  query PinnedRepos($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            updatedAt
            primaryLanguage { name color }
            repositoryTopics(first: 8) { nodes { topic { name } } }
            object(expression: "HEAD:README.md") { ... on Blob { text } }
          }
        }
      }
    }
  }
`;

function loadDotEnv() {
  if (process.env.GITHUB_TOKEN || !existsSync(ENV_PATH)) return;
  const raw = readFileSync(ENV_PATH, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const [, k, v] = m;
    if (!(k in process.env)) {
      process.env[k] = v.replace(/^['"]|['"]$/g, "");
    }
  }
}

function truncateReadme(text, maxLines = 12) {
  if (!text) return "";
  return text.split("\n").slice(0, maxLines).join("\n");
}

function normalize(node) {
  return {
    name: node.name,
    description: node.description,
    url: node.url,
    homepageUrl: node.homepageUrl || null,
    primaryLanguage: node.primaryLanguage
      ? { name: node.primaryLanguage.name, color: node.primaryLanguage.color }
      : null,
    topics: (node.repositoryTopics?.nodes ?? []).map((t) => t.topic.name),
    stargazerCount: node.stargazerCount ?? 0,
    forkCount: node.forkCount ?? 0,
    updatedAt: node.updatedAt,
    readmePreview: truncateReadme(node.object?.text),
  };
}

async function main() {
  loadDotEnv();
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn(
      "[fetch-pinned-repos] GITHUB_TOKEN not set — skipping update, using existing fallback."
    );
    return 0;
  }

  let response;
  try {
    response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-prebuild",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: GITHUB_USER } }),
    });
  } catch (err) {
    console.warn("[fetch-pinned-repos] network error:", err.message);
    return 0;
  }

  if (!response.ok) {
    console.warn(
      `[fetch-pinned-repos] HTTP ${response.status} — skipping update, using existing fallback.`
    );
    return 0;
  }

  const json = await response.json();
  if (json.errors) {
    console.warn("[fetch-pinned-repos] GraphQL errors:", json.errors.map((e) => e.message).join("; "));
    return 0;
  }

  const nodes = json.data?.user?.pinnedItems?.nodes ?? [];
  if (nodes.length === 0) {
    console.warn("[fetch-pinned-repos] no pinned items found — keeping existing fallback.");
    return 0;
  }

  const projects = nodes.map(normalize);

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(projects, null, 2) + "\n", "utf8");
  console.log(`[fetch-pinned-repos] wrote ${projects.length} projects to ${OUTPUT_PATH}`);
  return 0;
}

main()
  .then((code) => process.exit(code ?? 0))
  .catch((err) => {
    console.warn("[fetch-pinned-repos] unexpected error:", err.message);
    process.exit(0);
  });
