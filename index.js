function product(name,category,image,price,gender,sold){
    this.name=name;
    this.category=category;
    this.image=image;
    this.price=price;
    this.gender=gender;
    this.sold=sold;
}
// document.querySelector("#form").addEventListener("submit",submitProduct);
let arr= JSON.parse(localStorage.getItem("Products")) || [];

function submitProduct(e){
    e.preventDefault();
    // console.log("clicked me");
    let form = document.getElementById("Products");
    let name = form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;
    let sold = form.sold.value;

    let p= new product(name,category,image,price,gender,sold);
    arr.push(p);
    localStorage.setItem("Products",JSON.stringify(arr));

    //console.log(arr);
    window.location.href="products.html";

}