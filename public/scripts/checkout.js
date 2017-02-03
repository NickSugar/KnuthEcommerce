//======================
//Paul
//======================

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
  else if($("#State-Shipping-1").val() === '0') {
    return false;
  }
  else if ( $('#Zip-Shipping1').val().length < 5 ||     $('#Zip-Shipping1').val().length > 9) {
    return false;
  }
  return true;
}



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
}

function billingValidation() {

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
  else if( $("#State-Billing-1").val() === '0') {
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
