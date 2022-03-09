import React, { useEffect, useState } from "react";
import axios from 'axios'
// createContext HERE this doing a lot for
// create Context/Provider, get and set out data

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [foods, setFoods] = useState([]);
  //onMount-run foods

  useEffect(()=>{
    //runs when component mounts


    getFoods()
  },[])

const getFoods = async()=>{
  try {
    let res = await axios.get('/api/foods')
    setFoods(res.data)
  }catch(err){
    alert('err getting foods')
    console.log(err.response.data)
  }
}

const deleteFood = async (id) =>{
try{
  let res = await axios.delete(`/api/foods/${id}`)
  console.log(res)

  let filteredFoods = foods.filter(f=> f.id !== id)
setFoods(filteredFoods)

} catch(err){
  alert('err in deleting')
}
}
  // create an object that will be 'global state'
  const foodProviderThing = {
    getFoods,
    foods
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={foodProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
