console.log("hello overly excited");

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let nextSentence = ["Now", "Melissa", "will", "write", "a", "magical", "unicorn", "sentence", "for", "this", "exercise"];


let addExcitement = (taco, punct) => {
    var joined = "";
    for(i=0; i<taco.length; i++){
        joined += ` ${taco[i]}`;
        if(([i]+1)%3 === 0){
            joined += punct.repeat((i+1)/3);
        };   
    console.log("sentence: ", joined)
    };
}

// Invoke the function and pass in the array
addExcitement(sentence, "&");
addExcitement(nextSentence, "@");