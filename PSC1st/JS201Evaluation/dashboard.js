
function append(){
    let data=JSON.parse(localStorage.getItem("students"))||[];

    let container=document.getElementById("container");
    container.innerHTML=null;

    data.forEach(function (el,index){
        let div=document.createElement("div");

        let img= document.createElement("img");
        img.src =el.image;
        img.style.backgroundColor="red";
        img.style.width="150px";

        let n=document.createElement("p");
        n.innerText= el.name;
        n.style.fontSize="20px";
        n.style.textAlign="center";
        
        let u=document.createElement("p");
        u.innerText= el.unit;
        u.style.fontSize="20px";
        u.style.textAlign="center";

        let b=document.createElement("p");
        b.innerText= el.batch;
        b.style.fontSize="20px";
        b.style.textAlign="center";

        let c=document.createElement("p");
        c.innerText= el.course;
        c.style.fontSize="20px";
        c.style.textAlign="center";

        let btn=document.createElement("button");
        btn.innerText="Remove";

        btn.addEventListener("click",function(){remove(index)});

        div.append(img,n,u,b,c,btn);
        container.append(div);

    });
    


}
append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    
    let newData= data.filter(function(el,i){
        if(i === index)
        {
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i !== index;
        }
        
        
    });

    localStorage.setItem("students",JSON.stringify(newData));
    append();
   console.log(newData);
}
