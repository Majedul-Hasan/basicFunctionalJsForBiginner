// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function(){
    
    // let sortMovie = sortMovieByRank(movies)
    let sortedMovies = sortMovieByAttr(movies, 'rank')
   displayMovie(sortedMovies)
}

 function displayMovie(movies){

let table = '<table>'
table+=  "<tr><th> movie ID </th> <th>Movie name</th> <th>Movie Rank</th></tr>"
//loop
for (let i=0 ; i < movies.length; i++){
table+= "<tr>"
table+= "<td>"+ movies[i].id + "</td>"
table+= "<td>"+ movies[i].title + "</td>"
table+= "<td>"+ movies[i].rank + "</td>"
table+= "</tr>"
//loop
}
table+= "</table>"



    document.getElementById('movi-list').innerHTML = table
 }
    
//shorting by rank 
function sortMovieByRank(movies){

for(let j= 0; j < movies.length-1; j++){
    let max_object = movies[j]
    let max_location= j
    for(let i=j; i<movies.length; i++){
        if(movies[i].rank > max_object.rank){
            max_object = movies[i]
            max_location = i
        }
    }
    movies[max_location] = movies[j]
    movies[j] = max_object
}
return movies

}

//shorting by attribute

// function sortMovieByAttr(movies, sortAttr){


//     for(let j= 0; j < movies.length-1; j++){
//         let max_object = movies[j]
//         let max_location= j
//         for(let i=j; i<movies.length; i++){
//             if(movies[i][sortAttr] > max_object[sortAttr]){
//                 max_object = movies[i]
//                 max_location = i
//             }  
//         }
//         movies[max_location] = movies[j]
//         movies[j] = max_object
//     }
//     return movies

// }


//helper function

function sortMovieByAttr(movies, sortAttr){

    for(let j= 0; j < movies.length-1; j++){
        let max_object = movies[j]
        let max_location= j
        let max = getMovieObject(movies, j, sortAttr)
            max_object = max.max_object
            max_location =max.max_index


        // for(let i=j; i<movies.length; i++){
        //     if(movies[i][sortAttr] > max_object[sortAttr]){
        //         max_object = movies[i]
        //         max_location = i
        //     }  
        // }
        movies[max_location] = movies[j]
        movies[j] = max_object
    }
    return movies

}



function getMovieObject(movies, start, sortAttr){
    let max_object = movies[start]
    let max_location= start
    for(let i=start; i<movies.length; i++){
        if(movies[i][sortAttr] > max_object[sortAttr]){
            max_object = movies[i]
            max_location = i
        }  
    }
    return  {max_object: max_object, max_index: max_location  }

}