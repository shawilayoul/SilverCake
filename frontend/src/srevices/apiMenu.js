export const getMenu = async()=>{
    const response = await fetch("http://localhost:8000/api/products/getAll");
    const data = await response.json()
    return data;
}
export const getProductById = async(id)=>{
    const response = await fetch(`http://localhost:8000/api/products/getProduct/${id}`);
    const data = await response.json()
    return data;
}
