import React from 'react';

const SearchTerm = (props) => {

    return (
        <div className="search-box">
            <input
                placeholder="Search..."
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                type="text"
                id="search"
            ></input>
            {/* {searchTerm.length > 0 && (
                <button
                    // onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                    style={{ color: "yellow" }}
                >
                    x
                </button>
            )
            } */}
        </div >
    )
}

export default SearchTerm;