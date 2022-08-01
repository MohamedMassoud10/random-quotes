let btn =document.querySelector("button")
let qot = document.querySelector(" .container .quote ")
function allMyData() {
    let D = new XMLHttpRequest;

    D.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let myData = JSON.parse(this.response);

           // console.log(myData[0].quote)
            btn.onclick = () =>{
                random(myData);

            }
        }
    
    }
    D.open("GET", "quotes.json", true);
    D.send();
}

allMyData();


function random(data) {
            let values = Object.values(data);
            let random = Math.floor(Math.random() * values.length);
    let randomValues = values[random]
    
    qot.innerHTML=""
    let q = document.createElement("h2")
    let tXT = document.createTextNode(randomValues.quote)
    q.appendChild(tXT);
    qot.appendChild(q);
    let para = document.createElement("p")
    let txttwo = document.createTextNode(randomValues.autherName)
    para.appendChild(txttwo);
    qot.appendChild(para);


}


