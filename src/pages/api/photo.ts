import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { url } = req.query;

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    try {
        const response = await axios.get(url, {
            responseType: 'arraybuffer',
        });

        res.setHeader('Content-Type', response.headers['content-type'] || 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=86400'); // Кеширование на 1 день

        res.status(200).send(Buffer.from(response.data));
    } catch (error) {
        console.error('Error fetching photo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
