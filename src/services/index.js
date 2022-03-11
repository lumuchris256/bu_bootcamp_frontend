/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'content-type': 'application/json',
    },
});

export default {

    getCategoryData: () => instance({
        'method': 'GET',
        'url': `/category/list`
    }),

    getArticlesData: () => instance({
        'method': 'GET',
        'url': `/article/list`
    }),

    getAuthorsData: () => instance({
        'method': 'GET',
        'url': `/author/list`
    })

}
