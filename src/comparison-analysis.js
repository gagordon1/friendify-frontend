

export function getTopGenres(userData){
  const userArtists = {}
  userData.forEach(
    e => e.genres.forEach(genre => {
      if(genre in userArtists){
        userArtists[genre]++
      }
      else{
        userArtists[genre] = 0
      }
    })
  )

  const artists = Object.entries(userArtists).
    sort((a,b) => {return b[1] - a[1]}).map(arr => arr[0]).slice(0,5)

  return artists
}

export function getAveragePopularity(data){

  if (data.length > 0){
    return (data.map(obj => obj.popularity).reduce((a,c) => a+c)/data.length)
              .toFixed(0)
  }else{
    return 0
  }

  return 69

}
