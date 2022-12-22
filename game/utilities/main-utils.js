export function loadingPhaseInit(term, initMessage, timeout, stop){

    setTimeout(() => {
        term.update(-1, initMessage);
        if(stop) term.resume();
    }, timeout);

};

export function textIndexFinder(data, index){

    for(let i = 0; i < data.length; i++){
        if(data[i].index == index){
            return data[i].text;
        };
    };

};

export function levelIndexFinder(data, goTo){

    for(let i = 0; i< data.length; i++){
        if(data[i].scene == goTo){
            console.log(i);
            return i;
        }
    }

}