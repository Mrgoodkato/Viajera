import { readFileSync } from "fs";

/* To run this, write 

node game\parser\text-parser.mjs

in terminal */

const text = readFileSync("./game/temp_db/text-base.txt",
{encoding:'utf8', flag:'r'});

const regexText = /(?<scene>(?<=SCENE -)[\w\d]*)|(?<mainTxt>(?<=TEXT -)[\w\b\s\W][^+]*)|(?<prompt>(?<=PROMPT -)[\w\d\W][^+]*|(?<=[\d]-)[\w\W\d][^+]*)|(?<options>(?<=\+)[\w\d][^\n]*)/g;

const regexed = text.matchAll(regexText);

for(let reg of regexed){

    var sceneObj = {
        scene : reg.groups.scene,
        mainTxt : reg.groups.mainTxt,
        prompt : reg.groups.prompt,
        options : reg.groups.options
    }

    if(reg.groups.scene) console.log('scene: ' + sceneObj.scene);
    if(reg.groups.mainTxt) console.log('maintext: ' + sceneObj.mainTxt);
    if(reg.groups.prompt) console.log('prompt: ' + sceneObj.prompt);
    if(reg.groups.options) console.log('options: ' + sceneObj.options);
}
