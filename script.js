window.onload = function() {
  let dirt = getElementByClassName(".dirt")
  var sound = getElementById("#sound")
  var grid = getElementById("#dirtBox")
  dirt.addEventListener("click", function(){
    if (this.innerHTML == true){
      sound.Play();
    } else {
      console.log("Nothing is there!")
    }
  })
}
