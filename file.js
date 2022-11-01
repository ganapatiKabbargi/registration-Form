const formEl=document.querySelector(".form")
        const ul=document.querySelector(".items")
        const btn=document.querySelector(".btn")
        const nameEl=document.querySelector("#username")
        const emailEl=document.querySelector("#email")

        formEl.addEventListener("click",(e)=>{
            formEl.style.backgroundColor="lightgrey"
        })
        nameEl.addEventListener("mouseover",(e)=>{
            e.preventDefault()
            nameEl.style.transform="scale(1.1)"
        })
        emailEl.addEventListener("mouseover",(e)=>{
            e.preventDefault()
            emailEl.style.transform="scale(1.1)"
        })
        nameEl.addEventListener("mouseout",(e)=>{
            e.preventDefault()
            nameEl.style.transform="scale(1)"
        })
        emailEl.addEventListener("mouseout",(e)=>{
            e.preventDefault()
            emailEl.style.transform="scale(1)"
        })
        formEl.addEventListener("submit", onSubmit)

        function onSubmit(e){
           e.preventDefault()
           if(nameEl.value === '' || emailEl.value === '' ){
            alert("Please fill all the fields")
           }else{
            btn.style.backgroundColor="green"
            btn.value="Submitted"
            console.log(nameEl.value)
            console.log(emailEl.value) 
           }
            nameEl.value="";
            emailEl.value="";
           
        }