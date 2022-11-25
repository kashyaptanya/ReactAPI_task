import React from 'react'
function Searchbar(props) {
    console.log(props)
    //searchInput function
    const onInputchange = (e) => {
        props.setSearch(e.target.value)
    }
    //searchClick function
    const clickChange = () => {
        { props.p_data() }
    }
    return (
        <>
          {/* Hearder */}
            <div className='container text-center bg-dark p-5 text-white'>
                <h1 className=" display-1  ">Food App</h1>
                <div className="input-group">
                    <input type="text" className="form-control" value={props.search} onChange={onInputchange} placeholder="Search here...." />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-primary" onClick={clickChange} ><b>Search</b></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Searchbar