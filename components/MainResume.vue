<template>
  <main class="flex-1">
    <h1 class="sr-only">Viktor Medvid – Frontend Developer</h1>

    <section
      class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-4 animate-fadeIn"
    >
      <h2 class="text-2xl font-bold mb-2">Summary of Qualifications</h2>
      <p>
        Front-end developer with experience in developing and supporting web
        applications. Proficient in collaborating with cross-functional teams to
        deliver high-quality software solutions.
      </p>
    </section>

    <section
      class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-4 animate-fadeIn"
    >
      <div class="flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">Hard Skills</h3>
          <ul class="list-disc pl-5">
            <li>HTML/CSS (SASS/SCSS)</li>
            <li>JavaScript</li>
            <li>Vue 2</li>
            <li>Webpack 4</li>
            <li>Git</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Soft Skills</h3>
          <ul class="list-disc pl-5 mb-0">
            <li>Effective team player with strong communication skills</li>
            <li>Ability to troubleshoot and resolve complex issues</li>
            <li>
              Quick to learn and adapt to new technologies and methodologies
            </li>
            <li>Efficient in managing tasks and meeting deadlines</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-4 animate-fadeIn"
    >
      <h2 class="text-2xl font-bold mb-2">Portfolio</h2>
      <ul class="mb-0">
        <li>
          <strong>DiGi - Digital Agency</strong> -
          <a
            class="text-blue-600 hover:underline"
            href="https://darkissdark.github.io/di-gi/"
            target="_blank"
            rel="noopener noreferrer"
            >View Project →</a
          >
          <br />
          <small
            >A modern digital agency website with smooth animations and
            responsive design</small
          >
        </li>
      </ul>
    </section>

    <section
      class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-4 animate-fadeIn"
    >
      <h2 class="text-2xl font-bold mb-2">Experience</h2>
      <p>in progress..</p>
    </section>

    <section
      class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-4 animate-fadeIn"
    >
      <h2 class="text-2xl font-bold mb-2">Education</h2>
      <p>
        <strong>Vinnytsia National Technical University</strong>, Institute of
        Civil Engineering, Thermal Power Engineering and Gas Supply (2008 -
        2013)
      </p>
      <p>
        <strong>Vinnytsia Technical Lyceum</strong>, Specialization in
        Informatics and Computer Technology (2004 - 2008)
      </p>
    </section>

    <section
      class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-4 animate-fadeIn"
    >
      <h2 class="text-2xl font-bold mb-2">Additional Education</h2>
      <p>
        <strong>School of Programming «Shpp»</strong>
        (2024 - 2025)
        <a
          class="text-blue-600 hover:underline"
          href="https://diploma.programming.org.ua/en/d/ojM7n5vrkRO6DpdG1aebVW8Z43Y0yaEL"
          target="_blank"
          >Computer Science Basics</a
        >
      </p>
    </section>

    <section
      class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-0 animate-fadeIn"
    >
      <h2 class="text-2xl font-bold mb-2">Hobbies</h2>
      <p class="mb-0">Traveling, Digital gaming</p>
    </section>
  </main>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: perspective(800px) rotateX(8deg) rotateY(8deg) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}
</style>
