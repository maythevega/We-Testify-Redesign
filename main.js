
function validateFormOnSubmit(form) {
    reason = "";
    reason += validateFName(form.fname);
    reason += validateLName(form.lname);
    reason += validateEmail(form.email);

    confirmSubmit();

    //reason += validateNewsletter(form.newsletter);

    console.log(reason);
    if (reason.length > 0) {

        return false;
    } else {
        return false;
    }
}

function validateFName(fname) {
    var error = "";
  
    if (fname.value.length == 0) {
      fname.style.borderColor = 'Red';
      document.getElementById('fname-error').innerHTML = "The required field has not been filled in";
      var error = "1";
    } else {
      fname.style.borderColor = '#784212';
      document.getElementById('fname-error').innerHTML = '';
    }
    return error;
  }

  function validateLName(lname) {
    var error = "";
  
    if (lname.value.length == 0) {
      lname.style.borderColor = 'Red';
      document.getElementById('lname-error').innerHTML = "The required field has not been filled in";
      var error = "1";
    } else {
      lname.style.borderColor = '#784212';
      document.getElementById('lname-error').innerHTML = '';
    }
    return error;
  }
  
  // validate email as required field and format
function trim(s) {
  return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
  var error = "";
  var temail = trim(email.value); // value of field with whitespace trimmed off
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

  if (email.value == "") {
      email.style.borderColor = 'Red';
      document.getElementById('email-error').innerHTML = "Please enter an email address.";
      var error = "1";
  } else if (!emailFilter.test(temail)) { //test email for illegal characters
      email.style.borderColor = 'Red';
      document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
      var error = "2";
  } else if (email.value.match(illegalChars)) {
      email.style.borderColor = 'Red';
      var error = "3";
      document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
  } else {
      email.style.borderColor = '#784212';
      document.getElementById('email-error').innerHTML = '';
  }
  return error;
}

function confirmSubmit() {
  if (reason == ""){
    alert("YOU SUCCESSFULLY SUBMITED!");
    document.getElementById('form').reset();
  }else {
    alert("You have missing fields");
  }
};
