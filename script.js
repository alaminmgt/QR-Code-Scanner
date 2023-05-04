// 1. camera section
const video = document.getElementById('myCamera');
const text = document.getElementById('text');

var scanner = new Instascan.Scanner({
    video : video 
})
Instascan.Camera.getCameras().then(function(cameras){
    if (cameras.length > 0 ) {
        scanner.start(cameras[0])
    } else {
        alert("Camera open failed")
    }
})
.catch(function(error){
    console.log("Error found try again");
})




// 2. input section

scanner.addListener("scan",function(input_value){
    text.value=input_value;
})