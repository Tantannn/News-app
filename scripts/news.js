'use strict'
// d2b9518dd2a94a2a94022ce2053e111e
// GET https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=d9eff938f7e544ef8e492a57ac3f7493
const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const num = document.getElementById("page-num");
const arrActive = getFromStorage('userActive')
const container = document.getElementById("news-container")



//get new arr active
var newArrActive = getFromStorage("userActive")
var totalResults 


if (userActive) {
    // console.log(aa)

    container.innerHTML = ''
    getDataNews(1, newArrActive.category, newArrActive.pagesize)
    prev.style.display = "none"
    // fetch api & render news
    async function getDataNews(page, category, pageSize) {
        checkPrev()
        await fetch(`
        https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&category=${category}&apiKey=d9eff938f7e544ef8e492a57ac3f7493`)

            .then(d => d.json())
            .then(response => {
                container.innerHTML = ''
                
                totalResults = response.totalResults
                response.articles.forEach(function (data) {


                    try {
                        container.innerHTML += `
                        <div class="card flex-row flex-wrap">
                            <div class="card mb-3" style="">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                      <img src="${data.urlToImage}" class="card-img" alt="img">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card flex-row flex-wrap" c >
                                            <div class="card-img" class="p-4 p-md-5 pt-5">                                              
                                            </div>                                              
                                            <div  class="card-body">
                                              <h4  class="card-title"> ${data.title}</h4>
                                              <p class="card-text"> ${data.description}</p>
                                              <a href="${data.url}" target="_blank" class="btn btn-primary" >View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`

                    }
                    catch (err) {
                        alert("Ops! Something's wrong!")
                    }
                })
                checkNext(totalResults)

            });

    }
    getDataNews()
    // next and prev button
    next.addEventListener("click", function () {
        console.log(num.textContent)

        getDataNews(++num.textContent, arrActive.category, arrActive.pagesize);
        prev.style.display = "block"

    })
    prev.addEventListener("click", function () {
        console.log(num.textContent)
        next.style.display = "block"

        getDataNews(--num.textContent, arrActive.category, arrActive.pagesize)

    })
    function checkPrev() {
        if (num.textContent == 1) {
            prev.style.display = "none";
        } else {
            prev.style.display = "block";
        }
    }

    function checkNext() {
        console.log( totalResults)
        console.log( newArrActive.pagesize)
        if (num.textContent == Math.ceil(totalResults / newArrActive.pagesize)) {
            next.style.display = "none";
        }
    }
    
} else {
    ("Please log in!");
    window.location.assign("../index.html");
}


