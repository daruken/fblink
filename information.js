var showFlag = false;

function showAboutUs(){   
    var divElement = document.createElement("DIV");
    var textNode = document.createTextNode("Trio developers for a better world.");
    divElement.setAttribute("style", "height:50px;background-color:black;color:whitesmoke;font-family:monospace;font-size:25px;padding:50px;text-align:center;");
        
    divElement.appendChild(textNode);
    document.body.appendChild(divElement);
    
    if(Boolean(showFlag == false))
    {
        divElement.appendChild(textNode);
        document.body.appendChild(divElement);    
        showFlag = true;
    }
    else
    {
        divElement.removeChild(textNode);
        document.body.removeChild(divElement);
        showFlag = false;
        window.location.reload();
    }
}

function showContactUs(){   
    var divElement = document.createElement("DIV");
    var textNode = document.createTextNode("Just call us. +82-10-8300-1827");
    divElement.setAttribute("style", "height:50px;background-color:black;color:whitesmoke;font-family:monospace;font-size:25px;padding:50px;text-align:center;");
        
    divElement.appendChild(textNode);
    document.body.appendChild(divElement);
    
    if(Boolean(showFlag == false))
    {
        divElement.appendChild(textNode);
        document.body.appendChild(divElement);    
        showFlag = true;
    }
    else
    {
        divElement.removeChild(textNode);
        document.body.removeChild(divElement);
        showFlag = false;
        window.location.reload();
    }
}

function showHelp(){
    var divElement = document.createElement("DIV");
    var textNode = document.createTextNode("Just do it.");
    divElement.setAttribute("style", "height:50px;background-color:black;color:whitesmoke;font-family:monospace;font-size:25px;padding:50px;text-align:center;");
        
    divElement.appendChild(textNode);
    document.body.appendChild(divElement);
    
    if(Boolean(showFlag == false))
    {
        divElement.appendChild(textNode);
        document.body.appendChild(divElement);    
        showFlag = true;
    }
    else
    {
        divElement.removeChild(textNode);
        document.body.removeChild(divElement);
        showFlag = false;
        window.location.reload();
    }
}
