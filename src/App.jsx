import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import useDebounce from './use-debounce';
import {searchCharacters} from './api'


function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const debouncedSearchTerm = useDebounce(searchTerm, 1000)

    useEffect(() => {
        if (debouncedSearchTerm.trim()) {
            setIsSearching(true)
            setResults([])
            searchCharacters(debouncedSearchTerm).then(results => {
                setIsSearching(false);
                setResults(results)
            })
        } else {
            setResults([])
        }
    }, [debouncedSearchTerm])


    return (
        <div>
            <input
                placeholder="search.."
                type="text"
                onChange={e => setSearchTerm(e.target.value)}
            />

            {isSearching && <div> Searching ...</div>}

            {
                results.map(result => (
                    <div key={result.id}>
                        <h4>{result.name}</h4>
{/*                        <img
                            src={`${result.logo_path}`}
                        />*/}
                    </div>
                ))
            }

        </div>
    )
}

export default App;