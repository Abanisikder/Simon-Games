
let gameSeq=[];
let userSeq=[];
let gameStarted=false;
let box=['box-1','box-2','box-3','box-4'];
let level=0;
document.addEventListener("keypress",()=>{
    if(gameStarted==false)
    {
        gameStarted=true;
        console.log("game started");
         levelUp();
    }
   
});
function flash(btn)
{
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
        
    },1000);

}
function check(idx)
{
    // let idx=level-1;
    if(gameSeq[idx]===userSeq[idx])
    {
       
        if(gameSeq.length===userSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    { 
          let p=document.querySelector('p');    
         p.innerText=`The Game is over .Your Level is: ${level}`;
         warning();
         
         resetGame();
    }
}
function warning()
{
    document.querySelector('body').style.backgroundColor='red';
         setTimeout(()=>{
            document.querySelector('body').style.backgroundColor='white';
         },1000);

}
function levelUp()
{
    level++;
    let p=document.querySelector('p');
    p.innerText=` Level:${level}`;
    let ran=Math.floor(Math.random()*3);
    let id=box[ran];
    gameSeq.push(id);
    console.log(gameSeq);
    let sel=document.querySelector(`.${id}`);
    flash(sel);
}
function btnPress()
{
    let btn=this;
    flash(btn);
    let color=btn.getAttribute('id');
    userSeq.push(color);
    check(userSeq.length-1);
}
let allBtn=document.querySelectorAll('.btn');

for(btn of allBtn)
{
    btn.addEventListener("click",btnPress);
}
function resetGame()
{
     gameSeq=[];
 userSeq=[];
 gameStarted=false;
level=0;
}