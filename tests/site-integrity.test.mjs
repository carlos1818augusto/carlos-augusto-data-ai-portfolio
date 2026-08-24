import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git" || entry.name === "node_modules") return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function localTarget(documentPath, rawReference) {
  if (!rawReference || /^(?:[a-z]+:|#|\/\/)/i.test(rawReference)) return null;

  const cleanReference = decodeURIComponent(rawReference.split(/[?#]/, 1)[0]);
  if (!cleanReference) return null;

  const candidate = resolve(dirname(documentPath), cleanReference);
  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    return join(candidate, "index.html");
  }
  return candidate;
}

const htmlFiles = walk(projectRoot).filter((path) => extname(path) === ".html");

test("all local links and assets referenced by HTML pages exist", () => {
  const brokenReferences = [];

  for (const htmlFile of htmlFiles) {
    const html = readFileSync(htmlFile, "utf8");
    const references = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map(
      (match) => match[1],
    );

    for (const reference of references) {
      const target = localTarget(htmlFile, reference);
      if (target && !existsSync(target)) {
        brokenReferences.push(
          `${relative(projectRoot, htmlFile)} -> ${reference}`,
        );
      }
    }
  }

  assert.deepEqual(brokenReferences, []);
});

test("every page provides essential metadata and Portuguese/English copy", () => {
  for (const htmlFile of htmlFiles) {
    const html = readFileSync(htmlFile, "utf8");
    const page = relative(projectRoot, htmlFile);

    assert.match(html, /<title>.+<\/title>/is, `${page}: missing title`);
    assert.match(html, /<meta\s+name=["']description["']/i, `${page}: missing description`);
    assert.match(html, /(?:data-copy-en|data-i18n)/i, `${page}: missing bilingual content hooks`);
  }
});

test("downloadable resumes are present in both languages", () => {
  assert.ok(existsSync(join(projectRoot, "assets/docs/curriculo-carlos-augusto-pt.pdf")));
  assert.ok(existsSync(join(projectRoot, "assets/docs/carlos-augusto-resume-en.pdf")));
});

test("all project cards open bilingual detailed case modals", () => {
  const projectPage = readFileSync(join(projectRoot, "projetos/index.html"), "utf8");
  const script = readFileSync(join(projectRoot, "script.js"), "utf8");
  const expectedCases = [
    "finance",
    "automation",
    "pipeline",
    "forecast",
    "rag",
    "whatsappAgent",
    "dataPlatform",
    "powerBiCockpit",
  ];

  const projectCases = [...projectPage.matchAll(/data-case=["']([^"']+)["']/g)].map(
    (match) => match[1],
  );
  assert.deepEqual(projectCases, expectedCases);

  for (const caseName of expectedCases) {
    assert.match(script, new RegExp(`\\n\\s{2}${caseName}: \\{`), `missing case data: ${caseName}`);
  }

  for (const field of ["challenge", "approach", "architecture", "delivery", "impact", "tags"]) {
    assert.match(projectPage, new RegExp(`data-modal-${field}`), `missing modal field: ${field}`);
  }
});

test("floating WhatsApp contact includes a visible nudge and interaction-safe sound", () => {
  const script = readFileSync(join(projectRoot, "script.js"), "utf8");
  const styles = readFileSync(join(projectRoot, "styles.css"), "utf8");

  assert.match(script, /float-contact-nudge/);
  assert.match(script, /AudioContext/);
  assert.match(script, /portfolio-contact-nudge/);
  assert.match(styles, /\.float-contact\.is-noticing/);
});
