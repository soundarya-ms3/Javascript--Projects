const container = document.querySelector(".posts-list-container");

function fetchXMLContent() {
  const xml = new XMLHttpRequest();
  xml.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xml.responseType = "json";
  xml.send();

  xml.onload = () => {
    if (xml.status === 200) {
      displayResults(xml.response);
    } else {
      console.log("error");
    }
  };
}

function displayResults(posts) {
  container.innerHTML = posts
    .map(
      (item) => `
        <div class="post-item">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        </div>`
    )
    .join(" ");
}

//fetchXMLContent();

function fetchUsingFetchMethod() {
  const posts = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  posts
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

// fetchUsingFetchMethod();

async function fetchUsingAsyncMethod(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
    const posts = await response.json();
    displayResults(posts);
    
}

//fetchUsingAsyncMethod()

function helperMethod(method,url){
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () =>{
            if(xhr.status === 200){
                resolve(xhr.response)
            }else{
                reject(xhr.response)
            }
        }
    })
    return promise;
}

async function fetchUsingXMLAndAsyncAwait(){
    const response = await helperMethod('GET',"https://jsonplaceholder.typicode.com/posts");
    displayResults(response)
}

fetchUsingXMLAndAsyncAwait()
