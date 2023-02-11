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

export function atmosphereChanger(indexPage, indexInit, indexEnd, colors){

    if(indexPage > indexInit && indexPage < indexEnd){    
        $(".terminal").css("--color", `${colors.color[0]}`);
        $(".terminal").css("--background", `${colors.back[0]}`);
        $("body").css("background-color", `${colors.back[0]}`);
    }else{
        $(".terminal").css("--color", `${colors.color[1]}`);
        $(".terminal").css("--background", `${colors.back[1]}`);
        $("body").css("background-color", `${colors.back[1]}`);
    }

}

export function atmosphereChangeFull(colors){
    $(".terminal").css("--color", `${colors.color[0]}`);
    $(".terminal").css("--background", `${colors.back[0]}`);
    $("body").css("background-color", `${colors.back[0]}`);
}

