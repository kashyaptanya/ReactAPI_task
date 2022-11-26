import React from 'react'
function Searchbar(props) {
    // console.log(props)
    //searchInput function
    const onInputchange = (e) => {
        props.setSearch(e.target.value)
    }
    //searchClick function
    const clickChange = () => {
        if(!props.search){
            alert("please fill the input field")
        }
        { props.p_data() }
       }
       const favClick =() => {
        alert("OOPS! Favourite Products is pending ")
       }
    return (
        <>
          {/* Hearder */}
            <div className='container text-center bg-dark p-5 text-white'>
                <h1 className=" display-1  ">Food App</h1>
                <div className="input-group">
                    <input type="text" className="form-control" value={props.search} onChange={onInputchange} placeholder="Search here...      like coffee, cake" />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-primary" onClick={clickChange} ><b>Search</b></button>
                       
                    </div>
                    <button type="button" className="btn btn-primary rounded-pill mx-1 px-3" onClick={favClick} ><b>Favourite</b></button>
                </div>
            </div>
        </>
    )
}
export default Searchbar