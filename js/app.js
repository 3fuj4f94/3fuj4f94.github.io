var radio = document.getElementById("radio");
var boton = document.getElementById("boton");

radio.src = 'http://stream.zeno.fm/1s53a2gkuf9uv'

var temp = 2

boton.addEventListener('click', ()=>{
  if (temp%2==0) {
    radio.play()
    boton.innerHTML = 'Pause'
    console.log(temp)
  } else {
    radio.pause()
    boton.innerHTML = 'Play'
    console.log(temp)
  }
  temp++
})











