const userInput =prompt('가위 바위 보!');

if (userInput !=='가위'&& userInput!=='바위'&&userInput!=='보'){
    alert('가위, 바위, 보 중 하나를 입력하세요');
    } else {
    let comInput;
    
    //math.random()은 0부터 1 사이의 임의의 값을 리턴함 
    const rnd = Math.random();
    
    if(rnd < 0.33){
        comInput = '가위';
    
    } else if(rnd < 0.66) {
        comInput ='바위';
    } else {
        comInput = '보'
    }
    
    if(userInput === '가위'){
    //컴퓨터 패 비교
    if(comInput === '가위'){
        alert('컴퓨터: ' +comInput + ' -컴퓨터와 비겼습니다');
    }
    } else if (comInput === '바위') {
    //컴퓨터 패 비교
    alert('컴퓨터: ' + comInput+ ' -컴퓨터에게 졌습니다');
    
     } else {
    // 컴퓨터 패 비교
    alert('컴퓨터: ' + comInput + ' -컴퓨터를 이겼습니다');
    }
   

}





