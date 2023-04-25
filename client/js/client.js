const socket = io();

socket.on('connect', () => {
    socket.emit('playerConnection', 'player connection');
});

socket.on('guessIs', (response) => {
    document.querySelector("#guessImg").src = "client/img/"+response+".png";
})

socket.on('endGame', (response) => {
    alert(response)
})


$(document).on('click', '#saveNickname', function(){
    let nickname = document.querySelector('#nickname').value;
    localStorage.setItem('nickname', nickname);
})

$(document).on('click', '#buttonGuess', function(){
    let guess = document.querySelector('#inputGuess').value;
    let nickname = localStorage.getItem('nickname');
    console.log(nickname)
    socket.emit('playerGuess', {
        'guess': guess,
        'nickname': nickname
    });
})