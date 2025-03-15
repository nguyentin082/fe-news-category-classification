import axiosClient from '../configs/axiosClient';

const classifyApi = {
    predict: (text: string) => {
        return axiosClient.post('/classify-text', { content: text });
    },
};

export default classifyApi;
