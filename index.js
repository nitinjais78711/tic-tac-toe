let turn="X"
 const changeTurn=()=>{
  return turn==="X"?"O":"X";
}
let isgameOver=false
// winning logic
const checkWin = ()=>{
  let boxtext = document.getElementsByClassName('box-item');
  let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
  ]
  wins.forEach(e =>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
          document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
          document.querySelector('.player').innerText = boxtext[e[0]].innerText + " Won"
          
          // isgameover = true 
          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
          document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
          document.querySelector(".line").style.width = "20vw";
          
          // console.log("won"+turn)
          
        }
      })
    }


// changeTurn logic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
  let boxitem = element.querySelector(".box-item")
  element.addEventListener("click",()=>{
    if(boxitem.innerText===""){
      boxitem.innerText=turn;
      turn=changeTurn()
      checkWin()
      if (!isgameOver){
        document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
      }
    }
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  })
}) 
            //------------reset------------  ---

            reset.addEventListener('click', ()=>{
                let boxtext= document.querySelectorAll('.box-item');
               Array.from(boxtext).forEach(element => {
                    element.innerText = ""
                    document.getElementsByClassName("player")[0].innertext="Player"
          
                })
                turn ="X"
                isgameOver=false
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
              })