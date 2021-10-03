import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const Convert = ({language, text}) => {
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: process.env.REACT_APP_GOOGLE_TRANSLATE_API
            }
        })
    }, [language, text]);

    return (
        <div></div>
    );
};

export default Convert;