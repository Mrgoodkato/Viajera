import { intro } from "./game/parser/intro-parser.js";
import { introGame } from "./game/content/intro-logic.js";

console.log(intro);

const index = {page: -1};
const inputField = document.getElementsByClassName('clipboard');

$('#terminal').terminal(function() {
    
    introGame(intro, index, intro.prompt, intro.init_messages, this);
    
}
, {
    prompt: intro.prompt,
    greetings: greetings.innerHTML,
    onBlur: function(){
        return true;
    },
    mobileDelete: false,
    scrollOnEcho: true
});

$('#terminal').on('click', ()=>{
    inputField.item(0).focus();
});