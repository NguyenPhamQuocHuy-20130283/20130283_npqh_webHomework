$(document).ready(function () {
  $("#fname").on("input", function () {
    var fname = $(this).val();
    if (fname == "") {
      $("#fname-error").text("First name is required!");
    } else {
      $("#fname-error").text("");
    }
  });

  // Validate the email field
  $("#email").on("input", function () {
    var email = $(this).val();
    if (email == "") {
      $("#email-error").text("Email is required!");
    } else if (!isValidEmail(email)) {
      // Display an error message
      $("#email-error").text("Email is not valid!");
    } else {
      // Remove the error message
      $("#email-error").text("");
    }
  });

  // Validate the phone field
  $("#phone").on("input", function () {
    var phone = $(this).val();
    if (phone == "") {
      // Display an error message
      $("#phone-error").text("Phone number is required!");
    } else if (!isValidPhone(phone)) {
      // Display an error message
      $("#phone-error").text("Phone number is not valid!");
    } else {
      // Remove the error message
      $("#phone-error").text("");
    }
  });

  // Validate the message field
  $("#message").on("input", function () {
    var message = $(this).val();
    if (message == "") {
      // Display an error message
      $("#message-error").text("Message is required!");
    } else {
      // Remove the error message
      $("#message-error").text("");
    }
  });
});

// Function to validate email address
function isValidEmail(email) {
  var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

// Function to validate phone number
function isValidPhone(phone) {
  var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
}
