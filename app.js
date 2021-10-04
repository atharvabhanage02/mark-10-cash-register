const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const btnCheck = document.querySelector("#btn-check");
const noOfNotes = document.querySelectorAll(".number-of-notes")
const errorMessage=document.querySelector("#error-message");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btnCheck.addEventListener('click',function validateAmount(){
    errorMessage.style.display ="none";
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);
        }else{
            errorMsg("Bill Amount should be greater than Cash Amount")
        }
    }else{
        errorMsg("Bill Amount should be greater than 0")
    }
})

function errorMsg(msg){
    errorMessage.style.display="block";
    errorMessage.innerText=msg;
}

function calculateChange(returnAmount){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);

        returnAmount = returnAmount % availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
   
}