import React, { useState, useEffect } from 'react'
import Axios from "axios";
import Searchbar from '../../components/searchbar/Searchbar';
function Homepage(props) {
    const [search, setSearch] = useState("") //create state for search input like mango,coffee
    const [Data, setData] = useState([])    //create state for Data setup
    const [favourite, setFavourite] = useState([]) 
    const apiId = "1ed46fd3"
    const apiKey = "c44b64c0e91b120bd477927dbb3b95d0"
    console.log("props", props)
    useEffect(() => {
        getData()
    }, [])
    //Data from API
    const getData = async () => {
        const result = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${apiId}&app_key=${apiKey}`)
        console.log("data", result)
        setData(result.data.hits)
    }
    //add to favourite icon
    const addtofavourite = (index, image, label) => {
        props.setFav((old) => {
            old.push({
                image: image,
                label: label
            })
            return [...old]
        })
        let tmp = favourite
        tmp.push(index)
        setFavourite(tmp)
    }
      //remove to favourite icon
    const removeFromfav = (index, image, label) => {
        let tmpfav = props.fav
        tmpfav = tmpfav.filter((element) => {
            return element.label != label
        })
        props.setFav([...tmpfav])
        let i = favourite.indexOf(index)
        let tmp = [...favourite]
        tmp.splice(i, 1)
        setFavourite(tmp)
    }
    useEffect(() => {
        console.log(props.fav)
    }, [props.fav])
    return (
        <>
            {/* searchbar components */}
            <Searchbar p_data={getData} search={search} setSearch={setSearch} />
            <div className='container'>
                {/* display data from api */}
                <div className='row'>
                    {
                        Data.map((item, index1) => (
                            <div className='col-md-4 py-4' key={index1}>
                                <div className="card" >
                                    <img classmname="card-img-top" src={item.recipe.image} height="170" alt="Card image" />
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <h4 className="card-title">{item.recipe.label}</h4>
                                        {favourite.indexOf(index1) > -1 ?

                                            <i class="fa-solid fa-heart"
                                                onClick={() => removeFromfav(index1, item.recipe.image, item.recipe.label)} style={{ fontSize: "22px" }}></i>
                                            :
                                            <i class="fa-regular fa-heart" onClick={() => addtofavourite(index1, item.recipe.image, item.recipe.label)} style={{ fontSize: "22px" }}></i>
                                        }


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
