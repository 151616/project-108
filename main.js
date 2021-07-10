  
Webcam.set({
    width:350,
    height:300,
  dest_width: 400,
    dest_height: 300,
      image_format : 'png',
    png_quality:90
  });
document.getElementById("webcam");
Webcam.attach("#webcam");
function take_picture(){
    document.getElementById("final_pic").innerHTML = "<label>Sample</label><div id='result'></div><br><br><button id='check' onclick='check()' class='btn btn-info'>Check</button>"
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
    
    }
    console.log("ml5 version: ", ml5.version);
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/wfEkRI7Pw/model.json', modelLoaded);
    function modelLoaded(){
        console.log("Model Loaded!");
    }
    function speak(){
        var synth = window.speechSynthesis;
        var speakdata1 = "The First Prediction Is" + prediciton_1 + ",";
        var speakdata2 = "The Second Prediction Is" + prediciton_2 + ",";
        var speakdata3 = "The Third Prediction Is" + prediciton_3 + ",";
        var speakdata4 = "The Fourth Prediction Is" + prediciton_4 + ",";
        var speakdata5 = "The Fifth Prediction Is" + prediciton_5 + "and";
        var speakdata6 = "The Sixth Prediction Is" + prediciton_6;
        var utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2 + speakdata3 + speakdata4 + speakdata5 + speakdata6);
        synth.speak(utterthis);
    }
    function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);

}
function gotResult(error, results){
if(error){
console.error(error);

}else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
document.getElementById("result_emotion_name3").innerHTML = results[2].label;
document.getElementById("result_emotion_name4").innerHTML = results[3].label;  
  document.getElementById("result_emotion_name5").innerHTML = results[4].label;
document.getElementById("result_emotion_name6").innerHTML = results[5].label;
prediciton_1 = results[0].label;
prediciton_2 = results[1].label;
prediciton_3 = results[2].label;
prediciton_4 = results[3].label;
prediciton_5 = results[4].label;
prediciton_6 = results[5].label;
speak();
if(results[0].label == "Peace Sign"){
    document.getElementById("update_emoji").innerHTML = "&#9996;";
}
if(results[0].label == "Fist Bump"){
    document.getElementById("update_emoji").innerHTML = "&#128074;";
}
if(results[0].label == "Thumbs Up"){
    document.getElementById("update_emoji").innerHTML = "&#128077;";
}
if(results[0].label == "Rock and Roll"){
  document.getElementById("update_emoji").innerHTML = "&#129304;";
}
if(results[0].label == "Fingers Crossed"){
  document.getElementById("update_emoji").innerHTML = "&#129310;";
}
if(results[0].label == "Hand Phone"){
  document.getElementById("update_emoji").innerHTML = "&#129305;";
}

if(results[1].label == "Peace Sign"){
    document.getElementById("update_emoji2").innerHTML = "&#9996;";
}
if(results[1].label == "Fist Bump"){
    document.getElementById("update_emoji2").innerHTML = "&#128074;";
}
if(results[1].label == "Thumbs Up"){
    document.getElementById("update_emoji2").innerHTML = "&#128077;";
}
if(results[1].label == "Rock and Roll"){
  document.getElementById("update_emoji2").innerHTML = "&#129304;";
}
if(results[1].label == "Fingers Crossed"){
  document.getElementById("update_emoji2").innerHTML = "&#129310;";
}
if(results[1].label == "Hand Phone"){
  document.getElementById("update_emoji2").innerHTML = "&#129305;";
}
}
}

