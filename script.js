let nameToID = {};

function processInput() {
    let lines = studentData.split('\n');
    for(let line of lines) {
        let parts = line.split(/\s+/);  // Split by one or more spaces
        if(parts.length === 3) {
            let id = parts[0];
            let fullName = parts[2] + " " + parts[1]; // "first last"
            nameToID[fullName] = id;
        }
    }
}

function mapNamesToIDs() {
    let inputText = document.getElementById("dataInput").value;
    let names = inputText.split('\n');
    let outputText = "";

    for(let name of names) {
        let trimmedName = name.trim();  // Remove any surrounding whitespace
        if(nameToID[trimmedName]) {
            var str = "" + nameToID[trimmedName];
            while (str.length < 8) {
                str = "0" + str;
            }
            outputText += "\'" + str;
        } else {
        }
        outputText += "\n";
    }

    document.getElementById("dataInput").style.backgroundColor = "darkgray"

    document.getElementById("output").value = outputText;
}