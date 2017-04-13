window.onload = function(){
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');  
  var isDrawing;
  var color;

  var save = document.querySelector('#save')
  var load = document.querySelector('#load')

  save.onclick = function (e){
    localStorage.setItem(context, canvas.toDataURL());
    console.log("save" + e)
  }

  //saveButton.onclick = savepicture
  load.onclick = function (e){
  console.log("load" + e)  
  var dataURL = localStorage.getItem(context);
  var img = new Image;
  img.src = dataURL;
  context.drawImage(img, 0, 0);
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