function sndFX_click(){
    var audio = document.createElement("audio");
    audio.src = "https://cdn.discordapp.com/attachments/1113593206542712832/1145885435160174722/SnapSave.io_-_Main_Menu_1980s_Mode_-_Yandere_Simulator_Original_Soundtrack_Official_Audio_128_kbps.mp3?ex=64fa37ff&is=64f8e67f&hm=8814b38d2f06eb40c3f4de77196d49813583845747d1b24a31ea69410386f005&";
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();   
}
//http://www.soundjay.com/misc/sounds/handbag-lock-4.mp3

$('#makeNoise').bind("click",function() {
sndFX_click();
}); 


/*
$('#sndFXtrig').bind("click",function() {
sndFX_click();
});

$("#makeNoise").click(function(){
$("#sndFXtrig").click();
});

$("#makeNoise").click();
*/