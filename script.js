//DUMMY DATA
import { dummyIntro } from "./game/parser/intro-parser.js";

import { intro, level_1 } from "./game/parser/intro-parser.js";
import { introGame } from "./game/content/intro-logic.js";
import { level1 } from "./game/content/level-1.js";

console.log(intro);

const index = {
    page: -1, 
    action: 0,
    level: 0
};

const inputField = document.getElementsByClassName('clipboard');

$('#terminal').terminal(function() {
    if(index.level == 0) introGame(dummyIntro, index, this);
    else if(index.level == 1) level1(level_1, index, this);
}, 
{
    prompt: intro.prompt,
    greetings: greetings.innerHTML,
    onBlur: function(){
        return true;
    }
});

$('#terminal').on('click', ()=>{
    inputField.item(0).focus();
});