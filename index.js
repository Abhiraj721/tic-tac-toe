let main=document.querySelectorAll("button").length;
var g=0
let move=new Audio("move.mp3")
let victory=new Audio("victory.mp3")
let getchance=document.querySelector(".takeme")
document.querySelector(".restart").addEventListener("click",function(){
  window.location.reload()
})
for(let i=0;i<main;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      let change=  document.querySelectorAll("button")[i]
      if(g==0 || g%2==0 &&   change.innerHTML=="click me" && g!=1){
        getchance.innerHTML="Its Player 1 chance"
       change.innerHTML="<img class='nice' src='https://cdn-icons-png.flaticon.com/128/32/32178.png' height='80px' width='80px'>"
       move.play()

           g++
           console.log(g+"x")
       
      }
      else if(change.innerHTML=="click me"){
        getchance.innerHTML="Its Player 2 chance"
           change.innerHTML="<img src='https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776' height='80' width='80'>"
           move.play()
g++
console.log(g+"o")
      }
      check()
      function check(){
console.log("sd")
let b0=document.querySelectorAll("button")[0].innerHTML
let b1=document.querySelectorAll("button")[1].innerHTML
let b2=document.querySelectorAll("button")[2].innerHTML
let b3=document.querySelectorAll("button")[3].innerHTML
let b4=document.querySelectorAll("button")[4].innerHTML
let b5=document.querySelectorAll("button")[5].innerHTML
let b6=document.querySelectorAll("button")[6].innerHTML
let b7=document.querySelectorAll("button")[7].innerHTML
let b8=document.querySelectorAll("button")[8].innerHTML
var images = $(b3).attr("src");

    console.group(images)
    // rows
   if( $(b0).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b1).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b2).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b0).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b1).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    if( $(b0).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
      getchance.innerHTML=" Player 1 Wins"
      getchance.style.fontSize="34px"
      getchance.style.backdropFilter="blur(9px)"
      getchance.style.color="purple"
      victory.play()
      return
     

    }
    else if( $(b0).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
      getchance.innerHTML=" Player 2 Wins"
      getchance.style.fontSize="34px"
      getchance.style.backdropFilter="blur(9px)"
      getchance.style.color="purple"
      victory.play()
      return
    }

   }
  else if( $(b3).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b4).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b5).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b3).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b4).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b5).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    if( $(b3).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
      getchance.innerHTML=" Player 1 Wins"

      getchance.style.fontSize="34px"
      getchance.style.backdropFilter="blur(9px)"
      getchance.style.color="purple"
      victory.play()
      return
    }
    else if( $(b3).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" ){
      getchance.innerHTML=" Player 2 Wins"
      getchance.style.fontSize="34px"
      getchance.style.backdropFilter="blur(9px)"
      getchance.style.color="purple"
      victory.play()
      return
    }


  }
  else if( $(b6).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b7).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b8).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b6).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b7).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b8).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    if( $(b6).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
      getchance.innerHTML=" Player 1 Wins"
      getchance.style.fontSize="34px"
      getchance.style.backdropFilter="blur(9px)"
      getchance.style.color="purple"
      victory.play()
      return
    }
    else if( $(b6).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
      getchance.innerHTML=" Player 2 Wins"
      getchance.style.fontSize="34px"
      getchance.style.backdropFilter="blur(9px)"
      getchance.style.color="purple"
      victory.play()
      return
    }

  }
  // 0 1 2
  // 3 4 5
  // 6 7 8


  // colums
 else if( $(b0).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b3).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b6).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b0).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b3).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b6).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
  if( $(b0).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
    getchance.innerHTML=" Player 1 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }
  else if( $(b0).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    getchance.innerHTML=" Player 2 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }

  }
 else if( $(b1).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b4).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b7).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b1).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b4).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b7).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
  if( $(b1).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
    getchance.innerHTML=" Player 1 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }
  else if( $(b1).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    getchance.innerHTML=" Player 2 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }

 }
 else if( $(b2).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b5).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b8).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b5).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b8).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
  if( $(b2).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
    getchance.innerHTML=" Player 1 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }
  else if( $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    getchance.innerHTML=" Player 2 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }

 }
//  diagonals
 else if( $(b2).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b4).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b6).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b4).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b6).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
  if( $(b2).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
    getchance.innerHTML=" Player 1 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }
  else if( $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    getchance.innerHTML=" Player 2 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }

 }
 else if( $(b0).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b4).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" && $(b8).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png" || $(b0).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" && $(b4).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b8).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
  if( $(b0).attr("src")=="https://cdn-icons-png.flaticon.com/128/32/32178.png"){
    getchance.innerHTML=" Player 1 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
  }
  else if( $(b0).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776" &&  $(b2).attr("src")=="https://cdn-icons.flaticon.com/png/128/3524/premium/3524377.png?token=exp=1656141775~hmac=d824c68193129b6f5cc876cd93728776"){
    getchance.innerHTML=" Player 2 Wins"
    getchance.style.fontSize="34px"
    getchance.style.backdropFilter="blur(9px)"
    getchance.style.color="purple"
    victory.play()
    
  }

 }
  }
  function restart(){
    var take=prompt("Want to restart the game?(y or n)")
    take.toLowerCase()
    
  }
    })
      }

      
 

