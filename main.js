
class Fun {
    constructor() {
        console.log("Object being constructed ");
        this.initUI();
        this.fetchData();
    }

    initUI() {
        // similar to jQuery, # is to the id
        this.inputText = document.querySelector("#name");
        this.outputText = document.querySelector("output");
        // onkeyup must be lowercase
        // bind to input on every key
        this.inputText.onkeyup =  e => console.log(e.key); 
        // bind input to output (on lost of focus)
        this.inputText.onchange = e => this.outputText.innerText = e.target.value; 
    }

    fetchData() {
        //var d = new Request("https://api.myjson.com/bins/uznqi");
        //fetch(d).then ( response => response.json())
        //    .then (data => this.outputText.innerText = data.name);

        // local file has CORS issue
        //fetch("data.json").then( response => console.log(response) );
        fetch("data.json").then( response => console.log(response) );
    }
}

let fun = new Fun();
