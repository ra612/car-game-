class Form{
constructor(){

}    

display(){
image(welcomeImg,0,0,500,500)
var title=createElement("h2")    
title.html("car racing")
title.position(130,0)

var input=createInput("name")
var button=createButton("play");
var greeting=createElement("h3")

input.position(130,160);
button.position(250,400);
button.mousePressed(function()
{
     input.hide();
      button.hide();
       var name = input.value();
       
    playerCount+=1; player.update(name)
     player.updateCount(playerCount);
         var greeting = createElement('h3'); 
        greeting.html("Hello " + name )
         greeting.position(130, 160) 
        }
)

}
}