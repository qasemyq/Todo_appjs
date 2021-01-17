// grab
let form=document.getElementById("form-task")         // form
let input=document.getElementById('input-task')       // input asli 
let filter=document.getElementById('filter')          // input bara filter
let listTask=document.querySelector('ul.list-group')  // az tuye tage ul classe list-group ro garb mikonam 
let clearAll=document.getElementById('clear')


// ## 
// inputs mishe esme key dar localstorage 
// JSON.parse string ro tabdil mikone be array 

let data;                                              // in data ro inja tarif mikonam chon age dakhele if tarif konam monhaser be unja mishe va dg nemiunam azash ye ja dg estefade konam 
if(localStorage.getItem('inputs')!=null){              // agar tuye localstorage datayi bud benam inputs va null nabud yani tush data bud   
    data=JSON.parse(localStorage.getItem('inputs'))    // biya va brizesh tuye data 
}else{
    data=[]                                            // else kari anjam nade data bashe array khali 
}
// let data=JSON.parse(localStorage.getItem('inputs'))??[]  // hamun if balayi hast agar datayi vujud dare biya va behem bede age na array khali bede 


// ## 
form.addEventListener('submit',function(e){
    e.preventDefault()
    let task=input.value     // value input ro mirizam tuye task ta betunam input ro befrestam tuye data ya hamun localstorage 
    data.push(task)          // harchi input ke migiram mizaram tuye data 
    localStorage.setItem('inputs',JSON.stringify(data))  // data ro ba keye inputs mizaram tu localstorage va chon array hast tabdilesh mikonam be string ke localstorage fagat string gabul mikone  
    input.value = ''

    // chon khali ham submit mikone ino neveshtam  
    if(task.length == ""){
        return
    }

    // ## showing info
    let li=document.createElement('li')      // bara neshuna dadan ye li dorost mikonam 
    li.className="list-group-item mb-2"      // bad in classhaye bootstrap ro behesh ezafe mikonam    ba className mitunam behesh class ezafe konam classList list classhasho barmigardune 
    li.textContent=task                      // bad inja be li input.value ro ke gozshtam tuye task ezafe konam ta namyesh bede 
    let i=document.createElement('i')        // ye tage i mizaazam bara x hast 
    i.className="fas fa-times text-danger float-right delete-item"
    li.append(i)                             // i ro dakhele tage li mizaram ya hamun appendesh mikonam 
    listTask.append(li)                      // bad li ro mizaram dakhel ul ke ba querysecelctor "ul.list-group" grabesh kardam 
});
// ## age safhe refresh beshe miyad va datahayi ro ke dare namayesh mide dar safhe pak mishe inja mikham ino hal konam 
// hame gestmate showing info ro copy mikonam mizaram tu in 
data.forEach(function (value){
    let li=document.createElement('li')      
    li.className="list-group-item mb-2"      
    li.textContent=value                      // fagat be jaye task mizaram value     value hamun datahayi hast ke dar localStorage gesmate value hast                                      
    let i=document.createElement('i')        
    i.className="fas fa-times text-danger float-right delete-item"
    li.append(i)                             
    listTask.append(li)  
});

// ## pakkardane dataha
clearAll.addEventListener('click',function(){
    localStorage.clear()
    listTask.innerHTML=""       // yani dakhele ul harchi tush html hast ro khali kon 
});
// ## filter info 
filter.addEventListener("keyup",function(e){
    let text=e.target.value.toLocaleLowerCase();                         // gereftane value inpute filter 
    document.querySelectorAll('li.list-group-item').forEach(function(value){       // li ro migiram va ru tak takshun forEach mizam   value mishe har yek az li ha 
        console.log(value.textContent);
        if(value.textContent.toLocaleLowerCase().indexOf(text)==-1){    // text hamun value inpute filter hast migam agar nabud biya      
            value.style.display = "none"
        }else{
            value.style.display="block"
        }
    })
})

// ## hajf kardane har item ba zadane x 

listTask.addEventListener('click',function(e){         // listTask hamun ul hast ke tuye un hast 
   let taskData=e.target.textContent                   // ruye har item click konam age console benevisam midam valuesh ro //     console.log(e.target.className); ro bezanam va alan ruye har kudaum az itemha ya x click konam tu console classesh ro mide 
   let findData=data.indexOf(taskData)                 // age console data ro begiram behem data ro mide pas migam biya az indexof estefdae kon va bebin dataye uni ke rush click mikonam chande  // age console.log(findData);  begiram indexe harkudum ro mide 
   data.splice(findData,1)                             // data darvage array hast ke data tushe va findData darvage mishe indexi ke rush click shode va migam 1 dune pak kon
   // if ro minevisam ta ge ruye x click shod pak kone na harjaye ruye item va az safhe ham pak mikone lahzeyi 
   if(e.target.classList.contains('delete-item')== true){
    localStorage.setItem('inputs',JSON.stringify(data))     // bad injuri minevisam ta pak kone az localstorage  alan age click beshe az localstorage pak mikone vali dar gesmate showing info mimune ke bayad refresh konam ta pak beshe 
    e.target.parentElement.remove()                     // e.target mishe delete-item ya hamun x va parentesh mishe li ke pakesh mikone  
   }

   

})
