var radio = document.getElementById("radio");
var boton = document.getElementById("boton");

radio.src = 'http://stream.zeno.fm/tgw7zh33h18uv'



boton.addEventListener('click', ()=>{
  radio.play()
  boton.innerHTML = 'Pause'
})

/*function play_Audio() {
    GFG.play();
}

function pause_Audio() {
    GFG.pause();
}*/










