var n = document.getElementsByClassName("slide")[0].clientWidth;  // lay chieu rộng  cua slide  có class name là "slide"var size = document.getElementById("size").clientWidth;   // lay cỡ size ảnh

var m = document.getElementsByClassName("chuyenslide")[0]; //  
var Img = m.getElementsByTagName("img"); // 
alert(Img)
var max = size*Img.length;   // size ảnh nhân vơi số ảnh của 1 dãy ở đây có 4 ảnh  
max-=n;  // max= max - n 
var chuyen = 0;     
// Ham de chuyen slide 
// hiểu  cháu đọc đc code k
function Next(){
if (chuyen < max)
chuyen+=n;
else 
chuyen = 0;
m.style.marginLeft = '-' + chuyen + 'px'; 
}
function Back(){
    if(chuyen ==0)
    chuyen=max;
    else 
    chuyen-=n;
    m.style.marginLeft = '-' + chuyen + 'px';
}
// auto chuyen slide trong vong 3s 
// setInterval(function(){
//     Next()
// },3000)
// may cai trong ngoac la ten cua class voi id minh dat o html 
