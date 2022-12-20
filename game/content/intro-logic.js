export function introGame(introData, index, prompt, initMessages, term){

    prompt = '/Continuar>>';
    term.set_prompt(prompt);

    if(index.page == -1){

        term.pause();
        
        console.log(initMessages.length)

        for(let i = 0; i < initMessages.length; i++){
            var stop = false;
            if(i == initMessages.length-1) stop = true;
            loadingPhaseInit(term, initMessages[i], (i+1)*1000, stop);
        }
        index.page = 0;
        return;
    }

    term.echo(
        '[[g;blue;]\n-------]\n' + textIndexFinder(introData.data, index.page) + '[[g;blue;]\n-------]\n',
        {
            keepWords:true
        });
    index.page++; 
}

function loadingPhaseInit(term, initMessage, timeout, stop){

    setTimeout(() => {
        console.log(initMessage);
        term.update(-1, initMessage);
        if(stop) term.resume();
    }, timeout);

}

function textIndexFinder(data, index){

    for(let i = 0; i < data.length; i++){
        if(data[i].index == index){
            return data[i].text;
        };
    };

}