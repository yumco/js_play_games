
const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

const userInput = prompt('가위, 바위, 보');

if (userInput !==SCISSORS&& userInput!==ROCK &&userInput!==PAPER){
    alert('가위, 바위, 보 중 하나를 입력하세요');
    } else {
    let comInput;
    
    //math.random()은 0부터 1 사이의 임의의 값을 리턴함 
    const rnd = Math.random();
    
    if(rnd < 0.33){
        comInput = SCISSORS;
    
    } else if(rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }
    
    if(userInput === SCISSORS){
        if(comInput === SCISSORS){
         alert('컴퓨터: ' + comInput + ' -컴퓨터와 비겼습니다.');
    }else if (comInput === ROCK) {
        alert('컴퓨터: ' + comInput+ ' -컴퓨터에게 졌습니다.');
    
     } else {
        alert('컴퓨터: ' + comInput + ' -컴퓨터를 이겼습니다.');
        }    
    } 
}

if(userInput === SCISSORS) {
    if(comInput === SCISSORS) {
        alert('컴퓨터: ' + comInput + '- 컴퓨터와 비겼습니다.' );
    } else if (comInput  === ROCK){
        alert('컴퓨터: ' +comInput + '- 컴퓨터에게 졌습니다.');
    } else {
        alert('컴퓨터 : ' + comInput + '- 컴퓨터를 이겼습니다');
    } else if (userInput === ROCK){
       if(comInput === SCISSORS){
        alert('컴퓨터 :' +comInput + '- 컴퓨터를 이겼습니다');
    } else if (comInput===ROCK){
        alert('컴퓨터 :' + comInput +'- 컴퓨터와 비겼습니다');
    }else {
        alert('컴퓨터: ' +comInput + '- 컴퓨터에게 졌습니다');
    } else {
        if (comInput === SCISSORS){
            alert('컴퓨터: ' +comInput + '- 컴퓨터에게 졌습니다')
        } else if (comInput === ROCK){
            alert('컴퓨터 : ' + comInput + '- 컴퓨터에게 이겼습니다.')
        } else {
            alert('컴퓨터: ' + comInput + '- 컴퓨터와 비겼습니다')
        }
    }
}
}
