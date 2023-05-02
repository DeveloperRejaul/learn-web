const int = document.querySelector('#textarea')
const nameList = document.querySelector('#list')
const gaveAtry = document.querySelector('#gave-a-try')
const display = document.querySelector('#display')
const fname = document.querySelector('#First-Winner')
const sname = document.querySelector('#Second-Winner')
const tname = document.querySelector('#Third-Winner')

const perticipentName = []
int.addEventListener("keypress", (event) => {

    if (event.key === "Enter" ) {
        let newName = event.target.value.split(", ");
        if (newName[0] !== "") {
            newName.forEach(name => {
                perticipentName.push(name)
                let item = creatListItem(name)
                nameList.appendChild(item)
            });
        }
    }

})


function creatListItem(name) {
    let li = document.createElement('li')
    li.className = " px-2 border mt-3 "
    li.innerHTML = name
    return li
}

gaveAtry.addEventListener("click", () => {
    if (perticipentName.length === 0) {
       
    }else{
        
        let shafleName = shaple(perticipentName)
        for (let i = 1; i < shafleName.length; i++){
            (function ( i, count){
                setTimeout(()=>{
                    let rand = Math.floor(Math.random()*(shafleName.length))
                    display.value = shafleName[rand]
                    if (count === shafleName.length -1) {
                        if (!fname.innerHTML) {
                            fname.innerHTML = shafleName[rand]
                            let ind = perticipentName.indexOf(shafleName[rand])
                            perticipentName.splice(ind,1)
                        }else if (!sname.innerHTML) {
                            sname.innerHTML = shafleName[rand]
                            let ind = perticipentName.indexOf(shafleName[rand])
                            perticipentName.splice(ind,1)
                        }else if (!tname.innerHTML) {
                            tname.innerHTML = shafleName[rand]
                            let ind = perticipentName.indexOf(shafleName[rand])
                            perticipentName.splice(ind,1)
                        }else{
                            alert("Raffle Draw Already Competed")
                        }
                    }
                },i)
            } )(i*100, i)
           
        }
    }
})

function shaple(arr) {
    let shapplearr = [...arr]
    for (let i = shapplearr.length -1; i > 0; i--){
        let rand = Math.floor(Math.random()* (i+1))
        let temp = shapplearr[rand]
        shapplearr[rand] = shapplearr[i]
        shapplearr[i] = temp

    }     
    return shapplearr
}