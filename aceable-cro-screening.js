// 1: how could you improve the following code?
// Assume that you have access to a styles.css file
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });

  $('.foo #bar').click();
});

// * Answer
$(document).ready(function() {
  $('#bar')
    .css({'color':'red', 'border':'1px solid blue'})
    .text('new text!')
    .on('click', function() {
      $(this).attr('title', 'new title');
      $(this).width('100px');
    })
    //not sure why this is in here but I kept it
    //usually you do not trigger click events in here since that's not what they are for
    .click();
});







// 2: If you needed to inject content into the 4th div via JS or jQuery from the <head> of the document
// without using document.ready how would you accomplish this?
<html>
<head>
// Your script runs here!
</head>
<body>
<h1>Placeholder test for H1</h1>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>

</body>
</html>


// Answer
<html>
<head>
  <script>
  	function foo(){
    	let test = document.getElementsByClassName("element")[3];
      test.innerHTML= "Hello! I'm the 4th div!";
    };
  </script>
</head>
<body onload="foo()">
  <h1>Placeholder test for H1</h1>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
</body>
</html>





// 3: how could you rewrite the following code to make it shorter?
(function(d, $){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(dojo, dojo.query);


// * Answer
//not sure what all this 'dojo' stuff is but this works when you test it in a sandbox
(function(){
  $('li').each(
    function(){
      $( this ).children().attr("title", "i am " + $(this).attr("class"));
    }
  );
})();





// 4: given the following data structure, write code that returns an array
// containing the name of each item, followed by a comma-separated list of
// the item's extras, if it has any. e.g.
//
//    [ "Salad (Chicken, Steak, Shrimp)", ... ]
//
// (you can assume the jQuery library is available)
var menuItems = [
  {
    id : 1,
    name : 'Salad',
    extras : [
      'Chicken', 'Steak', 'Shrimp'
    ]
  },

  {
    id : 2,
    name : 'Potato',
    extras : [
      'Bacon', 'Sour Cream', 'Shrimp'
    ]
  },

  {
    id : 3,
    name : 'Sandwich',
    extras : [
      'Turkey', 'Bacon'
    ]
  },

  {
    id : 4,
    name : 'Bread'
  }
];

// * Answer
((arr) => {
  let results = [];
  arr.map((i) =>{
    let name = i.name;
    let extras = i.extras;
    if (extras){
      results.push(name + " (" + extras + ")");
    } else {
      results.push(name)
    }
  })
  return results  
})(menuItems);






// 5: what is the faulty logic in the following code? how would you fix it?
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];

for (var i = 0; i <= 5; i++) {
  dates.push(month + '/' + (day + i));
}

console.log('The next five days are ', dates.join(', '));

// Answer
// The getMonth method gives you a number of the month but it starts at 0 so 'April' is displayed as 3, not 4. 
// Also if you want the NEXT 5 days, you would start at the current day so our for loop needs to start at 1 and run until i<=5
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];
   
for (var i = 1; i <= 5; i++) {
  dates.push((month + 1) + '/' + (day + i));
}

console.log('The next five days are ', dates.join(', '));
