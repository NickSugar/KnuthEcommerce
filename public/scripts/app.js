$(document).ready(function () {

  function srcHomeImgs (productImages){
    $('.leftImgHome')
    .attr('src', productImages[0])
    $('.midImgHome')
    .attr('src', productImages[5])
    $('.rightImgHome')
    .attr('src', productImages[3])
  }

  $.get('./products.json')
  .then(function(data) {
    var dataKeyArray = Object.keys(data)

    function getImageURLs(key) {
      return data[key]['Image']
    }

    var productImages = dataKeyArray.map(getImageURLs)
    srcHomeImgs(productImages)
  })
  .catch(function(error) {
    console.log(error);
  })

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
    else {
      alert('please enter a valid email address');
    }
  })
})
