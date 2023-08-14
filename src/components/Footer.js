import React from 'react';

function Footer() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4">
        <section class="mb-4">
          <a class="btn btn-outline-light m-2" href="http://www.linkedin.com/in/michael-o-sullivan-a523a079" role="button">
          <i class="fab fa-linkedin"></i>
          </a>
          <a class="btn btn-outline-light m-2" href="https://github.com/michaelhallosullivan" role="button">
            <i class="fab fa-github"></i>
          </a>
          <a class="btn btn-outline-light m-2" href="https://steamcommunity.com/profiles/76561198002751511/" role="button">
            <i class="fab fa-steam"></i>
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;