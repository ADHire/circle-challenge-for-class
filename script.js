// function calcVolume() {

//   var radius = Number(document.getElementById('radius').value);

//   var volume = (4/3) * Math.PI * Math.pow(radius, 3);

//   var result = document.getElementsByClassName('result');
//   result[0].innerText = 'The volume of a sphere with a radius of ' + radius + ' is ' + volume.toLocaleString('en') + '. Below, we will create a ball that represents that sphere\'\s size based on the volume.';

//   var sizes = volume / 50;

//   createCircle(sizes);
// }

function calcArea() {

  var radius = Number(document.getElementById('area').value);

  var area = Math.PI * Math.pow(radius, 2);

  createCircle(area);

  console.log(area);

  var result = document.getElementsByClassName('result');
  result[0].innerText = 'The area of a circle with a radius of ' + radius + ' is ' + area.toLocaleString('en') + '. Below, we will create a circle that represents that circle\'\s size based on the area.';

}


function createCircle(area) {

  var circleContainer = document.getElementsByClassName('circle');
  var circle = document.createElement('div');
  circle.style.width = area + 'px';
  circle.style.height = area + 'px';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = 'blue';
  circleContainer[0].appendChild(circle);

}
