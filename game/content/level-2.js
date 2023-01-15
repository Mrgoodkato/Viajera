import { levelIndexFinder, atmosphereChangeFull } from "../utilities/main-utils.js";

export function level2(levelData, index, term, colors){

    index.page = 0;
    term.clear();
    atmosphereChangeFull(colors);
    console.log(term)
    term.echo(
        '[[g;#475c85;]\n-------]\n' + levelData.data[index.page].mainTxt + '[[g;#475c85;]\n-------]\n',
        {
            keepWords: true
        }
    );
    
    term.push(
        function(cmd){
            this.clear();
            levelProgress(levelData, index, cmd, this);
            this.set_prompt(levelData.data[index.page].prompt);
        },
        {
            prompt: levelData.data[index.page].prompt
        }
    );
}

function levelProgress(levelData, index, cmd, term){

    const scene = levelData.data[index.page];

    for(let i = 0; i < levelData.data.length; i++){

        scene.actions.forEach(action => {
            if(action.option == cmd) {
                index.page = levelIndexFinder(levelData.data, action.goTo);
            }
        });

    }
    term.echo(
        '[[g;#475c85;]\n-------]\n' + levelData.data[index.page].mainTxt + '[[g;#475c85;]\n-------]\n',
        
        {
            keepWords: true
        }
    )

}