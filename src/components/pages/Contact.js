import React from 'react';

export default function Contact() {
  return (
  <section class="p-5 bg-secondary">
    <p class="h1-responsive display-4 font-weight-bold text-center my-4">Contact</p>
    <p class="text-center w-responsive">Any inquiries about my skillset or potential career oppportunities? Feel free to contact me with the form below!</p>
    <div class="row mb-5">
        <form id="contact-form" action="mailto:michaelhallosullivan@gmail.com" method="POST">
          <div class="form-group">
            <input type="text" class="form-control my-4" id="first" placeholder="First name" required/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control my-4" id="last" placeholder="Last name" required/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control my-4" id="email" placeholder="name@domainname.com" pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$" required/>
            <div class="valid-feedback feedback-pos">
            Looks good!
            </div>
            <div class="invalid-feedback feedback-pos">
              Please input valid email ID
            </div>
          </div>
          <div class="form-group">
            <textarea type="text" class="form-control my-4" rows="6" id="message" placeholder="Enter a message for me here!" required/>
          </div>
          <div class="text-center text-md-left">
              <button type="submit" class="btn btn-dark">Send</button>
          </div>
        </form>
    </div>
  </section>
  );
}
