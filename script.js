const form=document.getElementById('form');
const name=document.getElementById('name').value;
const description=document.getElementById('description').value;
const price=document.getElementById('price');
const quantity=document.getElementById('quantity').value;
const list=document.getElementById('list');
const API_URL='http://localhost:3000';

form.addEventListener('submit',async(e)=>{

try {
    e.preventDefault();
const data={
    
        "name":name,
        "description":description,
        "price":parseFloat(price),
        "quantity":quantity
    }
    const product=await axios.post(`${API_URL}/add`,data);
    console.log(product);
} catch (error) {
    console.error(error);
}
})