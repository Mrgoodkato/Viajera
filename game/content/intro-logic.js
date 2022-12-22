import { loadingPhaseInit, textIndexFinder } from "../utilities/main-utils.js";

export function introGame(introData, index, term){

    const initMessages = introData.init_messages;

    introData.prompt = '[[g;blue;]/] Continuar [[g;blue;]>>>]';
    term.set_prompt(introData.prompt);

    if(index.page == -1){

        term.pause();
        
        for(let i = 0; i < initMessages.length; i++){
            
            if(i == 0) var msgIndex = ((i+1)*500)+initMessages[i].timeout;
            else msgIndex = msgIndex + initMessages[i-1].timeout;

            var stop = false;
            if(i == initMessages.length-1) stop = true;
            loadingPhaseInit(term, initMessages[i].message, msgIndex, stop);
        }
        index.page = 0;
        return;
    }

    term.clear();
    term.echo(
        '[[g;blue;]\n-------]\n' + textIndexFinder(introData.data, index.page) + '[[g;blue;]\n-------]\n',
        {
            keepWords:true
        });
    if(index.page == introData.data.length-1) index.level = 1;
    index.page++;
    
}

