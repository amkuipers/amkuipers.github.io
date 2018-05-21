/**
 * A javascript class that connects html elements, and that retrieves json from remote.
 */
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
        this.updateableMsg = document.querySelector("#updateable-msg");

        // onkeyup must be lowercase method name
        // bind to input on every key
        this.inputText.onkeyup =  e => this.updateableMsg.message = e.key; //e => console.log(e.key); 
        // bind input to output (on lost of focus)
        this.inputText.onchange = e => this.outputText.innerText = e.target.value; 

        // event from the custom component 
        this.updateableMsg.addEventListener('message', e => console.log(e.detail.old + ' to ' + e.detail.new));
    }

    fetchData() {
        //var d = new Request("https://api.myjson.com/bins/uznqi");
        //fetch(d).then ( response => response.json())
        //    .then (data => this.outputText.innerText = data.name);

        // local file has CORS issue
        //fetch("data.json").then( response => console.log(response) );


        // fetch data from the server, handle as json and then log it
        fetch("data.json")
            .then(response => response.json())
            .then(js => console.log(js) );
    }
}

let fun = new Fun();
