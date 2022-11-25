import React, { useState, useEffect } from 'react'
import Axios from "axios";
import Searchbar from '../../components/searchbar/Searchbar';
function Homepage() {
    const [search, setSearch] = useState("") //create state for search input
    const [Data, setData] = useState([])    //create state for Data setup
    const apiId = "1ed46fd3"
    const apiKey = "c44b64c0e91b120bd477927dbb3b95d0"
    useEffect(() => {
        getData()
    }, [])
    //Data from API
    const getData = async () => {
        const result = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${apiId}&app_key=${apiKey}`)
        console.log(result)
        setData(result.data.hits)
    }
    return (
        <>
        {/* searchbar components */}
            <Searchbar p_data={getData} search={search} setSearch={setSearch} />    
            <div className='container'>
                {/* display data from api */}
                <div className='row'>
                    {
                        Data.map((item, index) => (
                            <div className='col-md-4 py-4'>
                                <div className="card" >
                                    <img classmname="card-img-top" src={item.recipe.image} height="170" alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{item.recipe.label}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Homepage;
