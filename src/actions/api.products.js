export const getProducts=async(tipo)=>{
    const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${tipo}`)
    const data_tipo=await response.json()
    return data_tipo
}