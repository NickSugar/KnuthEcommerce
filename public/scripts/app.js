
//think! you'll have a few different submit buttons, so you'll need button potentially multiple button classes, including ('copy shipping to billing' and 'purchase')


$('button').on('click', function() {
  var emailAddress = $('input[email="email address"]').val();
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailAddress.length === 0) {
    alert('Thank you for your interest in Mystical Swords! please enter an email address');
  }
  else if (re.test(emailAddress)) {
    alert('welcome to our ephemeral realm! your email has been approved by the Mustakraken');
  }
  else (
    alert('please enter a valid email address')
  )

});

// if (emailAddress === "") {
//   alert('please enter an email address');
// }
