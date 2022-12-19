import { intro } from "./game/parser/intro-parser.js";

console.log(intro);

var index = 0;
const inputField = document.getElementsByClassName('clipboard');


$('#terminal').terminal(function() {
    
    this.echo(
        '[[u;;]\n-------]\n' + intro.data[index].text + "\n-------\n",
        {
            keepWords:true
        });
    
    index++;

}
, {
    greetings: greetings.innerHTML,
    prompt: intro.prompt,
    onBlur: function(){
        return true;
    },
    mobileDelete: false,
    scrollOnEcho: true
});

$('#terminal').on('click', ()=>{
    inputField.item(0).focus();
})


function newInt(command){

    if(command == "hola de nuevo"){
        this.echo('hola de nuevo mijo');
    }else if(command == "return"){
        this.pop();
    }

}