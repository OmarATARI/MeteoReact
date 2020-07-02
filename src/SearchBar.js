import React from 'react'


const SearchBar = ({handleSubmission, obj}) => (
    <form onSubmit={handleSubmission} className="form-inline justify-content-center">
        <div className="form-group">
            <label className="sr-only">Ville</label>
        </div>
        <div className="form-group mx-sm-3 mb-2">
            <label>
                Ville :
                <input type="text" ref={ (c) => obj.city = c } name="input_city"/>
            </label>
        </div>
        <div className="form-group row">
            <div className="col-sm-10">
                <button type="submit" className="btn btn-primary mb-2">Rechercher</button>
            </div>
        </div>
    </form>
)

export default SearchBar