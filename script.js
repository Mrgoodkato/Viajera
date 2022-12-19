import { intro } from "./game/parser/intro-parser.js";

console.log(intro);

document.getElementById('#terminal').focus();

var index = 0;


$('#terminal').terminal(function() {

    
    this.echo(intro.data[index].text);
    index++;

}
, {
    greetings: 'Bienvenida',
    prompt: intro.prompt,
    onBlur: function(){
        return true;
    }
});

function newInt(command){

    if(command == "hola de nuevo"){
        this.echo('hola de nuevo mijo');
    }else if(command == "return"){
        this.pop();
    }

}