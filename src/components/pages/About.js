import React from 'react';

export default function About() {
  return (
    <section class="p-5 bg-secondary">
      <div class="py-1 row">
        <div class="p-4 col-4">
          <img class="rounded border border-dark img-fluid" src="./assets/images/profile.jpg"/>
        </div>
        <div class="p-4 col-4">
          <h1 class="p-3 display-6">About Me</h1>
          <p class="p-4">
          My name is Michael O'Sullivan (He/Him). I am a 30 year old male born in the California Bay Area. I'm currently changing careers and expanding my skillset by taking the UCB extension coding bootcamp. I like to play video games, cook, go for hikes, and practice archery. Feel free to poke around the other tabs to see some of my work and reach out.
          </p>
        </div>
      </div>
    </section>
  );
}
