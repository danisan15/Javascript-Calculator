const textInput = document.querySelector("#text-input")
const buttons = document.querySelectorAll("button")
const equal = document.querySelector("#result")

equal.addEventListener("click", () => {
    if(textInput.value === ""){
        alert("The field is empty")
        return
    }
    textInput.value = eval(textInput.value)
})

buttons.forEach((element) => {
    if(element.textContent === "="){
        return
    }

    if(element.textContent === "Del"){
        element.addEventListener("click", () => {
            if(textInput.value === ""){
                alert("The field is empty")
            }
            textInput.value = ""
        })
        return
    }

    if(element.textContent === "<-"){
        element.addEventListener("click", () => {
            if(textInput.value === ""){
                alert("The field is empty")
            }
            let expression = textInput.value
            expression = expression.split("")
            expression.pop()
            textInput.value = expression.join("")
        })
        return
        
    }

    element.addEventListener("click", () => {
        textInput.value += element.textContent
    })
})