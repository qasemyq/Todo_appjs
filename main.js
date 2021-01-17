let form=document.getElementById("form-task")         
let input=document.getElementById('input-task')       
let filter=document.getElementById('filter')          
let listTask=document.querySelector('ul.list-group')  
let clearAll=document.getElementById('clear')



let data;                                             
if(localStorage.getItem('inputs')!=null){              
    data=JSON.parse(localStorage.getItem('inputs'))    
}else{
    data=[]                                            
}


form.addEventListener('submit',function(e){
    e.preventDefault()
    let task=input.value     
    data.push(task)          
    localStorage.setItem('inputs',JSON.stringify(data))   
    input.value = ''

    if(task.length == ""){
        return
    }

    let li=document.createElement('li')     
    li.className="list-group-item mb-2"      
    li.textContent=task                      
    let i=document.createElement('i')       
    i.className="fas fa-times text-danger float-right delete-item"
    li.append(i)                             
    listTask.append(li)                     
});


data.forEach(function (value){
    let li=document.createElement('li')      
    li.className="list-group-item mb-2"      
    li.textContent=value                                                          
    let i=document.createElement('i')        
    i.className="fas fa-times text-danger float-right delete-item"
    li.append(i)                             
    listTask.append(li)  
});

clearAll.addEventListener('click',function(){
    localStorage.clear()
    listTask.innerHTML=""       
});

filter.addEventListener("keyup",function(e){
    let text=e.target.value.toLocaleLowerCase();                         
    document.querySelectorAll('li.list-group-item').forEach(function(value){       
        console.log(value.textContent);
        if(value.textContent.toLocaleLowerCase().indexOf(text)==-1){    
            value.style.display = "none"
        }else{
            value.style.display="block"
        }
    })
})


listTask.addEventListener('click',function(e){         
   let taskData=e.target.textContent                   
   let findData=data.indexOf(taskData)                 
   data.splice(findData,1)                             
   if(e.target.classList.contains('delete-item')== true){
    localStorage.setItem('inputs',JSON.stringify(data))    
    e.target.parentElement.remove()                     
   }

   

})
