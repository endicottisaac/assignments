var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
const newArray = []

function forception(people, alphabet){
    
    for(i = 0; i < people.length; i++){
        newArray.push(people[i])
        for(j = 0; j < alphabet.length; j++)
        newArray.push(alphabet[j])
    }
    
}

forception(people, alphabet)
document.getElementById('main').append(newArray)