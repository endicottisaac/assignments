var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const sortedByAge = (arr) => {
    return arr.filter(person => person.age > 17)
}

const sortedAlphebetically = (arr) => {
    return arr.sort(function(a, b){
        if(a.lastName < b.lastName) {
            return -1;
        }
        if(a.lastName > b.lastName) {
            return 1;
        }
        return 0
    })
}

const format = (arr) => {
    return arr.map(function(person){
        return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
    })
}

const adults = sortedByAge(peopleArray)

const adultAlphebetical = sortedAlphebetically(adults)

const finalList = format(adultAlphebetical)

console.log(finalList)







 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
