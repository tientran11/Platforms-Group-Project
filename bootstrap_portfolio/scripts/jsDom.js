console.log(document);

function testTheDOM(){
    let nodes = document.getElementsByTagName("li");
    console.log(nodes);
    console.log(nodes.length);

    for(let i=0; i<nodes.length; i++){
        console.log(nodes[i].innerHTML);
        console.log(nodes[i].textContent);
    }

    let checkingNode = document.getElementById("checking");
    checkingNode.textContent = "CHANGED!";
}

function depositChecking(){
    let checkingNode = document.getElementById("checking");
    let checkingInt = parseInt(checkingNode.textContent, 10);
    checkingInt += 100;
    checkingNode.textContent = checkingInt;
}

function depositSavings(){
    let depositNode = document.getElementById("deposit");
    let depositInt = parseInt(depositNode.textContent, 10);
    depositInt += 100;
    depositNode.textContent = depositInt;
}