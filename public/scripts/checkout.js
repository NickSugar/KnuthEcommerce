//======================
//Paul
//======================
//think! you'll have a few different submit buttons, so you'll need button potentially multiple button classes, including ('copy shipping to billing' and 'purchase')

/* here's all of the code for the email validator
! one last potential issue- form clears whether email is accepted or not, may need to add functionality!*/





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
})
