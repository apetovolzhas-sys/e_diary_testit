function scrollToForm() {

document.getElementById("form").scrollIntoView({
behavior: "smooth"
})

}


function submitForm(){

const email = document.getElementById("email").value

if(email === ""){
alert("Введите email")
return
}

let emails = JSON.parse(localStorage.getItem("emails")) || []

emails.push(email)

localStorage.setItem("emails", JSON.stringify(emails))

document.getElementById("success").innerText =
"Спасибо! Мы отправим вам доступ к сервису."

document.getElementById("email").value = ""

}
