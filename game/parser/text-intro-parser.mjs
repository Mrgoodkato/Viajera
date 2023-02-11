import { readFileSync, writeFile } from "fs";

/* To run this, write 

node game\parser\text-intro-parser.mjs

in terminal */

const text = readFileSync("./game/temp_db/text-intro-base.txt",
{encoding:'utf8', flag:'r'});

const data = createIntroObject(text);
createJsonFile(data, 'game/temp_db/intro-3.json');

function createIntroObject(text){

    const regexText = /(?<prompt>(?<=PROMPT-).*(?=\+))|(?<color>(?<=COLOR-).*(?=\+))|(?<initMessages>(?<=INIT_MESSAGE-).*(?=\+))|(?<timeout>(?<=TIMEOUT-).*(?=\+))|(?<style>(?<=STYLE-).*(?=\+))|(?<data>(?<=DATA-)[\w\W]*?(?=\+))/g;

    const object = text.matchAll(regexText);
    const parsedObj = {
        "prompt": "",
        "init_messages": [],
        "data": []
    };

    let initCounter = 0;
    let dataCounter = 0;

    for (let obj of object){
    
        let prompt = obj.groups.prompt;
        let initMessage = obj.groups.initMessages;
        let timeout = obj.groups.timeout;
        let style = obj.groups.style;
        let data = obj.groups.data;

        if(prompt) parsedObj.prompt = prompt;
        
        if(initMessage){

            var initObj = {
                "message": initMessage
            }
            parsedObj.init_messages.push(initObj);
            initCounter++;
        }
        if(style){
            let message = parsedObj.init_messages[initCounter-1].message;
            parsedObj.init_messages[initCounter-1].message = stylizeText(message, style);
        }

        if(timeout) parsedObj.init_messages[initCounter-1].timeout = parseInt(timeout);

        if(data){
            dataCounter++;
            parsedObj.data.push({
                "text": obj.groups.data,
                "index": dataCounter
            })
        }  
    }
    console.log(parsedObj);
    return parsedObj;

}

function createJsonFile(data, path){
    const jsonData = JSON.stringify(data)

    // write JSON string to a file
    writeFile(path, jsonData, err => {
    if (err) {
        throw err
    }
    console.log('JSON data is saved.')
    })
}

function stylizeText(message, style){

    if(style == 'none') return message;

    return '[[g;'+style+';]'+message+']';

}