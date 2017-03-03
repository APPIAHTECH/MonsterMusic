var elem = document.querySelector('.Galeria');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.gal',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.Galeria', {
  // options
});