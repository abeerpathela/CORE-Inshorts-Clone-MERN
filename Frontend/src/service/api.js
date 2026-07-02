import axios from 'axios';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const getNews = async (page, size = 5, category = '', search = '') => {
    try {
        let url = `${URL}/news?page=${page}&size=${size}`;
        if (category) url += `&category=${category}`;
        if (search) url += `&search=${encodeURIComponent(search)}`;
        return await axios.get(url);
    } catch (error) {
        console.error('Error while calling getNews API:', error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        return await axios.get(`${URL}/categories`);
    } catch (error) {
        console.error('Error while calling getCategories API:', error);
        throw error;
    }
};