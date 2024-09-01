let prom1 = new Promise((resolve, reject) => {
  if(resolve){
    setTimeout(()=>{
        console.log('The code is Resolve');
        
    },3000)
   
  }
  else{
    console.alert('The server is under maintance....')
  }
})
