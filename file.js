        const formEl=document.querySelector(".form")
        const ul=document.querySelector(".items")
        const btn=document.querySelector(".btn")
        const nameEl=document.querySelector("#username")
        const emailEl=document.querySelector("#email")

        
        formEl.addEventListener("submit", onSubmit)
        window.addEventListener("DOMContentLoaded", onReload)
        
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
           
                creatLiEl(user)  
            }
        }

        function creatLiEl(user){

            if(localStorage.getItem(user.email) !==null){
                removefromscreen(user.email)
            }
            let parsedUser=JSON.parse(localStorage.getItem(user.email))

            ul.innerHTML=ul.innerHTML+`<li id=${parsedUser.email}>${parsedUser.username} ${parsedUser.email} <button class="edit" onclick=edit('${parsedUser.email}')>Edit</button><button class="delete" onclick=del('${parsedUser.email}')>Delete</button></li>` 
            
            nameEl.value="";
            emailEl.value="";
        }
            
        function del(email){
            localStorage.removeItem(email)

            removefromscreen(email)
        }

        function edit(email){
            let parsedUser=JSON.parse(localStorage.getItem(email))
            nameEl.value=parsedUser.username;
            emailEl.value=parsedUser.email;
            localStorage.removeItem(email)

            removefromscreen(email)
        }

        function removefromscreen(email){
            liToBeRemoved=document.getElementById(email)
            if(liToBeRemoved){
                ul.removeChild(liToBeRemoved) 
            }  
        }

        function onReload(){
            Object.keys(localStorage).forEach((key)=>{
                let userinfo=JSON.parse(localStorage.getItem(key))
                creatLiEl(userinfo)        
            })
        }

       
           