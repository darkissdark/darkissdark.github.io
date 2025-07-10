const fs = require('fs');
const path = require('path');
const profile = require('../data/profile.json');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.name} — Resume</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-900">
  <main class="max-w-3xl mx-auto my-10 bg-white rounded-xl shadow-lg p-8">
    <header class="flex flex-col items-center mb-8">
      <img src="${profile.avatar}" alt="${profile.name}" class="w-32 h-32 rounded-full shadow mb-4">
      <h1 class="text-3xl font-bold">${profile.name}</h1>
      <p class="text-lg text-blue-700 font-semibold">Frontend Developer</p>
      <div class="flex gap-4 mt-3">
        ${profile.contacts.map(c => `<a href="${c.href}" target="${c.target}" class="text-gray-600 hover:text-black">${c.label}</a>`).join('')}
      </div>
      <div class="mt-4 text-sm text-gray-500">Location: ${profile.location}</div>
    </header>
    <section class="mb-8">
      <h2 class="text-xl font-bold mb-2 text-blue-800">Skills</h2>
      <ul class="flex flex-wrap gap-2">
        ${profile.skills.map(s => `<li class="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">${s}</li>`).join('')}
      </ul>
    </section>
    <section class="mb-8">
      <h2 class="text-xl font-bold mb-2 text-blue-800">Tools</h2>
      <ul class="flex flex-wrap gap-2">
        ${profile.tools.map(t => `<li class="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm">${t}</li>`).join('')}
      </ul>
    </section>
    <section class="mb-8">
      <h2 class="text-xl font-bold mb-2 text-blue-800">Languages</h2>
      <ul class="flex flex-wrap gap-2">
        ${profile.languages.map(l => `<li class="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm">${l.language} (${l.level})</li>`).join('')}
      </ul>
    </section>
    <section class="mb-8">
      <h2 class="text-xl font-bold mb-2 text-blue-800">Education & Certifications</h2>
      <ul class="space-y-4">
        ${profile.education.map(e => `<li><div class="font-semibold text-lg text-blue-900">${e.institution} <span class="text-gray-700 text-base">${e.year}</span></div>${e.link ? `<a href="${e.link}" target="_blank" class="text-blue-600 hover:underline text-base">${e.linkText}</a>` : ''}${e.description ? `<div class="text-gray-600 text-base">${e.description}</div>` : ''}</li>`).join('')}
      </ul>
    </section>
    <section class="mb-8">
      <h2 class="text-xl font-bold mb-2 text-blue-800">Projects</h2>
      <ul class="space-y-6">
        ${profile.projects.map(p => `<li class="border-l-4 border-blue-400 pl-4"><div class="flex flex-col md:flex-row md:items-center md:gap-4"><img src="${p.image}" alt="${p.title}" class="w-24 h-16 object-cover rounded mb-2 md:mb-0"><div><div class="font-bold text-lg">${p.title}</div><div class="text-gray-600">${p.description}</div><div class="flex flex-wrap gap-2 mt-1">${p.tags.map(tag => `<span class="bg-blue-50 text-blue-600 font-semibold px-2 py-1 rounded text-xs">${tag}</span>`).join('')}</div><div class="flex gap-3 mt-2">${p.visit && !p.disabled ? `<a href="${p.visit}" target="_blank" class="text-blue-700 hover:underline text-sm">Visit</a>` : ''}<a href="${p.source}" target="_blank" class="text-blue-700 hover:underline text-sm">Source</a></div></div></div></li>`).join('')}
      </ul>
    </section>
    <footer class="text-center text-gray-400 text-xs mt-8">&copy; 2024 Viktor Medvid.</footer>
  </main>
</body>
</html>`;

const outPath = path.resolve(__dirname, '../public/resume.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('resume.html generated at:', outPath);
