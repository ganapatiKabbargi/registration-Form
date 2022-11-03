        const formEl=document.querySelector(".form")
        const ul=document.querySelector(".items")
        const btn=document.querySelector(".btn")
        const nameEl=document.querySelector("#username")
        const emailEl=document.querySelector("#email")

       
        formEl.addEventListener("submit", onSubmit)

        function onSubmit(e){
           e.preventDefault()
           if(nameEl.value === '' || emailEl.value === '' ){
            alert("Please fill all the fields")
           }else{
            localStorage.setItem("username",nameEl.value)
            localStorage.setItem("email",emailEl.value)
           }
            nameEl.value="";
            emailEl.value="";  
        }