const sendBtn = document.querySelector('#sendBtn');
const messageIn=document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click',sendMessage)

function sendMessage(){
    //collect a value after clicking the send button
    let content = messageIn.value;

    //if statement for when the content is empty, throw an alert
    //if content ==='equal' to '' empty value then alert
    if(content === ''){
        alert('Please Enter Text')
    }

    //else statement
    else{
        //get the messageIn value and place it in a n inner HTML
    messageOut.innerHTML = content;
    //refresh the input box when the send button is pressed
    messageIn.value = '';
    //
    }
}