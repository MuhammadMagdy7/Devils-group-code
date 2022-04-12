// Object ~> {} -> (key, value) , [] 


// Arrays ~> []

// let someArray = ['ahmed', 'sayed', 'maher']
// console.log(someArray[2])

// let objs = 

// {
//     namez : "mohamed",
//     gender: "male"
// }

// console.log(objs["namez"]); //bracket notation

// console.log(objs.gender); //dot notation



// let arrs_objects = {
//     fname : "mohamed",
//     lname : "ahmed",
//     arrs : ['sayed', 'kamal'],
// }


// console.log(arrs_objects["arrs"][1])





// let something = {

//     name : [
//         {fname : "mohamed"},
//         {middlename : "ahmed"},
//         {lname : "mohamed"},
//     ],

//     gender: "male",
//     height: 197
// }

// console.log(something.name[1].middlename)




// Example 


let movies = [
    {
       movieName: "avengers",
       year : 2021,
       genere : "action",
       watched : true
    },
    {
       movieName: "the ring",
       year : 2006,
       genere : "horror",
       watched : true
    },
    {
       movieName: "spider man",
       year : 2010,
       genere : "fantasia",
       watched : false
    },
    {
       movieName: "saw",
       year : 2012,
       genere : "horror and drama",
       watched : true
    },
    {
       movieName: "limit less",
       year : 2017,
       genere : "science",
       watched : false
    },
    {
       movieName: "inspection",
       year : 2020,
       genere : "action",
       watched : true
    },
]



movies.forEach((items)=>{
    items.watched == true ? 
     console.log(`${items.movieName + " has been watched"}`) :
     console.log(`${items.movieName + " has been not watched"}`)

    //  if(items.watched == true){
    //     console.log(`${items.movieName + " has been watched"}`);
    //    }else{
    //     console.log(`${items.movieName + " has been not watched"}`);
    //    }
})