import React from 'react';

// contact form with fields for a name, an email address, and a message
// make send button work

export default function Contact() {
  return (
  <section class="p-5 bg-secondary">
    <p class="h1-responsive display-4 font-weight-bold text-center my-4">Contact</p>
    <p class="text-center w-responsive">Any inquiries about my skillset or potential career oppportunities? Feel free to contact me with the form below!</p>

    <div class="row mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
          <div class="form-group">
            <input type="text" class="form-control my-4" id="formGroupExampleInput" placeholder="First name"/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control my-4" id="formGroupExampleInput2" placeholder="Last name"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control my-4" id="formGroupExampleInput2" placeholder="name@domainname.com"/>
          </div>
          <div class="form-group">
            <textarea type="text" class="form-control my-4" rows="6" id="formGroupExampleInput2" placeholder="Enter a message for me here!"/>
          </div>
          <div class="text-center text-md-left">
              <button type="submit" class="btn btn-dark">Send</button>
          </div>
        </form>
    </div>

</section>

  );
}
