import router from '../../router';

// const API_URL = 'https://sebastian.party/';
const API_URL = 'api/';
const DRAWINGS_URL = API_URL + 'items';

export default {
    getItems(context) {
        return context.$http
            .get(DRAWINGS_URL)
            .then(({ body }) => {
                return body;
            }, (err) => {
                console.error(err);
            });
    },

};
