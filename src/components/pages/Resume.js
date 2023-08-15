import React from 'react';

export default function Resume() {
  return (
    <section class="p-5 bg-2">
      <div class="px-5 pt-3">
      <h1 class="display-6">Selected Coding Proficiencies</h1>
      <ul class="m-3">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Handlebars</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
      </div>
      <div class="px-5">
      <h1 class="display-6">Resumé</h1>
      <a class="btn btn-danger m-4 p-2" href="./assets/resume.pdf" download="resume">
      Download
      </a>
      </div>
    </section>
  );
}
