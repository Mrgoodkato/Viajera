import { intro } from "./game/parser/intro-parser.js";

console.log(intro);

var index = 0;
const inputField = document.getElementsByClassName('clipboard');


$('#terminal').terminal(function() {
    
    this.echo(intro.data[index].text);
    index++;

}
, {
    greetings: 'Bienvenida',
    prompt: intro.prompt,
    onBlur: function(){
        return true;
    },
    mobileDelete: false
});

console.log(inputField.item(0))
inputField.item(0).setAttribute('autofocus', 'true');

function newInt(command){

    if(command == "hola de nuevo"){
        this.echo('hola de nuevo mijo');
    }else if(command == "return"){
        this.pop();
    }

}