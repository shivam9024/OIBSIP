function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById('result').value += character;
}

function calculate() {
    var result = document.getElementById('result').value;
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
}
