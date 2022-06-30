let input=document.querySelector("input")
let para=document.querySelector("p")
let button=document.querySelector("button")
let errormsg=document.querySelector(".errorMsg")

let numArr1=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
let numArr2=["","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","nighty"]
let numArr3=["","hundred","thousand","lakhs","crore"]

button.addEventListener("click",(eve)=>{
    let inputNum=input.value
if(inputNum<=10000){
    if(inputNum){
        errormsg.style.display="none"
        para.style.display="block"

    //condition for number greater than and equal to 0 and less than 20
 if(Number(inputNum)>=0 && Number(inputNum) <20){
        console.log(inputNum);
        para.textContent=numArr1[inputNum]

     //condition for number greater than and equal to 20 and less than 100
    }else if(Number(inputNum)>= 20  && Number(inputNum) < 100){
        secondlastInt=inputNum.slice((inputNum.length-2),(inputNum.length-1))
        lastInt=inputNum.slice((inputNum.length-1))

        if(Number(lastInt)==0){
            para.textContent=`${numArr2[Number(secondlastInt)]} `
        }
        else{
            para.textContent=`${numArr2[Number(secondlastInt)]} ${numArr1[Number(lastInt)]}`
        } 
        
     //condition for number greater than and equal to 100 and less than 1000
    }else if(Number(inputNum)>= 100  && Number(inputNum) < 1000){

        thirdlastInt=inputNum.slice((inputNum.length-3),(inputNum.length-2))
        secondlastInt=inputNum.slice((inputNum.length-2),(inputNum.length-1))
        lastInt=inputNum.slice((inputNum.length-1))
        lastTwoInt=`${secondlastInt}${lastInt}`

        if(Number(lastInt)==0  ){
            console.log(lastTwoInt)
            para.textContent=`${numArr1[Number(thirdlastInt)]} ${numArr3[1]} ${numArr2[Number(secondlastInt)]} `
        }else if (Number(lastTwoInt)<20){
            para.textContent=`${numArr1[Number(thirdlastInt)]} ${numArr3[1]} ${numArr1[Number(lastTwoInt)]} `
        }else{
        para.textContent=`${numArr1[Number(thirdlastInt)]} ${numArr3[1]} ${numArr2[Number(secondlastInt)]} ${numArr1[Number(lastInt)]}`
        }
    

    }else if(Number(inputNum)>= 1000  && Number(inputNum) <= 10000){
        fourthastInt=inputNum.slice(0,(inputNum.length-3))
        thirdlastInt=inputNum.slice((inputNum.length-3),(inputNum.length-2))
        secondlastInt=inputNum.slice((inputNum.length-2),(inputNum.length-1))
        lastInt=inputNum.slice((inputNum.length-1))
        lastTwoInt=`${secondlastInt}${lastInt}`

        if(Number(lastInt)==0){
            para.textContent=`${numArr1[Number(fourthastInt)]} ${numArr3[2]} ${numArr2[Number(secondlastInt)]} `

        }else if(Number(lastTwoInt)<20){
            para.textContent=`${numArr1[Number(fourthastInt)]} ${numArr3[2]} ${numArr1[Number(thirdlastInt)]} ${numArr3[1]} ${numArr1[Number(lastTwoInt)]}`
        }else{
        para.textContent=`${numArr1[Number(fourthastInt)]} ${numArr3[2]} ${numArr1[Number(thirdlastInt)]} ${numArr3[1]} ${numArr2[Number(secondlastInt)]} ${numArr1[Number(lastInt)]}`
        }
    }}else{
        errormsg.style.display="block"
    }  }else{
        errormsg.textContent="please enter number less than ten thousand"
        errormsg.style.display="block"
        para.style.display="none"
    }  

})