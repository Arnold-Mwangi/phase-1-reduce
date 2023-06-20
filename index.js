const books = [
    {
        title: "How to be A Man",
        price: 1000,
        inventory: 20
    },
    {
        title: "Attracting MOney",
        price: 2400,
        inventory: 15
    },
    {
        title: "How to say it",
        price: 700,
        inventory: 5
    }
]


//so we are going to create a function that will return the total value of our book store
 const libraryValue = (accumlator, item)=>{
    console.log(accumlator, item);
    let total = item.price * item.inventory
    return accumlator += total;
 }

 let total = books.reduce(libraryValue, 0)
 console.log(total)

 const libraryBooks = books.reduce((accumlator, item) =>{
    return accumlator + "," + item.title
 }, "")
 console.log(libraryBooks.substring(1));