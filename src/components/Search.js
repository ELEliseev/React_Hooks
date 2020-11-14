import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Search = props => {
    const { show } = useContext(AlertContext)
    const onSubmit = (event) => {
        if (event.key === "Enter") {
            show('This is Alert')
        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="input Nick-name..."
                onKeyPress={onSubmit}
            ></input>
        </div>
    )
}
export default Search