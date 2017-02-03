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
$("#State-Shipping-1").on('change', function() {
console.log(this.selectedIndex);
});


$('#purchase').on('click', function() {




    // if ( !ShippingValidation()) {
    // alert("please complete your shipping info")
    // }
 //  else if (!BillingValidation()) //build this out!
 //
  // else
  if(!cCValidation()) {
    alert('Please review your payment information')
  } //build this out!

    else {
      alert('thank you for your purchase!')
 }

});



function ShippingValidation() {
  // instead of console logs or a bunch of alerts, create a variable, increment it, at end of function, log an alert of form complete if = 0 or form incomplete if greater than 0!

  $("#State-Shipping-1").on('change', function() {
  console.log(this.selectedIndex);
  });
  if ( $('#First-Name-Shipping1').val() === '') {
    /*this will need to change...maybe have a counter variable and then display a batch message if there's more than one field blank? build out validator first!*/
      return false;
    }
    else if( $('#Last-Name-Shipping1').val() === '') {
     return false;
    }
    else if( $('#Address-Line-1-Shipping1').val() === '') {
    return false;
    }
    else if( $("#State-Shipping-1").attr('selectedIndex') > 0) {
    return false;
    }
    //so close!
    else if ( $('#Zip-Shipping1').val().length < 5 || $('#Zip-Shipping1').val().length > 9) {
    return false;
    }
//console.log('it passes!');
return true;
    //scracth the counter idea, return false if any condition met, then in else,
}

//onchange to run check, then fill out


function cCValidation () {
   if (!$('#Credit-Card1').val().length === 16) {
     return false;
    }
    else if ( )

   return true;

}





// $('#Zip-Shipping1').val().length >= 5 && $('#Zip-Shipping1').val().length <= 9 )


// function formValidation() {
//     if( $('#First-Name-Shipping1').val() === 'undefined') {
//       console.log("need info");
//     }
//     else {
//       console.log("entered info");
//     }
// }
// })
//
// $('#purchase').on('click', function() {
//
//   formValidation();
// });
