
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var button=this.innerHTML;
makesound(button);
pressed(button);
});
}
document.addEventListener("keypress",function(event){
 console.log(event.key);
makesound(event.key);
pressed(event.key);

})
function makesound(key)
{
  switch (key) {
    case "a":var sound=new Audio('sounds/kick-bass.mp3')
    sound.play();
      break;
      case "w":var sound=new Audio('sounds/crash.mp3')
      sound.play();
        break;
        case "s":var sound=new Audio('sounds/snare.mp3')
        sound.play();
          break;
          case "d":var sound=new Audio('sounds/tom-1.mp3')
          sound.play();
            break;
            case "j":var sound=new Audio('sounds/tom-2.mp3')
            sound.play();
              break;
              case "k":var sound=new Audio('sounds/tom-3.mp3')
              sound.play();
                break;
                case "l":var sound=new Audio('sounds/tom-4.mp3')
                sound.play();
                  break;
    default:console.log(key+" - use shown keys");
  }
}

function pressed(press)
  {
    document.querySelector("."+press).classList.add("pressed");
    setTimeout(function(){

        document.querySelector("."+press).classList.remove("pressed");
    },100);
  }
