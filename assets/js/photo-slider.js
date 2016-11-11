var photos = $("#photo-slider").find(".photo");
console.log(photos);
var current = 0;
photos[current].className = 'photo show';
var photoInterval = setInterval(showPhoto,3000);

function showPhoto(){
  photos[current].className = 'photo';
  current = (current+1)%photos.length;
  photos[current].className = 'photo show';
};
