let nameToID = {};

function processInput() {
    let inputText = document.getElementById("textInput").value;
    let lines = inputText.split('\n');
    for(let line of lines) {
        let parts = line.split(/\s+/);  // Split by one or more spaces
        if(parts.length === 3) {
            let id = parts[0];
            let fullName = parts[2] + " " + parts[1]; // "first last"
            nameToID[fullName] = id;
        }
    }

    document.getElementById("textInput").style.backgroundColor = "darkgray"

    console.log(nameToID);  // Optional: for debugging purposes
}

function mapNamesToIDs() {
    let inputText = document.getElementById("dataInput").value;
    let names = inputText.split('\n');
    let outputText = "";

    for(let name of names) {
        let trimmedName = name.trim();  // Remove any surrounding whitespace
        var str = "" + nameToID[trimmedName];
        while (str.length < 8) {
            str = "0" + str;
        }
        if(nameToID[trimmedName]) {
            outputText += str + "\n";
        } else {
            outputText += "\n";
        }
    }

    document.getElementById("dataInput").style.backgroundColor = "darkgray"

    document.getElementById("output").value = outputText;
}