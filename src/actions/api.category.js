export const getCategory=async(category)=>{
    const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${category}`)
    const data=await response.json()
    return data
}