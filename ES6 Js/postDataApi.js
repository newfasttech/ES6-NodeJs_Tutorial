const getPost = async ()=>{
    try{
        const url = `https://jsonplaceholder.typicode.com/post`
        const res = await fetch(url)
    
        if(!res.ok){
            throw new Error("server is Busy... ")
        }

        const data = await res.json()
  
  
        console.log(data);
    
    
}
catch(err){
    console.error("Error:",err.message);
    
}
}
getPost()