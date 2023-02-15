function fun() {
  var name = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mail = document.getElementById("mail").value;
  var num = document.getElementById("pnum").value;
  var upass = document.getElementById("upass").value;
  var cpass = document.getElementById("cpass").value;
  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  if (
    name.trim() == " " ||
    lname.trim() == " " ||
    mail.trim() == " " ||
    num.trim() == "" ||
    upass.trim() == "" ||
    cpass.trim() == " "
  ) {
    alert("  Details are Missing here,please Enter your Full Details");
  } else if (cpass.trim() == "") {
    alert("please enter your confirm password");
  } else if (!validateEmail(mail)) {
    alert("Please enter a valid email address.");
    return false;
  } else if (!/\d/.test(upass) || !/[a-zA-Z]/.test(upass)) {
    alert("Password must contain both letters and numbers.");
    return false;
  } else if (cpass == upass) {
    alert(" Registration sucess");
  } else {
    alert("password does not match here, check your password again");
  }
}
