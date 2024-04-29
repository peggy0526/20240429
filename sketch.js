var captureGraphics
var radioElement
var capture_width = 640
var capture_height = 480
var span = 5
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(capture_width,capture_height)
  captureGraphics = createGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()
  //---選鈕的介面
  radioElement = captureradio();
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓形")
  radioElement.option("亮度")
  radioElement.option("紅底")
  radioElement.option("文字")
  radioElement.style("color","#fff")
  radioElement.style("front-size","30px")

}

function draw() {
  background(220);
  noStroke()
  span = 5+map(mouseX,0,width,0,20)
  push()
  translate(width/2-capture_width/2, height/2-capture_height/2) //把原點移到(width/2-160, height/2-120)
  captureGraphics.image(capture,0,0) //
  for(var x= 0;x<captureGraphics.width;x=x+10){
    for(var y=0;y<captureGraphics.height;y=y+10){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      if(radioElement.vzlue()=="方塊" ||radioElement.value()=="" ){
        rect(x,y,span)
      }
      if(radioElement.vzlue()=="圓形"){
        ellipse(x,y,span)
      }
      if(radioElement.vzlue()=="亮度"){
        bk = (pixel[0]+pixel[1]+pixel[2])/3
        fill(bk)
         //span代表圓圈的直徑
        ellipse(x,y,span*map(bk,0,255,0,1)) //透過map指令，bk在0~255間，依照比率設定0~255
      }
      if(radioElement.vzlue()=="紅底"){
        colorMode(HSB)
        fill(pixel[0],80,80)
        push()
         translate(x,y)
         rectMode(CENTER)
         rect(0,0,span*0.8)
         //span代表圓圈的直徑
         fill(0)
         ellipse(x,y,10) //透過map指令，bk在0~255間，依照比率設定0~255
        pop()
      }
      if(radioElement.vzlue()=="文字"){
        const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
        let txt = "一二三四五田雷電龕龘"
        bk = (pixel[0]+pixel[1]+pixel[2])/3
        let bkId = int(map(bk, 0, 255, 9, 0))
        text(txt[bkId])
        textSize(span)
        text(BOLD)
        text(txt[bkId],x,y)

      }
      
    }
  }
  pop()
}
