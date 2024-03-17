const data = [
  {
    id: "1",
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    id: "2",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    id: "3",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    id: "4",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
];

const accordionContainer = document.querySelector(".accordion-container")

function createAccordionData(){
    accordionContainer.innerHTML = data.map((item) =>
    `<div class="accordion-item">
        <div class="accordion-title">
            <h3>${item.person}</h3>
        </div>
        <div class="accordion-content">
            <p>${item.quote}</p>
        </div>
    </div>`
    ).join(" ")
}

createAccordionData();

const accordionTitles = document.querySelectorAll(".accordion-title")

accordionTitles.forEach((title) =>{
    title.addEventListener("click",()=>{
        if(title.classList.contains('active')){
            title.classList.remove('active')
        }else{
            let activeTitles = document.querySelectorAll('.active');
            activeTitles.forEach((item) => item.classList.remove('active'))
            title.classList.add('active')
        }
    })
})