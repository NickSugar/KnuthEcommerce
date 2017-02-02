$(document).ready(function () {
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
  
var object = {
  "Firesword": {
    'Price': 30,
    "Description": "A fine sword direct from the fiery bowels of Un'Goro.  Good for vanquishing Dragons ranging from green to blue magics",
    "Image" : "",
    "Stars" : 3.5,
    "Maker" : "Yvalo D'gnon",
    "Id" : 1,
    "Slayed" : "Youmenel (Green), Ioklax (Blue)"
  },
  "Glory's Edge": {
    'Price': 190,
    "Description": "Forged with both 'Heaven's Light' and 'Angel Fur', this tried and true blade will cleave in twain any black dragon you may stumble upon.",
    "Image" : "",
    "Stars" : 4,
    "Maker" : "Kol-Nor the Proud; Glad usurper of crowns, Trampler of fields, and Master of locks.",
    "Id": 2,
    "Slayed": "Zyz'zemez (Black), Oliapin (Silver), Alipin (Gold)"
  },
  "Hammer of Machesney": {
    "Price": 460,
    "Description": "A brute force bludgeon with the power to lay fallow fertile fields of whelplings.  Best if used after storing in a cave of mysteries for 4-10 eons.",
    "Image": "",
    "Stars": 3,
    "Maker": "Pzb VII, Seventh Johan of this age, Forge of Souls, Keeper of Fire",
    "Id" : 3,
    "Slayed": "The Crimson Rookery (Red;Nest)"
  },
  "Copper Sword": {
    "Price": 10,
    "Description": "A hearty begginers blade for practice in slaysmanship.  Not recomended for any dragons over the age of 1 yr.  Crafted by SwordsNBlades in Lower Nythernia, every neophyte needs thier first sword.  This one wil do.",
    "Image": "",
    "Stars": 1.5,
    "Maker": "Sword Xpeller 2000",
    "Id": 4,
    "Slayed": "N/A"
  },
  "S'Gornuu, Spellblade of the Azure Order" : {
    "Price": 1200,
    "Description": "This limited time offer is bound to expire with the sale of this legendary blade.  THE S'Gornuu of legend has recently come to market thanks to the mysterious death of it's previous owner, U'wath of Ionika.  For the low price of 1200 Rubies, you can not only fell any dragon you're likely to see, but wield the entire library of magic of the Ionikan plains.",
    "Image": "",
    "Stars": 5,
    "Maker": "Z'xytmytryx the All-seeing, Sky-prince of Utan",
    "Id": 5,
    "Slayed": "Countless numbers through all manifestations of time and place.  Est. 2000+"
  },
  "Iron Reaver": {
    "Price": 300,
    "Description": "A blade for the slayer on a budget.  With this sturdy edge, any man can kill wyvern's like a heralded 'Knight of the 6 Crowns'.  Great for nuisance dragons that are terrorizing crops, livestock, or the landed gentry.",
    "Image": "",
    "Stars": 3,
    "Maker": "Grenvel the Smith",
    "Id": 6,
    "Slayed": "N/A"
  },
}

function generateSection() {
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
    counter++
  }
}


function generateItems() {
  generateSection()
};

generateItems();

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

