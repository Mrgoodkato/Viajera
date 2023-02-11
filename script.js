//DUMMY DATA
import { dummyIntro } from "./game/parser/intro-parser.js";

import { intro, level_1, level_2, level_3 } from "./game/parser/intro-parser.js";
import { introGame } from "./game/content/intro-logic.js";
import { level1 } from "./game/content/level-1.js";
import { level2 } from "./game/content/level-2.js";
import { level3 } from "./game/content/level-3.js";

const index = {
    page: -1, 
    action: 0,
    level: 0
};

const colorsDream = {
    color: ["#5E788F", "#011220"],
    back: ["#08090a", "#5E788F"]
}

const inputField = document.getElementsByClassName('clipboard');

$('#terminal').terminal(function() {
    if(window.innerWidth > 800) this.resize(400, 600);
    if(index.level == 0) introGame(intro, index, this, colorsDream);
    else if(index.level == 1) level3(level_3, index, this, colorsDream);
}, 
{
    prompt: intro.prompt,
    greetings: greetings.innerHTML,
    onBlur: function(){
        return true;
    },
});

$('#terminal').on('click', ()=>{
    inputField.item(0).focus();
});