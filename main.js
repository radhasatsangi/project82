canvas=document.getElementById("my_canvas");
ctx= canvas.getContext("2d");
var last_position_of_x,last_position_of_y;
var mouseevent="empty";
 color="black";
 linewidht=1;
 canvas.addEventListener("mousedown",mymousedown);
 function mymousedown(e){
 mouseevent="mousedown";

 }
 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e){
 mouseevent="mouseup";
 }
 canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e){
 mouseevent="mousemmove";
 }
 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
 mouseevent="mouseleave";
 }
 current_position_of_x= e.clientX - canvas.offsetLeft;
 current_position_of_y= e.clientY - canvas.offsetTop;
 if (mouseevent== "mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=2;
     ctx.arc(200,200,40,0,2*Math.PI);
     ctx.stroke();
     console.log("Current position of x and y =");
     console.log("x="+ current_position_of_x+"y="+current_position_of_y);
     ctx.lineTo(current_position_of_x,current_position_of_y);
     ctx.stroke();
 }