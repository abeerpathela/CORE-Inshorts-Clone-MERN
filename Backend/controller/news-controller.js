
import News from '../model/news.js';


export const getNews = async (request, response) => {
    try {
        const size = Number(request.query.size) || 5;
        const skip = Number(request.query.page) || 0;
        const category = request.query.category || '';
        const search = request.query.search || '';

        const query = {};
        
        if (category) {
            query.category = category;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } }
            ];
        }

        const data = await News.find(query).limit(size).skip(size * skip).sort({ timestamp: -1 });
        const total = await News.countDocuments(query);
        
        response.status(200).json({
            news: data,
            total,
            page: skip,
            hasMore: (skip + 1) * size < total
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Error fetching news', error: error.message });
    }
}

export const getCategories = async (request, response) => {
    try {
        const categories = await News.distinct('category');
        response.status(200).json({ categories });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Error fetching categories', error: error.message });
    }
}