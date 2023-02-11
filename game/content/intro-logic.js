import { loadingPhaseInit, textIndexFinder, atmosphereChanger } from "../utilities/main-utils.js";

export function introGame(introData, index, term, colors){

    const initMessages = introData.init_messages;

    introData.prompt = '[[g;#475c85;]/] Continuar [[g;#475c85;]>>>]';
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
        index.page = introData.data[0].index;
        return;
    }

    term.clear();
    term.echo(
        '[[g;#5E788F;]\n-------]\n' + textIndexFinder(introData.data, index.page) + '[[g;#5E788F;]\n-------]\n',
        {
            keepWords:true
        });
    if(index.page == introData.data.length) index.level = 1;
    index.page++;
    
}