let questions=[
    {
        id: 1,
        question:"1. What is the square root of 144?",
        answer: " 12",
        options:[" 12",
        " 18",
        "  14",
        " 16"]
    },
    {
        id:2,
        question:"2. What is the cube of 6?",
        answer: "216",
        options: ["206", "316", "216", "264"]
    },
    {
        id:3,
        question:"3. What is the square root of 576?",
        answer: "24",
        options: ["23", "26", "24", "36"]
    }, 
    {
        id:4,
        question:"4. What is the square of 17?",
        answer: "289",
        options: ["279", "289", "199", "449"]
    }, 
    {
        id:5,
        question:"5. What is the square root of 324?",
        answer: "18",
        options: ["12", "14", "16", "18"]
    },
    {
        id:6,
        question:"6. What is the cube of 9?",
        answer: "729",
        options: ["737", "792", "681", "729"]
    },
    {
        id:7,
        question:"7. What is the square root of 1024?",
        answer: "32",
        options: ["28", "24", "32", "34"]
    },
    {
        id:8,
        question:"8. What is the cube root of 8?",
        answer: "2",
        options: ["4", "1", "2", "8"]
    },
    {
        id:9,
        question:"9. What is the cube root of 64?",
        answer: "4",
        options: ["2", "6", "4", "8"]
    }
    ,{
        id:10,
        question:"10. What is the square root of 15625?",
        answer: "125",
        options: ["115", "135", "125", "105"]
    }
]

let value=JSON.stringify(questions)
localStorage.setItem("question",value)

let question_count = 0
let points = 0

window.onload = function (){
    show(question_count)
}

function show(count){
    let question=document.getElementById("questions")
    let [first,second,third,fourth]=questions[count].options
    question.innerHTML =` 
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
<li class="option">${first}</li>
<li class="option">${second}</li>
<li class="option">${third}</li>
<li class="option">${fourth}</li>
</ul>
`;

toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
    for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("active"))
    {
    option[i].classList.remove("active");
    }
    }
    option[i].classList.add("active");
    };
    }
    }

    function next(){
        if(question_count == questions.length - 1 ){
        location.href = "./cube-end.html"
        }
        
        let user_answer=document.querySelector("li.option.active").innerHTML
        if(user_answer == questions[question_count].answer){
        points +=1
        sessionStorage.setItem("points",points)
        } else{
        points +=0
        sessionStorage.setItem("points",points)
        }
         
        console.log(points);

        question_count++
        show(question_count)
        }