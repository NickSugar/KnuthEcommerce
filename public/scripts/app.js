
//think! you'll have a few different submit buttons, so you'll need button potentially multiple button classes, including ('copy shipping to billing' and 'purchase')

/* here's all of the code for the email validator
! one last potential issue- form clears whether email is accepted or not, may need to add functionality!*/

$('#submit-email').on('click', function() {
  var emailAddress = $('#email-input').val();

  // var emailAddress = $('input[email="email address"]').val();
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

/* here's where we start with the form validator JS!
1- thinking it makes sense to have two separate forms,

validator will need to run when client hits the copy button, and
*/





$('#purchase').on('click', function() {
  console.log( $("#First-Name-Shipping1").val()
);
  formValidation();
});

var firstName = $("#First-Name-Shipping1").val()

console.log(firstName);



function formValidation() {
    if( $('#First-Name-Shipping1').val() === 'undefined') {
      console.log("need info");
    }
    else {
      console.log("entered info");
    }




}
