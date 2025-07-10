const fs = require('fs');
const path = require('path');
const profile = require('../data/profile.json');

const css = `
body { background: #f3f4f6; color: #222; font-family: 'Inter', Arial, sans-serif; }
.cv-main { max-width: 700px; margin: 2rem auto; background: #fff; border-radius: 1.2rem; box-shadow: 0 4px 24px #0001; padding: 2.5rem; }
.cv-header { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.cv-avatar { width: 8rem; height: 8rem; border-radius: 50%; box-shadow: 0 2px 8px #0002; object-fit: cover; margin-bottom: 1rem; }
.cv-title { font-size: 2.2rem; font-weight: 700; margin-bottom: 0.2rem; }
.cv-role { color: #2563eb; font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; }
.cv-contacts { display: flex; gap: 1.2rem; margin-bottom: 0.5rem; }
.cv-contacts a { color: #555; text-decoration: none; font-size: 1rem; transition: color 0.2s; }
.cv-contacts a:hover { color: #2563eb; }
.cv-location { color: #888; font-size: 0.95rem; margin-bottom: 0.5rem; }
.cv-section { margin-bottom: 2rem; }
.cv-section-title { color: #2563eb; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.7rem; letter-spacing: 0.01em; }
.cv-list { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 0; }
.cv-list li { background: #e0e7ef; color: #2563eb; border-radius: 0.5rem; padding: 0.3rem 0.9rem; font-size: 0.98rem; font-weight: 500; }
.cv-list.tools li { background: #f3f4f6; color: #222; border: 1px solid #e0e7ef; }
.cv-list.lang li { background: #d1fae5; color: #047857; }
.cv-edu-list, .cv-proj-list { list-style: none; padding: 0; margin: 0; }
.cv-edu-item { margin-bottom: 1.1rem; }
.cv-edu-inst { font-weight: 600; color: #1e3a8a; font-size: 1.08rem; }
.cv-edu-year { color: #555; font-size: 0.98rem; margin-left: 0.5rem; }
.cv-edu-desc, .cv-edu-link { color: #555; font-size: 0.97rem; }
.cv-edu-link { color: #2563eb; text-decoration: underline; margin-left: 0.3rem; }
.cv-proj-item { border-left: 4px solid #2563eb; padding-left: 1rem; margin-bottom: 1.5rem; }
.cv-proj-title { font-weight: 700; font-size: 1.08rem; color: #1e293b; }
.cv-proj-desc { color: #555; font-size: 0.97rem; margin: 0.2rem 0 0.4rem 0; }
.cv-proj-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.3rem; }
.cv-proj-tag { background: #e0e7ef; color: #2563eb; border-radius: 0.4rem; padding: 0.15rem 0.7rem; font-size: 0.85rem; font-weight: 500; }
.cv-proj-links { display: flex; gap: 1rem; }
.cv-proj-links a { color: #2563eb; font-size: 0.97rem; text-decoration: underline; }
.cv-footer { text-align: center; color: #bbb; font-size: 0.9rem; margin-top: 2.5rem; }
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
      <img src="${profile.avatar}" alt="${profile.name}" class="cv-avatar">
      <div class="cv-title">${profile.name}</div>
      <div class="cv-role">Frontend Developer</div>
      <div class="cv-contacts">
        ${profile.contacts
            .map((c) => `<a href="${c.href}" target="${c.target}">${c.label}</a>`)
            .join('')}
      </div>
      <div class="cv-location">${profile.location}</div>
    </header>
    <section class="cv-section">
      <div class="cv-section-title">Skills</div>
      <ul class="cv-list">
        ${profile.skills.map((s) => `<li>${s}</li>`).join('')}
      </ul>
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Tools</div>
      <ul class="cv-list tools">
        ${profile.tools.map((t) => `<li>${t}</li>`).join('')}
      </ul>
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Languages</div>
      <ul class="cv-list lang">
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
    <section class="cv-section">
      <div class="cv-section-title">Projects</div>
      <ul class="cv-proj-list">
        ${profile.projects
            .map(
                (p) =>
                    `<li class="cv-proj-item"><div class="cv-proj-title">${
                        p.title
                    }</div><div class="cv-proj-desc">${
                        p.description
                    }</div><div class="cv-proj-tags">${p.tags
                        .map((tag) => `<span class="cv-proj-tag">${tag}</span>`)
                        .join('')}</div><div class="cv-proj-links">${
                        p.visit && !p.disabled
                            ? `<a href="${p.visit}" target="_blank">Visit</a>`
                            : ''
                    }<a href="${p.source}" target="_blank">Source</a></div>${
                        p.image
                            ? `<img src="${p.image}" alt="${p.title}" style="width:90px; margin-top:8px; border-radius:8px;">`
                            : ''
                    }</li>`
            )
            .join('')}
      </ul>
    </section>
    <footer class="cv-footer">&copy; 2024 Viktor Medvid.</footer>
  </main>
</body>
</html>`;

const outPath = path.resolve(__dirname, '../public/viktor_medvid_cv.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('viktor_medvid_cv.html generated at:', outPath);
