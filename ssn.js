
const input = document.querySelector("input")
const button = document.querySelector("button")
const sonuc = document.querySelector(".sonuc")

window.onload = () =>{
    input.focus()
}

button.addEventListener("click", () => {
    let girdi = input.value.toString()
    let parts = girdi.split("-");
    let part1 = parts[0]
    let part2 = parts[1]
    let part3 = parts[2]

    if(girdi.length !== 11 ||
        parts.length !== 3 ||
        (isNaN(part1)) ||
        part1.length !== 3 ||
        part1 == 0 || 
        part1 == 666 ||
        part1 >= 900 ||
        part2.length !== 2 ||
        (isNaN(part2)) ||
        part3.length !== 4 ||
        (isNaN(part3))){
        sonuc.textContent = "Yanlış değer! 'xxx-xx-xxxx' olacak şekilde 9 adet rakam ve 2 adet '-' olarak tekrar deneyiniz"
    } else{
        sonuc.textContent = `Girilen değer ${input.value} geçerlidir`
    }

    setTimeout(() => {
        input.focus()
        input.value = "";
        sonuc.textContent = "";
        sonuc.visibility = "hidden";
    }, 3000);
})

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        button.click()
    }
})