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
                let user={
                    username : nameEl.value,
                    email : emailEl.value
                }
                localStorage.setItem((user.email),JSON.stringify(user))
           
           
                let liEl=document.createElement("li") 
                let editbtn=document.createElement("button")
                let deletebtn=document.createElement("button")
                editbtn.appendChild(document.createTextNode("Edit"))
                editbtn.className="edit"
                deletebtn.appendChild(document.createTextNode("Delete"))
                deletebtn.className="delete"
                let text=JSON.parse(localStorage.getItem(user.email))
                
                liEl.appendChild(document.createTextNode(text.username+" ")) 
                liEl.appendChild(document.createTextNode(text.email))
                liEl.appendChild(editbtn)
                liEl.appendChild(deletebtn)
                
                ul.appendChild(liEl) 

                nameEl.value="";
                emailEl.value="";
            }
        }

       
           