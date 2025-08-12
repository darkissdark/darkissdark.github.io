const fs = require('fs');
const path = require('path');
const profile = require('../data/profile.json');

const css = `
body { color: #222; font-family: 'Inter', Arial, sans-serif; }
.cv-main { width: 65%; margin-left: 35%; }
.cv-header {  margin-bottom: 2rem; }
.cv-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 0.2rem; text-transform: uppercase;}
.cv-role { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; }
.cv-contacts { display: flex; gap: 1.2rem; margin-bottom: 0.5rem; }
.cv-contacts a { color: #555; text-decoration: none; font-size: 1rem; border-bottom: 1px solid #555; }
.cv-section { margin-bottom: 2rem; }
.cv-aside { width: 30%; float: left; }
.mb-10 {margin-bottom: 10px;}
.cv-section-title { color: #222; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.7rem; letter-spacing: 0.01em; }
.cv-list { list-style: none; padding: 0; margin: 0; }
.cv-list li {  font-size: 0.98rem; }
.cv-list.tools { list-style: disc }
.cv-list.lang { list-style: disc }
.cv-edu-list { list-style: none; padding: 0; margin: 0; }
.cv-edu-item { margin-bottom: 1.1rem; }
.cv-edu-inst { font-weight: 600; font-size: 1.08rem; }
.cv-edu-year { font-size: 0.98rem; margin-left: 0.5rem; }
.cv-edu-desc, .cv-edu-link { font-size: 0.97rem; }
.cv-edu-link {  text-decoration: underline; margin-left: 0.3rem; }
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
  <header class="cv-header">
    <div class="cv-title">${profile.name}</div>
    <div class="cv-role">Fullstack Developer</div>
  </header>
  <aside class="cv-aside">
    <section class="cv-section">
        <div class="cv-section-title">Contacts</div>
        <ul class="cv-list tools">
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
    <section class="cv-section">
      <div class="cv-section-title">Languages</div>
      <ul class="cv-list tools">
        ${profile.languages.map((l) => `<li>${l.language} (${l.level})</li>`).join('')}
      </ul>
    </section>
  </aside>
  <main class="cv-main">
    <section class="cv-section">
      <div class="cv-section-title">Summary</div>
      
      <p>Demonstrated ability to lead development teams and deliver high-quality projects from concept to deployment. Proven track record of building sophisticated applications including interactive dashboards, e-commerce platforms, and responsive web applications. Committed to writing clean, maintainable code and implementing modern development workflows with CI/CD pipelines.</p>
      
      <p>Currently expanding skills through advanced education at IT School GoIT and School of Programming «Shpp», while actively contributing to open-source projects and maintaining a professional portfolio showcasing technical expertise and project management capabilities.</p>
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Project experience</div>
      
      ${profile.projects
          .map(
            (p) => 
      `<div class="cv-project">
        ${p.visit ? `<a href="${p.visit}" target="_blank" class="cv-edu-link">${p.title}</a>` : ''}, <a href="${p.source}" target="_blank" class="cv-edu-link">GitHub-repository</a> (${p.tags.join(', ')})
        <div class="cv-project-description">${p.description}</div>
        <div class="cv-project-role">Role: ${p.role}</div>
        <div class="cv-project-individual mb-10">${p.type} project.</div>
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

const outPath = path.resolve(__dirname, '../public/viktor_medvid_fullstack.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('viktor_medvid_fullstack.html generated at:', outPath);
