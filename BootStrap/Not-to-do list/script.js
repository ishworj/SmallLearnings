let taskList = [] ;

const hoursPerWeek = 24 * 7;

const handleOnSubmit = (e) =>{
    const newForm = new FormData(e);
    const task= newForm.get("task");
    const hr = +newForm.get("hr");
    const obj = {
        task,  // if the refrence and the valuse same you can pass the value directly in es6
        hr,
        id:randomIdGenerator(),
        type:"entry"
    }

    // check if there is enough space 
    const existingTotal = taskTotal();
    if (existingTotal + hr > hoursPerWeek) {
        return alert ("Sorry not enough enought time to addd in a week ")
    }

    taskList.push(obj);
  
    displayEntryList();
}

const displayEntryList = (tasklist)=>{
    const entryElm =  document.getElementById("entry-list");

    let str = "";

    const entryList = taskList.filter(item=>item.type==="entry");

    entryList.map((item,i) => {
    str+= `    <tr>
            <td scope="row">${i+1}</td>
            <td>${item.task}</td>
            <td>${item.hr}hrs</td>
            <td class="text-end">
                <button class="btn btn-danger" onclick="deleteEntry('${item.id}')"><i class="fa-solid fa-trash"></i></button>
                
                <button class="btn btn-success" onclick="switchTask('${item.id}', 'bad')">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
            </td>
            </tr>`
    })

    entryElm.innerHTML=str;
    taskTotal();
}
const displayBadList = (tasklist)=>{
    const badElm =  document.getElementById("bad-list");

    let str = "";

    const badList = taskList.filter(item=>item.type==="bad");

    badList.map((item,i) => {
    str+= `    <tr>
            <td scope="row">${i+1}</td>
            <td>${item.task}</td>
            <td>${item.hr}hrs</td>
            <td class="text-end">
                <button class="btn btn-danger" onclick="deleteEntry('${item.id}')"><i class="fa-solid fa-trash"></i></button>
                
                <button class="btn btn-warning" onclick="switchTask('${item.id}', 'entry')">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
            </td>
            </tr>`
    })

    badElm.innerHTML=str;

    document.getElementById("wastedHours").innerText=badList.reduce((acc,item)=>{
        acc+item.hr
    },0);
    
}


const deleteEntry = (itemId) =>{
    if (window.confirm(`do you want to delete from entry list `)) {
        taskList = taskList.filter((item)=>item.id !== itemId )
    
    }
    displayEntryList();
    displayBadList();
}

const randomIdGenerator = (length=6)=>{
    const str="qwertyuiopasdfghjklzxcvbnm123456789QEWTYUIOPASDGHJJKLZXCVBNM";
    let id ="";
    for (let i = 0; i < 6; i++) {
   const randomIndex= Math.floor(Math.random()*str.length);
   id+=str[randomIndex];  
    }
    return id;
}

const switchTask = (itemid,type)=>{
    taskList = taskList.map( (item) => {
        if (item.id===itemid) {
            item.type = type;
        }
        return item;
    })
    displayEntryList();
    displayBadList();
}

const taskTotal = ()=> {
        const totalHours=taskList.reduce((acc,item)=>{
            return acc + item.hr
        },0);

        document.getElementById("totalHours").innerText= totalHours;

        return totalHours;
};