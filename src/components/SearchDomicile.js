import React, {useState} from 'react';

const SearchDomicile = ({
    state,
    setState,
    data
}) => {
    const [search, setSearch] = useState('');
    
    const searchDomicile = () =>{
        if(search != ''){
            data = data.filter((item,k)=>{
                if(item.name.toLowerCase().includes(search.toLowerCase()))
                    return true;
                return false
            })
        }

        if(data.length > 0){
            return(
                <div className="item">
                    {
                        data.map((item, key)=>{
                            return <a href="#" className="dropdown-item" key={key} onClick={(e) => {
                                if(e) e.preventDefault();
                                setState({...state, store_domicile: item.id});
                            }}>{item.name}</a>
                        })
                    }
                </div>
            )
        }
    }

    let domicile_name = null;
    domicile_name = data.filter((item, key)=>{
        if(item.id === state.store_domicile){
            return true;
        }
        return false;
    })

    return(
        <div className="dropdown show">
            <a className="input-group dropdown-toggle" id="search-domicile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="form-control">{domicile_name.length > 0 ? domicile_name.map(item => item.name) : ""}</div>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <div className="filter-dropdown">
                    <div className="filter">
                        <div className="input-group">
                            <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="list-item">
                        {searchDomicile()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDomicile;