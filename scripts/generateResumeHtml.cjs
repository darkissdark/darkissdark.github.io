const fs = require('fs');
const path = require('path');
const profile = require('../data/profile.json');

const css = `
body { color: #222; font-family: 'Inter', Arial, sans-serif; line-height: 1.5; font-size: 14px; }
a { color: #222; font-size: 14px; position: relative; left: -3px; }
.cv-main { width: 65%; margin-left: 35%; }
.cv-header {  margin-bottom: 2rem; }
.cv-title { font-size: 18pxrem; font-weight: 700; margin-bottom: 0.2rem; text-transform: uppercase;}
.cv-role { font-size: 16pxrem; font-weight: 600; margin-bottom: 0.5rem; }
.cv-section { margin-bottom: 20px; }
.cv-aside { width: 30%; float: left; }
.mb-10 {margin-bottom: 10px;}
.mb-5 {margin-bottom: 5px;}
.mb-15 {margin-bottom: 15px;}
.cv-section-title { color: #222; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.7rem; letter-spacing: 0.01em; }
.cv-list {  padding: 0; margin: 0; }
.cv-list li {  margin-bottom: 5px; }
.cv-list.disc { list-style: disc; }
.cv-edu-list { list-style: none; padding: 0; margin: 0; }
.cv-edu-item { margin-bottom: 10px; }
.cv-edu-inst { font-weight: 600; font-size: 1.08rem; }
.cv-edu-year { font-size: 0.98rem; margin-left: 0.5rem; }
.cv-edu-link {  text-decoration: underline; margin-left: 0.3rem; }
.cv-footer { text-align: center; color: #bbb; font-size: 0.9rem; margin-top: 2.5rem; }
.flex{ display: flex; gap: 2rem; }
.bold { font-weight: 600; }
.size12 { font-size: 12px; }
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
  <header class="cv-header">
    <div class="cv-title">${profile.name}</div>
    <div class="cv-role">Fullstack Developer</div>
  </header>
  <aside class="cv-aside">
    <section class="cv-section">
        <div class="cv-section-title">Contacts</div>
        <ul class="cv-list">
          <li><a href="tel:+380939280755">+380 93 92 80 755</a></li>
          ${profile.contacts
              .map(
                  (c) => `<li><a href="${c.href}" class="cv-edu-link" target="_blank">${c.label}</a></li>`
              )
              .join('')}
          <li>${profile.location}</li>
        </ul>
    </section>
    <section class="cv-section">
        <div class="cv-section-title">Tech Skills</div>
        <ul class="cv-list disc">
            ${profile.skills.map((s) => `<li>${s}</li>`).join('')}
        </ul>
    </section>
    <section class="cv-section">
        <div class="cv-section-title">Tools</div>
        <ul class="cv-list disc">
            ${profile.tools.map((t) => `<li>${t}</li>`).join('')}
        </ul>
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Languages</div>
      <ul class="cv-list disc">
        ${profile.languages.map((l) => `<li>${l.language} (${l.level})</li>`).join('')}
      </ul>
    </section>
  </aside>
  <main class="cv-main">
    <section class="cv-section">
      <div class="cv-section-title">Summary</div>
      Inspired Fullstack developer with strong analytical thinking
      and well-developed organizational skills. Ambitious, highly
      responsible, punctual, and goal- oriented person, always
      ready to learn and gain new experiences. The ability to focus
      on details and time management are also good strengths of
      mine. Friendly team player with a good sense of humor.
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Project experience</div>
      
      ${profile.projects
          .map(
            (p) => 
      `<div class="cv-project">${p.visit ? `<a href="${p.visit}" target="_blank" class="cv-edu-link bold">${p.title}</a>` : ''}, <a href="${p.source}" target="_blank" class="cv-edu-link bold">Source</a> <span class="size12">(${p.tags.join(', ')})</span>
        <div class="cv-project-description mb-5 mt-5">${p.description}</div>
        <div class="cv-project-role mb-5 mb-15"><span class="bold">Role:</span> ${p.role}${p.type ? `, ${p.type} project` : ''}</div>
      </div>`
          )
          .join('')}
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
                            ? `<div class="cv-edu-desc"><a href="${e.link}" target="_blank" class="cv-edu-link">${e.linkText}</a></div>`
                            : ''
                    }${e.description ? `<div class="cv-edu-desc">${e.description}</div>` : ''}</li>`
            )
            .join('')}
      </ul>
    </section>
  </main>
</body>
</html>`;

const outPath = path.resolve(__dirname, '../public/viktor_medvid_fullstack.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('viktor_medvid_fullstack.html generated at:', outPath);
