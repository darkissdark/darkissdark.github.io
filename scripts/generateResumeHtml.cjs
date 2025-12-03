const fs = require('fs');
const path = require('path');
const profile = require('../data/profile.json');

const css = `
body { color: #222; font-family: 'Inter', Arial, sans-serif; line-height: 1.5; font-size: 14px; }
a { color: #222; font-size: 14px; position: relative; left: -5px; }
a.static { position: static; left: 0; }
.cv-main { width: 65%; margin-left: 35%; }
.cv-header {  margin-bottom: 2rem; }
.cv-title { font-size: 18px; font-weight: 700; margin-bottom: 0.2rem; text-transform: uppercase;}
.cv-role { font-size: 16px; font-weight: 600; margin-bottom: 0.5rem; }
.cv-section { margin-bottom: 20px; }
.cv-aside { width: 30%; float: left; }
.mb-10 {margin-bottom: 10px;}
.mb-5 {margin-bottom: 5px;}
.mb-15 {margin-bottom: 15px;}
.cv-section-title { color: #222; font-size: 16px; font-weight: 700; margin-bottom: 0.7rem; letter-spacing: 0.01em; }
.cv-list {  padding: 0; margin: 0; }
.cv-list li {  margin-bottom: 5px; }
.cv-list.disc { list-style: disc; }
.cv-edu-list { list-style: none; padding: 0; margin: 0; }
.cv-edu-item { margin-bottom: 15px; }
.cv-edu-inst { font-weight: 600; font-size: 1.08rem; }
.cv-edu-year { font-size: 0.98rem; margin-left: 0.5rem; }
.cv-edu-link {  text-decoration: underline; margin-left: 0.3rem; }
.cv-footer { text-align: center; color: #bbb; font-size: 0.9rem; margin-top: 2.5rem; }
.flex{ display: flex; gap: 2rem; }
.bold { font-weight: 600; }
.size12 { font-size: 12px; }
.cv-exp-item { margin-bottom: 20px; }
.cv-exp-header { margin-bottom: 8px; }
.cv-exp-position { font-weight: 600; font-size: 1.05rem; }
.cv-exp-company { font-weight: 600; color: #555; }
.cv-exp-period { font-size: 0.95rem; color: #666; margin-left: 0.5rem; }
.cv-exp-tech { margin-top: 8px; }
.cv-exp-tech-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 4px; }
.cv-exp-tech-list { font-size: 0.9rem; color: #555; }
.cv-exp-resp { margin-top: 8px; }
.cv-exp-resp-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 4px; }
.cv-exp-resp-list { list-style: disc; padding-left: 20px; margin-top: 4px; }
.cv-exp-resp-list li { margin-bottom: 3px; font-size: 0.9rem; color: #555; }
`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.name} ${profile.role} — Resume</title>
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
          <li><a class="static" href="tel:+380939280755">+380 93 92 80 755</a></li>
          ${profile.contacts
              .map(
                  (c) =>
                      `<li><a class="static" href="${c.href}" class="cv-edu-link" target="_blank">${
                          c.label === 'Email' ? 'darkissdark@gmail.com' : c.label
                      }</a></li>`
              )
              .join('')}
          <li>${profile.location}</li>
        </ul>
    </section>
    <section class="cv-section">
        <div class="cv-section-title">Tech Skills</div>
        <ul class="cv-list disc">
            ${profile.skills
                .reduce((acc, skill, index) => {
                    if (index % 2 === 0) {
                        if (index + 1 < profile.skills.length) {
                            acc.push(`<li>${skill}, ${profile.skills[index + 1]}</li>`);
                        } else {
                            acc.push(`<li>${skill}</li>`);
                        }
                    }
                    return acc;
                }, [])
                .join('')}
        </ul>
    </section>
    <section class="cv-section">
        <div class="cv-section-title">Tools</div>
        <ul class="cv-list disc">
            ${profile.tools
                .reduce((acc, tool, index) => {
                    if (index % 2 === 0) {
                        if (index + 1 < profile.tools.length) {
                            acc.push(`<li>${tool}, ${profile.tools[index + 1]}</li>`);
                        } else {
                            acc.push(`<li>${tool}</li>`);
                        }
                    }
                    return acc;
                }, [])
                .join('')}
        </ul>
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Languages</div>
      <ul class="cv-list disc">
        ${profile.languages.map((l) => `<li>${l.language} - ${l.level}</li>`).join('')}
      </ul>
    </section>
  </aside>
  <main class="cv-main">
    <section class="cv-section">
      <div class="cv-section-title">Summary</div>
      Fullstack developer with strong front-end expertise and growing back-end skills. Responsible, adaptable, and a great team fit, with proven strengths in time management and task prioritization.
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Project experience</div>
      
      ${profile.projects
          .filter((p) => !p.cvDisabled)
          .map(
              (p) =>
                  `<div class="cv-project">${
                      p.visit
                          ? `<a href="${p.visit}" target="_blank" class="cv-edu-link bold">${p.title}</a>`
                          : ''
                  }| ${
                      p.source
                          ? `<a href="${p.source}" target="_blank" class="cv-edu-link bold">Source</a>`
                          : ''
                  } <span class="size12">(${p.tags.join(', ')})</span>
        <div class="cv-project-description mb-5 mt-5">${p.description}</div>
        <div class="cv-project-role mb-5 mb-15"><span class="bold">Role:</span> ${p.role}${
                      p.type ? `, ${p.type} project` : ''
                  }</div>
      </div>`
          )
          .join('')}
    </section>
    <section class="cv-section">
      <div class="cv-section-title">Work Experience</div>
      ${profile.experience
          .map(
              (exp) =>
                  `<div class="cv-exp-item">
        <div class="cv-exp-header">
          <span class="cv-exp-position">${exp.position}</span>
          <span class="cv-exp-period">${exp.period}</span>
        </div>
        <div class="cv-exp-company">${exp.company}</div>
        ${
            exp.technologies && exp.technologies.length > 0
                ? `<div class="cv-exp-tech">
            <div class="cv-exp-tech-title">Technologies:</div>
            <div class="cv-exp-tech-list">${exp.technologies.join(', ')}</div>
          </div>`
                : ''
        }
        ${
            exp.methodologies && exp.methodologies.length > 0
                ? `<div class="cv-exp-tech">
            <div class="cv-exp-tech-title">Methodologies:</div>
            <div class="cv-exp-tech-list">${exp.methodologies.join(', ')}</div>
          </div>`
                : ''
        }
        ${
            exp.tools && exp.tools.length > 0
                ? `<div class="cv-exp-tech">
            <div class="cv-exp-tech-title">Tools:</div>
            <div class="cv-exp-tech-list">${exp.tools.join(', ')}</div>
          </div>`
                : ''
        }
        ${
            exp.responsibilities && exp.responsibilities.length > 0
                ? `<div class="cv-exp-resp">
            <div class="cv-exp-resp-title">Responsibilities:</div>
            <ul class="cv-exp-resp-list">
              ${exp.responsibilities.map((r) => `<li>${r}</li>`).join('')}
            </ul>
          </div>`
                : ''
        }
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

const outPath = path.resolve(__dirname, '../public/Viktor_Medvid_Fullstack_Developer.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('Viktor_Medvid_Fullstack_Developer.html generated at:', outPath);
