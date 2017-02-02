$(document).ready(function () {
  
  $.get('./products.json')
  .then(function(data) {
    console.log(data);
    generateItems(data);
  }).catch(function(error) {
    console.log(error);
  })
  
//======================
//Nick
//======================
  var productImages = [
    "http://placehold.it/400x400",
    "http://placehold.it/401x400",
    "http://placehold.it/402x400",
    "http://placehold.it/403x400",
    "http://placehold.it/404x400",
    "http://placehold.it/405x400"
  ]

  $('.carousel').attr('src', productImages[0])
  var scroll = setInterval(carouselRight, 5000)

  function carouselRight () {
    var firstImage = productImages.shift()
    productImages.push(firstImage)
    $('.carousel').attr('src', productImages[0])
  }
  $('.rightCarousel').on('click', function(){
    clearInterval(scroll);
    carouselRight();
    scroll = setInterval(carouselRight, 5000);
  })

  function carouselLeft () {
    var firstImage = productImages.pop()
    productImages.unshift(firstImage)
    $('.carousel').attr('src', productImages[0])
  }
  $('.leftCarousel').on('click', function () {
    clearInterval(scroll);
    carouselLeft();
    scroll = setInterval(carouselRight, 5000);
  })

  
//======================
//Nate
//======================
  
function generateSection(object) {
  var counter = 1
  for(var prop in object) {
    var $sec = $('<section>', {id: "blade"+counter, "class": "col-12 product container"});
    $('main').append($sec);
    var $div = $('<div>', {"class": "productImage"});
    $("#blade"+counter).append($div)
    var $h2 = $('<h2>').text(prop)
    $("#blade"+counter).append($h2)
    var $h4 = $('<h4>').text('Cost: ' + object[prop]['Price'] + ' Rubys')
    $("#blade"+counter).append($h4)
    var $p1 = $('<p>').text('Previous Weilders Rating: '+ object[prop]['Stars'])
    $("#blade"+counter).append($p1)
    var $p2 = $('<p>').text(object[prop]['Description'])
    $("#blade"+counter).append($p2)
    var $but = $('<button>', {id: "but"+counter, "class": "addButton"}).text('ADD')
    $("#blade"+counter).append($but)
    counter++
  }
}

function generateImage() {

}

function generateItems(object) {
  generateSection(object)
  generateImage(object)
};



function filterResults() {

}
  
//======================
//Paul
//======================
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
})

