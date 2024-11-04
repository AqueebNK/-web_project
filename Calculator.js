let disp = 0;
let stre = "";


const button = document.querySelectorAll(".buttons");
button.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        if(e.target.innerHTML == '=') {
            stre = eval(stre);
            document.querySelector('.dis').value = stre;
        } else if (e.target.innerHTML == 'C') {
            stre = "";
            document.querySelector('.dis').value = stre;
        } else {
            console.log(e.target);
            stre = stre + e.target.innerHTML;
            document.querySelector('.dis').value = stre;
        }
    })
})


