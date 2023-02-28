const setOfWords = ["you are the best compititor that i have face in my life",
"Armed with this data, it will suggest different products to me than to you.",
"Steaks are cooked to order in one of four different styles.",
"It would be different if you grudged losing a laborer--that's how I regard him",
"I guess it's just something different - something we aren't used to yet.",
"I suppose it is different things for different people - dreams or goals."];

const msg = document.getElementById('msg');
const words = document.getElementById('words');
const btn = document.getElementById('btn');
let startTime,endTime;

const playGame = () =>{
let randNumber = Math.floor(Math.random() * setOfWords.length);
msg.innerText = setOfWords[randNumber];
let date = new Date();
startTime = date.getTime();
btn.innerText = "Done";
}

const endGame = () =>{
let date = new Date();
endTime = date.getTime();
let totalTime = ((endTime - startTime)/1000);
console.log(totalTime); 

let totalStr = words.value;
let wordCount  = wordCounter(totalStr);

let speed = Math.round((wordCount/totalTime) * 60);
let finalMsg = "you typed total "+ speed + " words per minute."
finalMsg += compareWords(msg.innerText , totalStr);

msg.innerText = finalMsg;
}

const compareWords = (str1 , str2) =>{
let words1 = str1.split(" ");
let words2 = str2.split(" ");
let cnt = 0;

words1.forEach(function(item , index){
if( item == words2[index]){
cnt++;
}
})

let errorWords = (words1.length - cnt);
return(cnt +" correct out of "+ words1.length + " words and the total numbers of error are " + errorWords + "." );
}

const wordCounter = (str) =>{
let response = str.split(" ").length;
console.log(response);
return response;
}

btn.addEventListener('click', function(){
if(this.innerText == 'Start'){
words.disabled = false;
playGame();
}else if(this.innerText == 'Done'){
words.disabled = true;
btn.innerText = "Start";
endGame();
}
})