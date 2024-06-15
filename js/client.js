const socket = io('http://lcalhost:8000');

const form=document.getElementByid('send-container');
const messageInput=document.getElementById('messageInp')
const messageContainer=document.querySelector(".container")
var audio=new Audio('ring.mp3');//

const append=(message,position)=>{
    const messageElement=document.createElement('div')
    messageElement.innerText=message;
    messageElement.classList.add('message')
    messageElement.classList.add(position )
    messageContainer.append(messageElement)
    if(position=='left'){//
    audio.play();
    }
}

form.addEventListener('submit',(e)=>{//
    e.preventDefault();
    const message=messageInput.ariaValueMax;
    append('you:$(message)','right')
    socket.emit('send',message)
    messageInput.value=''
})
const name = prompt("enter your name to join");
    socket.emit('new-user-joined',names)
socket.on('user joined',name =>{
    append('$(name) joined tha chat','center')
})
socket.on('recieve',data =>{
    //append('$(data.name):${data.message} ','left')
})
socket.on('left',data =>{
    append('$(name) left the chat ','left')
})