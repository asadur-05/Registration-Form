const form = document.querySelector(".reg")
const msg =document.querySelector("#msg")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const isconfirm = confirm("Are you sure to submit the form?")

    if(isconfirm){
        msg.textContent ="Form Submited Successfuly";
        setTimeout(() => {
            form.reset();
            msg.textContent = "";
        }, 3000);
    }else{
        msg.textContent ="Form Submition Canceled";
        msg.style.color = "red";
        setTimeout(() => {
            msg.textContent = "";
        }, 3000);
    }
})