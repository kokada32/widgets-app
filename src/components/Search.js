import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { queryAllByAltText } from '@testing-library/dom';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });
        };

        search();
    }, [term]); //run every time 'term' changes

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input className="input" value={term} onChange={ e => setTerm(e.target.value)} />
            </div>
        </div>
    )
};

export default Search;