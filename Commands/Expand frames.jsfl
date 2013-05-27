fl.outputPanel.clear();
var curFrame = fl.getDocumentDOM().getTimeline().currentFrame + 1;
var totalFrame = fl.getDocumentDOM().getTimeline().frameCount;
var ques = "Enter num of frames insert from frame(" + curFrame + "):";
var value = prompt(ques, "");
var feedback = "";
var ask = true;
value = Number(value);

if(value<=16000 && value>=-16000){
    if(value>800 || value<-800){
        ask = confirm("You have entered quite a larger number, continues?")
    }
    if(ask){
        if(value > 0){
            for(var i=0; i<value; i++){
                fl.getDocumentDOM().getTimeline().insertFrames();
            }
            feedback = "inserted";
        }else if(value < 0){
            if(-value>(totalFrame-curFrame)){
                value = totalFrame - curFrame;
            }else{
                value = -value;
            }
            for(var i=0; i<value; i++){
                fl.getDocumentDOM().getTimeline().removeFrames();
            }
            feedback = "removed";
        }else if(value == 0 || value == null){
            value = 0;
            feedback = "ignore";
        }else{
            alert("Invalid Value!");
            feedback = "abort";
        }
        if(feedback != "abort"){
            fl.trace("Command done, " + feedback + " " + value + " frame(s) successfully.");
        }
    }
}else{
    alert("Abort, exceeding 16,000 frames may causes the movie playback to stop.");
}