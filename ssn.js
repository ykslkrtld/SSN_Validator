
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

    if(girdi.length !== 11 || parts.length !== 3){
        sonuc.textContent = "Yanlış değer! 'xxx-xx-xxxx' olacak şekilde 11 haneli olarak tekrar deneyiniz"
    } else if(part1.length !== 3 || (part1[0] === part1[1] && part1[0] === part1[2])){
        sonuc.textContent = "Yanlış değer! ilk bölüm 3 haneli olmalı ve tekrar eden sayılar içermemelidir"
    } else if (part2.length !== 2 || part2 < "01" || part2 > "99"){
        sonuc.textContent = "Yanlış değer! ikinci bölüm 2 haneli olmalı ve '01-99' arası değer içermelidir"
    } else if (part3.length !== 4 || part3 < "0001" || part3 > "9999"){
        sonuc.textContent = "Yanlış değer! üçüncü bölüm 4 haneli olmalı ve '0001-9999' arası değer içermelidir"
    } else{
        sonuc.textContent = `Girilen değer geçerlidir`
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

