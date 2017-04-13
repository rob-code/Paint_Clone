window.onload = function(){
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');  
  var isDrawing;
  var color;

  var saveButton = document.querySelector('#save')
  var loadButton = document.querySelector('#load')

  saveButton.onclick = savepicture
  loadButton.onclick = loadpicture


var loadpicture = function (){

console.log("load")  


  var dataURL = localStorage.getItem(context);
  var img = new Image;
  img.src = dataURL;
  context.drawImage(img, 0, 0);


}

var savepicture = function (){
  localStorage.setItem(context, canvas.toDataURL());
  console.log("save")

}

  var colourPicker = document.querySelector('input')
  colourPicker.onchange = function(){
    //context.strokeStyle = this.value
    color = this.value
  };

  canvas.onmousedown = function(e) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  };

  canvas.onmousemove = function(e) {
    if (isDrawing) {
      context.lineTo(e.clientX, e.clientY);
      context.strokeStyle = color;
      context.stroke();
    }
  };

  canvas.onmouseup = function() {
    //context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    isDrawing = false;


  };






}