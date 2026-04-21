#!/usr/bin/env node
// Regenerate public/Dhanya_Sridhar_Resume.pdf from public/resume.html.
// Requires WeasyPrint: `pip install weasyprint` (or `pipx install weasyprint`).
//
// Usage:
//   npm run build:resume

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = resolve(root, 'public/resume.html');
const pdf = resolve(root, 'public/Dhanya_Sridhar_Resume.pdf');

if (!existsSync(html)) {
  console.error(`Missing source: ${html}`);
  process.exit(1);
}

const pySnippet = `
import re, sys
from weasyprint import HTML
src = open(r'''${html}''').read()
# strip the browser-only "Save as PDF" toolbar
src = re.sub(r'<div class="toolbar[^"]*".*?</div>', '', src, flags=re.DOTALL)
HTML(string=src, base_url=r'''${resolve(root, 'public')}''').write_pdf(r'''${pdf}''')
print('wrote', r'''${pdf}''')
`;

const res = spawnSync('python3', ['-c', pySnippet], { stdio: 'inherit' });
if (res.status !== 0) {
  console.error('\nResume build failed. Is WeasyPrint installed?');
  console.error('  pip install weasyprint    # or: pipx install weasyprint');
  process.exit(res.status ?? 1);
}
