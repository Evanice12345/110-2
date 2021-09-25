prediction_1 = "Hehehe";


Webcam.set({
width: 350,
height:300,
image_format: "png",
png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_uri + "'>";
    });
    
}

console.log("ml5 Version", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/647hZDYqC/model.json"),modelLoaded;

function modelLoaded(){
    console.log("Model has loaded Yayyyyyyy");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1 = "The First Prediction is " + prediction_1 ;
    console.log(speak_data_1);
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);

}
function check(){
 speak();   
}