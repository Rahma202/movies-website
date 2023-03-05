
const apiKey = "api_key=9813ce01a72ca1bd2ae25f091898b1c7";

const url = "https://api.themoviedb.org/3";

const path = "/discover/movie?sort_by=popularity.desc&";

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const apiUrl = url + path + apiKey;
const detials=document.getElementById("detials");
const container=document.getElementsByClassName("container")[0];
getData(apiUrl)
function getData(url){
    fetch(url).then((res)=>{
         return res.json();
    }).then((data)=>{
        showData(data.results)
        console.log(data.results
            );
    });
}
let x=location.search.split("=")[1];
function showData(data){
data.forEach(movie => {
    const{title,poster_path,id}=movie;
         if(title=="After Ever Happy") {delete(movie)} 
         else  
       { detials.innerHTML +=`<div class="item col-md-4 col-sm-12">
       <a  href="./move.html?id=${id}"><img src="${imgUrl+poster_path}" alt="">
       <h2>${title}</h2></a>
        
     </div>`;
 
    }
       
    
  
})
}
showMoreDetails(apiUrl)
function showMoreDetails(url){
    fetch(url).then((res)=>{return res.json()}).then((dat)=>{
     dat.results.forEach((movie)=>{
      if(movie.id==x){
        const{title,poster_path,overview}=movie;
        container.classList.add("containerStyle")
        container.innerHTML+=` <img src="${imgUrl+poster_path}" alt="">
        <div>
        <h2>${title}</h2>
        <p>${overview}</p></div>
       `
      }
     })
    })
 
}
