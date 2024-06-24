export const getMenu = async()=>{
    const response = await fetch("http://localhost:8000/api/products/getAll");
    const data = await response.json()
    return data;
}