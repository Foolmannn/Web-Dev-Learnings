document.body.style.backgroundColor="green";

mess1 =document.querySelector(".message1");
mess2 =document.querySelector(".message2");
mess3 =document.querySelector(".message3");
mess4 =document.querySelector(".message4");
mess5 =document.querySelector(".message5");
mess6 =document.querySelector(".message6");
// console.log(mess);

 


    async function showMessage1(){
        setTimeout(()=>{

            mess1.innerHTML=" Initializing Hacking"
        },1500)

    } 
    async function showMessage2(){
          setTimeout(()=>{

     
                     mess2.innerHTML=" Reading your files"
        },3500)

    } 
    async function showMessage3(){
  setTimeout(()=>{

        mess3.innerHTML=" Password files detected"
        },4500)

    } 
  async function showMessage4(){
     setTimeout(()=>{


        mess4.innerHTML=" Sending all passwords and personal files to server"
        },5500)


    } 
    async function showMessage5(){
        setTimeout(()=>{

         mess5.innerHTML=" Cleaning up"
        },6500)


    } 
    

   

    async function adddot(){
        setInterval(()=>{
            mess1.style.color="green"
        },1000)
        setInterval(()=>{
            mess1.style.color="black"
        },1000)
    }
    // adddot()
    showMessage1()
    showMessage2()
    showMessage3()
    showMessage4()
    showMessage5()
//  mess1.insertAdjacentHTML("afterend","...")
