// const demo =()=>{
//     setTimeout(()=>{ console.log("Demo....!"); },2000)
//     console.log("I'm Node js..");
// }
// demo()


const waiting = async () => {
    try {
      યું
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("Wait wait..");
                resolve(); 
            }, 3000);
        });
        
    } catch (err) {
        console.log(err);
    }
    

    console.log("NO Wait...");
}

waiting();
