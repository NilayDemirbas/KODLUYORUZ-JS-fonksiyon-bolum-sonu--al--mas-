let userFormDOM = document.querySelector(`#userForm`)
userFormDOM.addEventListener(`submit`,formHandler)
const alertDOM =document.querySelector(`#alert`)


const alertFunction = () => `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Holy guacamole!</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`


function formHandler(event) {
    Event.preventDefault()
    const USER_NAME =document.querySelector("#username")
    const SCORE =document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.ariaValueMax, SCORE.value)
        USER_NAME.value =""
        SCORE.value =""
    }else{
        alertDOM.innerHTML = alertFunction("Eksik bilgi girdiniz")   }
   
}


let userListDOM=document.querySelector(`#userlist`)

const addItem = (username,score) {
    let liDOM = document.createElement(`li`)
    liDOM.innerHTML =`
    ${username}  <span class="badge badge-primary badge-pill"${score}</span> `
   
    liDOM.classList.
    ( `list-group-item`,`d-flex`,` justify-content-between `,`align-items-center`) 

    userListDOM.append(liDOM)

}