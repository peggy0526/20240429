var captureGraphics
var capture_width = 640
var capture_height = 480
var span = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(capture_width,capture_height);//設定顯示畫面大小
  captureGraphics = captureGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0,20)
  captureGraphics.scale(-1,1)
  capture.hide()
  //---介面選紐
  
}

function draw() {
  background(220);
  noStroke()
  span = 5+map(mouseX,0,width,20)   
  push()
  translate(width/2-capture_width,height/2-capture_height)
   captureGraphics.image(capture,0, 0)  //在(0,0)
   for(var x = 0; x< captureGraphic.width;x=x+span ){
    for(var y = 0; y< captureGraphic.height;y=y+span ){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      rect(x,y,span)
      //ellipse(x,y,span)
    }
   }
  pop()
}
