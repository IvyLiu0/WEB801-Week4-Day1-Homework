/*------random codes-------*/
//function to generate combinaion of characters
function generateCode(){
    //create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; //initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //generate charater multiple times using a loop
    for (i=1; i<=8;i++){
        var char = Math.random() * str.length; //random select a character from the variable and then store in a new variable
        code += str.charAt(char); //accumulate the generated character into a string of 8characters
    }
    return code; //return the final accumulated string when loop ends
}

//get html element to display
document.getElementById("codes").innerHTML=generateCode();

//disable button
function disableButton(){
    document.getElementById("sumbit").disabled=true;
}

//activate function
disableButton();