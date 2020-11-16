import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

const Search = props => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)
    const onSubmit = (event) => {
        if (event.key !== "Enter") {
            return
            //show('This is Alert')
            //console.log(value);
        }
        github.clearUsers()
        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('This is Alert')
        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="input Nick-name..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            ></input>
        </div>
    )
}
export default Search