function Student(n,c,i,u,b){
    this.name=n;
    this.course=c;
    this.image=i;
    this.unit=u;
    this.batch= `FT-Web${b}`;

}

function storeData(e){
    e.preventDefault();
    let form=document.getElementById("students_data");
    let name=form.name.value;
    let course=form.course.value;
    let image=form.image.value;
    let unit=form.unit.value;
    let batch=form.batch.value;

    let s1= new Student(name,course,image,unit,batch);

    let data=JSON.parse(localStorage.getItem("students"))||[];

    data.push(s1);

    localStorage.setItem("students",JSON.stringify(data));

    window.location.href="dashboard.html";

    console.log(s1);
}

function calculate(){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    
    let obj={};
    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
           obj[data[i].batch]=0;
        }
    }

    for(let i=0;i<data.length;i++){
        
           obj[data[i].batch]++;
        
    }
    
    
}

calculate();

