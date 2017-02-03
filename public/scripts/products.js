$(document).ready(function () {

  $.get('./products.json')
  .then(function(data) {
    console.log(data);
    generateItems(data);
    setupClicks(data);
  }).catch(function(error) {
    console.log(error);
  })
})

function generateSection(object) {
  var counter = 1
  for(var prop in object) {
    var $sec = $('<section>', {id: "blade"+counter, "class": "col-12 product container"});
    $('main').append($sec);
    var $div1 = $('<div>', {id: "div1", "class": "productImage col-lg-6 col-md-6 col-sm-6 col-xs-12 fill"});
    $("#blade"+counter).append($div1)
    var $div2 = $('<div>', {id: "div2", "class": "col-lg-6 col-md-6 col-sm-6 col-xs-12"});
    $("#blade"+counter).append($div2)
    var $h2 = $('<h2>', {"class": "center"}).text(prop)
    $("#blade"+counter+" #div2").append($h2)
    var $h4 = $('<h4>', {"class": "medieval"}).text('Cost: ' + object[prop]['Price'] + ' Rubys')
    $("#blade"+counter+" #div2").append($h4)
    var $h3 = $('<h3>', {"class": "medieval"}).text('Forged by: ' + object[prop]['Maker'])
    $("#blade"+counter+" #div2").append($h3)
    var $p1 = $('<p>', {"class": "medieval"}).text('Previous Weilders Rating: '+ object[prop]['Stars'])
    $("#blade"+counter+" #div2").append($p1)
    var $p2 = $('<p>', {"class": "medieval"}).text(object[prop]['Description'])
    $("#blade"+counter+" #div2").append($p2)
    var $but = $('<button>', {"class": "medieval"}, {id: "but"+counter, "class": "addButton", "value": "addBut"}).text('ADD')
    $("#blade"+counter+" #div2").append($but)
    counter++
  }
}

function generateImage(object) {
  counter = 1
  for (var prop in object) {
    var $img = $('<img>', {"class": "containerImage", "src": object[prop]['Image']})
    $("#blade"+counter+" #div1").append($img)
    counter++
  }
}


function generateItems(object) {
  $('main').empty()
  generateSection(object)
  generateImage(object)
};

function setupClicks(products) {
  $('#li1').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Price'] >= 100) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $('#li4').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Price'] <= 500) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $('#li2').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Price'] <= 100 || clone[name]['Price'] > 250) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $('#li3').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Price'] <= 250 || clone[name]['Price'] > 500) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $('#li5').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Slayed'] >= 2) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $('#li8').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Slayed'] <= 10) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $('#li6').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Slayed'] <= 2 || clone[name]['Slayed'] > 5) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $('#li7').on('click', function() {
    var clone = Object.assign({}, products)
    for (var name in products) {
      if (clone[name]['Slayed'] <= 5 || clone[name]['Slayed'] > 10) {
        delete clone[name]
      }
    }
    generateItems(clone)
  });
  $("button[class='medieval']").on('click', function(){
    console.log('ping');
    var counter = parseInt($('.badge').text())
    $('.badge').text(counter+1)
  })
}
