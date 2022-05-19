function zeigFreunde(meinName, freund1, freund2, freund3){
    if (freund3 === undefined){
        return `Ich bin ${meinName} und meine Freunde sind: ${freund1}, ${freund2}`
    } else {
        return `Meine Freunde sind: ${freund1}, ${freund2}, ${freund3}`
    }
   
}

function zeigAlleFreunde(meinName, ...freunde ){
    return `Mein Name ist: ${meinName} und meine Freunde sind: ${freunde}`
}


//  console.log(zeigFreunde('Hilde', 'Berta', 'Gerd'));

//  console.log(zeigAlleFreunde('Hilde', 'Berta', 'Gerd','Rudi'));




// Funktiniert nur, wenn die Eingabe ein Array ist
function zeigFreundeArray(freundeArray){
    return freundeArray
}

// console.log(zeigFreundeArray(['Hilde', 'Berta', 'Rudi','Heinz']));


function summe(...zahlen){
   let ergebnis= 0;
   for (let i=0;i<zahlen.length; i++){
       ergebnis += zahlen[i]
        }
console.log(ergebnis)
}

summe(1,2,45,4,45,34,23,-23456);


// spread Operator
function searchMax(...zahlenArray){
   
    console.log(zahlenArray)
    // return Math.max(...zahlenArray)
}

// console.log(searchMax(1,2,3,4))
// let array = [1,2,3];
// console.log(Math.max(...array))

function werBinIch(name='Niemand', alter=24){
    return [name, alter]
}

console.log(werBinIch('Christoph'))