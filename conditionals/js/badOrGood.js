function badOrGoodMovie(movie_rating){

if(movie_rating>=7){
    console.log('Its a good Movie')
    return 'good Movie'
}else {
    console.log('Its a bad Movie')
    return 'Bad Movie'
}
}
console.log(badOrGoodMovie(5.6))

badOrGoodMovie(7)

var movie_result

function badOrGoodMovies(movie_rating){

    if(movie_rating>=7){
        // console.log('Its a good Movie')
        movie_result = 'good Movie'
    }else {
        // console.log('Its a bad Movie')
        movie_result= 'Bad Movie'
    }
    return movie_result
    }
    console.log(badOrGoodMovies(5.6))
    
    badOrGoodMovies(7)