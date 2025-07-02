const cart=document.getElementById("add-product");
const price=document.getElementById("product-price");
const name=document.getElementById("product-name");
const ul=document.getElementById("cart");
const totalPriceSpan = document.getElementById('total-price');

let a=[];
let tempprice=0;
function updateTotalPrice(el){
  tempprice=tempprice+el;
  totalPriceSpan.textContent = tempprice.toFixed(2);
  
}
cart.addEventListener("click",()=>{
  
  const li=document.createElement("li");
  li.id="item";
  ul.append(li);
  li.innerHTML=`${name.value} $${parseFloat(price.value).toFixed(2)}`;
  li.dataset.price=parseFloat(price.value);
  const rmbtn=document.createElement("button");
rmbtn.textContent="Remove";
rmbtn.addEventListener("click",removeItem);
li.appendChild(rmbtn);
  updateTotalPrice(parseFloat(price.value));
  name.value="";
  price.value="";
  
})

 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  totalPriceSpan.textContent = tempprice.toFixed(2);
  item.remove();
}
