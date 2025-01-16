function sum(...args) 
{
    let arg = 0;
    for(let i = 0; i < args.length; i++){
        arg += args[i];}
    return arg;
}

console.log(sum(1, 2, 3, 4, 5));