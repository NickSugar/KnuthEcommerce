
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

  formValidation();
});

function formValidation() {
    if ( $('#First-Name-Shipping1').val() === '') {
    /*this will need to change...maybe have a counter variable and then display a batch message if there's more than one field blank? build out validator first!*/
      console.log("need info");
    }
    else if( $('#Last-Name-Shipping1').val() === '') {
    console.log("need info");
    }
    else if( $('#Address-Line-1-Shipping1').val() === '') {
    console.log("need info");
    }
    /* state validation here! */
    else if( $('#Zip-Shipping1').val() === '') {
     console.log("need info");
    }
    else{
      console.log("entered info");
      console.log( $("#Address-Line-Shipping1").val());
    }
}
