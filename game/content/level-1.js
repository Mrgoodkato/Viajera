export function level1(levelData, index, term){

    index.page = 0;

    console.log(term)

    term.echo(
        '[[g;blue;]\n-------]\n' + levelData.data[index.page].mainTxt + '[[g;blue;]\n-------]\n',
        {
            keepWords: true
        }
    );
    
    term.push(
        function(cmd){
            
            level1Progress(levelData, index, cmd, this);
            this.set_prompt(levelData.data[index.page].prompt);
        },
        {
            prompt: levelData.data[index.page].prompt,
            outputLimit: 0
        }
    );
}

function level1Progress(levelData, index, cmd, term){

    const scene = levelData.data[index.page];

    for(let i = 0; i < levelData.data.length; i++){

        scene.actions.forEach(action => {
            if(action.option == cmd) index.page = action.goTo;
        });

    }

    term.echo(
        '[[g;blue;]\n-------]\n' + levelData.data[index.page].mainTxt + '[[g;blue;]\n-------]\n',
        
        {
            keepWords:true
        }
    )

}