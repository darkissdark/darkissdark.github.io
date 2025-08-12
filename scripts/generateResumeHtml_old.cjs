
const fs = require('fs');
const path = require('path');
const profile = require('../data/profile.json');

const css = `
body { color: #222; font-family: 'Inter', Arial, sans-serif; }
.cv-main { max-width: 700px; margin: 2rem auto; background: #fff; border-radius: 1.2rem; box-shadow: 0 4px 24px #0001; padding: 2.5rem; }
.cv-header {  margin-bottom: 2rem; }
.cv-avatar { display: none; width: 8rem; height: 8rem; border-radius: 50%; box-shadow: 0 2px 8px #0002; object-fit: cover; margin-bottom: 1rem; flex-grow: 0; }
.cv-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 0.2rem; }
.cv-role { color: #2563eb; font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; }
.cv-contacts { display: flex; gap: 1.2rem; margin-bottom: 0.5rem; }
.cv-contacts a { color: #555; text-decoration: none; font-size: 1rem; border-bottom: 1px solid #555; }
.cv-location { color: #888; font-size: 0.95rem; margin-bottom: 0.5rem; }
.cv-section { margin-bottom: 2rem; }
.cv-section-title { color: #222; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.7rem; letter-spacing: 0.01em; }
.cv-list { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 0; }
.cv-list li { background: #e0e7ef; color: #2563eb; border-radius: 0.5rem; padding: 0.3rem 0.9rem; font-size: 0.98rem; font-weight: 500; }
.cv-list.tools li { background: #f3f4f6; color: #222; border: 1px solid #e0e7ef; }
.cv-list.lang li { background: #d1fae5; color: #047857; }
.cv-edu-list { list-style: none; padding: 0; margin: 0; }
.cv-edu-item { margin-bottom: 1.1rem; }
.cv-edu-inst { font-weight: 600; color: #1e3a8a; font-size: 1.08rem; }
.cv-edu-year { color: #555; font-size: 0.98rem; margin-left: 0.5rem; }
.cv-edu-desc, .cv-edu-link { color: #555; font-size: 0.97rem; }
.cv-edu-link { color: #2563eb; text-decoration: underline; margin-left: 0.3rem; }
.cv-footer { text-align: center; color: #bbb; font-size: 0.9rem; margin-top: 2.5rem; }
.flex{ display: flex; gap: 2rem; }
`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.name} — Resume</title>
  <style>${css}</style>
</head>
<body>
  <main class="cv-main">
    <header class="cv-header">
        <div class="flex">
        <img src="data:image/webp;base64,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" alt="${
            profile.name
        }" class="cv-avatar">
        <div>
            <div class="cv-title">${profile.name}</div>
            <div class="cv-role">Fullstack Developer</div>
            <div class="cv-contacts">
            ${profile.contacts
                .map(
                    (c) => `<a href="${c.href}" class="cv-edu-link" target="_blank">${c.label}</a>`
                )
                .join('')}
                <a href="https://darkissdark.github.io/" target="_blank">Portfolio</a>
            </div>
            <div class="cv-location">${profile.location}</div>
        </div>
      </div>
    </header>
    <div class="flex">
        <section class="cv-section">
            <div class="cv-section-title">Skills</div>
            <ul class="cv-list tools">
                ${profile.skills.map((s) => `<li>${s}</li>`).join('')}
            </ul>
        </section>
        <section class="cv-section">
            <div class="cv-section-title">Tools</div>
            <ul class="cv-list tools">
                ${profile.tools.map((t) => `<li>${t}</li>`).join('')}
            </ul>
        </section>
    </div>
    <section class="cv-section">
      <div class="cv-section-title">Languages</div>
      <ul class="cv-list tools">
        ${profile.languages.map((l) => `<li>${l.language} (${l.level})</li>`).join('')}
      </ul>
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Education & Certifications</div>
      <ul class="cv-edu-list">
        ${profile.education
            .map(
                (e) =>
                    `<li class="cv-edu-item"><span class="cv-edu-inst">${
                        e.institution
                    }</span><span class="cv-edu-year">${e.year}</span>${
                        e.link
                            ? `<a href="${e.link}" target="_blank" class="cv-edu-link">${e.linkText}</a>`
                            : ''
                    }${e.description ? `<div class="cv-edu-desc">${e.description}</div>` : ''}</li>`
            )
            .join('')}
      </ul>
    </section>
  </main>
</body>
</html>`;

const outPath = path.resolve(__dirname, '../public/Viktor_Medvid_Fullstack_Developer.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('Viktor_Medvid_Fullstack_Developer.html generated at:', outPath);
