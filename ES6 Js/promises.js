const fetchUser = (userId)=>{
    return new Promise((resolve,reject)=>{
        const isConnected = true

        setTimeout(()=>{
            if(isConnected){
                resolve({id:userId,name:"kishan",role:"admin"})
            }else{
                reject("Database connection Failed..!")
            }
        },1500)
    })
}

fetchUser(101)
    .then((user)=>{
        console.log("User Found:",user)
    })
    .catch((error)=>{
        console.log("Error :",error)
    })

    console.log("Demo....");
    