//is pretty much the same as module but instead we return 
//object properties to the private functions that we want to reveal thus it is called realing module patter


const reavealingPatter = (() => {

    let privatename = 'Nothing';

    const publicSetName = (name) => {
        privatename = name;
    };

    const publicGetName = () => {
        return privateFunction();
    };

    const privateFunction = () => {
        return privatename;
    };

    return {
        setName: publicSetName,
        getName: publicGetName 
    }
})();

console.log(reavealingPatter.setName('Marv'));
console.log(reavealingPatter.getName());
