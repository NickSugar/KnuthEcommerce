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
    var $costHide = $('<element>', {"style": "display: none"}).text(object[prop]['Price'])
    $("#blade"+counter).append($costHide)
    var $but = $('<button>', {id: "but"+counter, "class": "addButton"}).text('ADD')
    $("#blade"+counter).append($but)
    counter++
  }
}

function generateImage(object) {
  counter = 1
  for (var prop in object) {
    var $img = $('<img>', {"class": "containerImage", "src": object[prop]['Image']})
    $("#blade"+counter+" div").append($img)
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
}
