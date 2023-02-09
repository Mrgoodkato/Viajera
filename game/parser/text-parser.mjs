import { readFileSync, writeFile } from "fs";

/* To run this, write 

node game\parser\text-parser.mjs

in terminal */

const text = readFileSync("./game/temp_db/text-base.txt",
{encoding:'utf8', flag:'r'});

const data = parseTextInfo();
createJsonFile(data);



function parseTextInfo(){

    const regexText = /(?<scene>(?<=SCENE -)[\w\d]*)|(?<mainTxt>(?<=TEXT -)[\w\b\s\W][^+]*)|(?<prompt>(?<=PROMPT -)[\w\d\W][^+]*|(?<=[\d]-)[\w\W\d][^+]*)|(?<actions>(?<=\+)[\w\d][^\n]*)/g;

    const regexed = text.matchAll(regexText);
    const parsedObj = {"data": []};

    var counter = 0;
    var actionCounter = 0;
    var promptCounter = 0;
    

    for(let reg of regexed){

        var sceneObj = {
            scene : reg.groups.scene,
            mainTxt : reg.groups.mainTxt,
            prompt : reg.groups.prompt,
        }
        var actions = reg.groups.actions;


    
        if(reg.groups.scene){

            actionCounter = 0;
            promptCounter = 0;
            parsedObj.data.push(sceneObj);
            parsedObj.data[counter].actions = [];
            counter++;
        }
        if(reg.groups.mainTxt){
            
            parsedObj.data[counter-1].mainTxt = sceneObj.mainTxt;
            console.log(parsedObj.data[counter-1].mainTxt);

        }
        if(reg.groups.prompt){

            if(parsedObj.data[counter-1].prompt == undefined) parsedObj.data[counter-1].prompt = '';

            parsedObj.data[counter-1].prompt += promptDecider(sceneObj.prompt, promptCounter);
            promptCounter++;
        }
        if(reg.groups.actions){

            parsedObj.data[counter-1].actions.push(
                {
                    "option": actionCounter+1,
                    "goTo": actions.replace(/[\W]/, '')
                }
            );
            actionCounter++;

        }
    
    }

    return parsedObj;

}

function promptDecider(prompt, counter){

    if(counter == 0){
        return '[[g;blue;]/]' + prompt + '[[g;blue;]>>>>]\n'
    }

    return `[[g;blue;]${counter})]${prompt}\n`

}

function createJsonFile(data){

    const jsonData = JSON.stringify(data)

    // write JSON string to a file
    writeFile('game/temp_db/level_3.json', jsonData, err => {
    if (err) {
        throw err
    }
    console.log('JSON data is saved.')
    })

}