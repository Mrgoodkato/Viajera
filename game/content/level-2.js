import { levelIndexFinder } from "../utilities/main-utils.js";

export function level2(levelData, index, term){

    index.page = 0;
    term.clear();
    console.log(term)

    term.echo(
        '[[g;blue;]\n-------]\n' + levelData.data[index.page].mainTxt + '[[g;blue;]\n-------]\n',
        {
            keepWords: true
        }
    );
    
    term.push(
        function(cmd){
            this.clear();
            level1Progress(levelData, index, cmd, this);
            this.set_prompt(levelData.data[index.page].prompt);
        },
        {
            prompt: levelData.data[index.page].prompt
        }
    );
}

function level1Progress(levelData, index, cmd, term){

    const scene = levelData.data[index.page];

    for(let i = 0; i < levelData.data.length; i++){

        scene.actions.forEach(action => {
            if(action.option == cmd) {
                index.page = levelIndexFinder(levelData.data, action.goTo);
            }
        });

    }

    term.echo(
        '[[g;blue;]\n-------]\n' + levelData.data[index.page].mainTxt + '[[g;blue;]\n-------]\n',
        
        {
            keepWords: true
        }
    )

}