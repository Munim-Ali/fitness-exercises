export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0fba000c66msh9757e4f6beef05bp1459c4jsn571c9a720821',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      },
};
  
// export const youtubeOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//     },
// };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();

    return data; 
}