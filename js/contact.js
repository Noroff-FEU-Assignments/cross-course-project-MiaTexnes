document
  .querySelector("#contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from being submitted in the traditional way

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Now you can do whatever you want with these values
    // For example, send them to a server
  });
