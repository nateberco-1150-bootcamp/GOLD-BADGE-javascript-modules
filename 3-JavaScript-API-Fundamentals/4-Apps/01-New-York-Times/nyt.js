const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'IXELa3L4RW0WwN6GmzzhsGIAfQNXHiKL'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search'); //pulling id or class???
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');


nav.style.display = 'none'; // eventual pagination - hiding things not ready to be displayed

let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false; //later

        //1                     //2   
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3



function fetchResults(e) {
e.preventDefault();

url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; ///????????
console.log("URL:", url); //?????

if(startDate.value !== '') {
  console.log(startDate.value)
url += '&begin_date=' + startDate.value;
};

if(endDate.value !== '') {
url += '&end_date=' + endDate.value;
};

//1
fetch(url).then(function(result) { //fetch is a promise
    return result.json();
  }).then(function(json) {
    displayResults(json); //1 & //3
  });
}



 function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild); //1
  
    }

    let articles = json.response.docs;

 

    if(articles.length >= 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
      } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
      }
    
  
    if(articles.length === 0) {
      console.log("No results");
      let para = document.createElement('p')
      para.innerText="No results found."
      //append to something
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');  //1
            let para = document.createElement('p');  
            let clearfix = document.createElement('div');
    
          let current = articles[i];
          console.log("Current:", current);
    
          link.href = current.web_url;
          link.textContent = current.headline.main;
    
          para.textContent = 'Keywords: '; //3
    
          //4
          for(let j = 0; j < current.keywords.length; j++) {
            //5
            let span = document.createElement('span');   
            //6
            span.textContent += current.keywords[j].value + ' ';   
            //7
            para.appendChild(span);
          }

             //2
      if(current.multimedia.length > 0) {
        //3
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        //4
        img.alt = current.headline.main;
      }

    
      clearfix.setAttribute('class','clearfix');

      article.appendChild(heading); //committing 99-104
      heading.appendChild(link);
      article.appendChild(img); //5
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
};

function nextPage(e) {
    pageNumber++; //1
    fetchResults(e);  //2
    console.log("Page number:", pageNumber); //3
 };

 function previousPage(e) {
    if(pageNumber > 0) { //1
      pageNumber--; //2
    } else {
      return; //3
    }
    fetchResults(e); //4
    console.log("Page:", pageNumber); //5
  
  };