


/* Q1. Show an alert box on click on a link. */



/* Q2. Display some Mobile images in browser. On click on an 
image Show the message in alert to user. */


/* Q3. Display 10 student records in table and each row should contain a delete 
button. If you click on a button to delete a record, entire row should be 
deleted. */



function deleteRow(button){

    let row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
}




/* Q4. Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout. */





/* Q5. Show a counter in browser. Counter should increase on click on increase 
button and decrease on click on decrease button. And show updated counter 
value in browser. */




var num = 0;

function increment() {
    num++;
    
    document.getElementById("num_para").innerHTML =  "the value of number is:" +  num;
    
}

function decrement() {
    num--;

    document.getElementById("num_para").innerHTML =  "the value of number is:" +  num;
    
} 

