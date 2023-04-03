for (let age=30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
const names = ["Guadalupe","Ollie","Aki"]
function writeCards(names,events){
    for(let i = 0;i<names.length;i++)
    console.log(`Thank you $names[i], for the wonderful surprise gift!`);
}
writeCards(["Guadalupe","Ollie","Aki"], "birthday");

function countDown(positiveNumbers){
    for(i = parseInt(positiveNumbers);i=0;i--){
        console.log(i)
    }

}

