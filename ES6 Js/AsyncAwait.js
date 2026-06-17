// const demo =()=>{
//     setTimeout(()=>{ console.log("Demo....!"); },2000)
//     console.log("I'm Node js..");
// }
// demo()


const waiting = async ()=>{
    try{
        await setTimeout(()=>{console.log("Wait wait..");},3000)       
    }catch(err){
        console.log(err);
    }
    console.log("NO Wait...");
}
waiting()