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

    if ( !shippingValidation()) {
      return alert("please complete your shipping info")
    }
    else if (!billingValidation()) {
      return alert("please complete your billing info")
    }
    else if(!cCValidation()) {
     return alert('Please review your payment information')
    }
    else {
      alert('thank you for your purchase!')
    }

});

function shippingValidation() {
  $("#State-Shipping-1").on('change', function() {
  console.log(this.selectedIndex);
  });
    if ( $('#First-Name-Shipping1').val() === '') {
    return false;
    }
    else if( $('#Last-Name-Shipping1').val() === '') {
    return false;
    }
    else if( $('#Address-Line-1-Shipping1').val() === '') {
    return false;
    }
    else if($('#City-Shipping').val() === '') {
    return false;
    }
    else if( $("#State-Shipping-1").attr('selectedIndex') > 0) {
    return false;
    }
    else if ( $('#Zip-Shipping1').val().length < 5 || $('#Zip-Shipping1').val().length > 9) {
    return false;
    }

return true;

}

//onchange to run check, then fill out

$(".checkbox").on('click', function() {

  if ( !shippingValidation()) {
    return alert("please complete your shipping info before copying info over into billing")
  }
  else {
  copyToBilling()
  }


});

function copyToBilling() {
   $('#First-Name-Billing1').val($('#First-Name-Shipping1').val());
   $('#Last-Name-Billing1').val($('#Last-Name-Shipping1').val());
   $('#Company-Name-Billing1').val($('#Company-Name-Shipping1').val());
   $('#Address-Line-1-Billing1').val($('#Address-Line-1-Shipping1').val());
   $('Address-Line-2-Billing1').val($('Address-Line-2-Shipping1').val());
   $('#City-Billing').val($('#City-Shipping').val());
   $("#State-Billing-1").val($("#State-Shipping-1").val());
   $('#Zip-Billing1').val($('#Zip-Shipping1').val());

// 1 this is the winning formula! $('#field2').val($('#field1').val());
// 2 take a look at recs- it looks like shipping should just overwrite anything in billing?
}

function billingValidation() {
  $("#State-Billing-1").on('change', function() {
  console.log(this.selectedIndex);
  });
    if ( $('#First-Name-Billing1').val() === '') {
    return false;
    }
    else if( $('#Last-Name-Billing1').val() === '') {
    return false;
    }
    else if( $('#Address-Line-1-Billing1').val() === '') {
    return false;
    }
    else if($('#City-Billing').val() === '') {
    return false;
    }
    else if( $("#State-Billing-1").attr('selectedIndex') > 0) {
    return false;
    }
    else if ( $('#Zip-Billing1').val().length < 5 || $('#Zip-Billing1').val().length > 9) {
    return false;
    }

return true;

}

function cCValidation() {
    if (!$('#Credit-Card1').val().length === 16) {
     return false;
    }
    else if ($('#Expiration1').val() === '') {
     return false;
    }
    else if ($('#CVC').val() === '') {
     return false;
    }
    return true;

}
