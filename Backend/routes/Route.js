import express from 'express';

import { getNews, getCategories } from '../controller/news-controller.js';

const route = express.Router();


route.get('/news', getNews);
route.get('/categories', getCategories);


export default route;