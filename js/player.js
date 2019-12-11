let Player = (name, symb)=>{
    const sayPlayerName = (label)=> label.innerHTML = `${name} turn` 
    return{name, sayPlayerName, symb};
}
export {Player};