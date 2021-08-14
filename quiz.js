// Selectors
const quizForm=document.querySelector(".formQuiz");
const submit =document.querySelector("#submit-quiz");
const modal =document.querySelector(".modal");
const emojiModal =document.querySelector(".emoji");
const commentModal =document.querySelector(".comment");
const close =document.querySelector(".close");
const radio =document.querySelectorAll(".radio");
// Global variables
const ans = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
// Event listeners
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const data = new FormData(quizForm);
    let index=0;
    let score=0;
    for(element of data){
        if(element[1]==ans[index]){  //Compares and checks user selected option and real answer
            score++;
            radio[index].style.backgroundColor="#32de84";
        }
        else{
            radio[index].style.backgroundColor="#FF0800"
        }
        index++;
    }
    showModal();
    //console.log(marks);
    function showModal(){
        modal.classList.add("active"); //Triggers modal
        if(score>4){
            emojiModal.textContent="🎉"
            commentModal.textContent=`Congratulations! You scored ${score}`
            
        }
        else{
            emojiModal.textContent="😐"
            commentModal.textContent=`You scored ${score} `
       
        }
        
    }
})
close.addEventListener("click",()=>{ //Closes the modal
    modal.classList.remove("active");
})

