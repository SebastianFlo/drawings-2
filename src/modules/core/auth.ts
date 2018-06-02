import router from '../../router';

// const API_URL = 'https://sebastian.party/';
const API_URL = 'api/';
const LOGIN_URL = API_URL + 'login';
const LOGOUT_URL = API_URL + 'logout';

export default {

    user: {
        authenticated: false,
    },

    login(context, creds) {
        context.$http.post(LOGIN_URL, creds)
            .then(({ body }) => {
                if (!body.access_token) {
                    console.error('No access Token');
                    return;
                }

                localStorage.setItem('access_token', body.access_token);

                this.user.authenticated = true;

                router.push('/admin');

            }, (err) => {
                console.error(err);
            });
    },

    logout(context) {
        context.$http
            .post(LOGOUT_URL, {}, {
                headers: this.getAuthHeader(),
            })
            .then(({ body }) => {
                localStorage.removeItem('access_token');
                this.user.authenticated = false;
                router.push('/login');
            }, (err) => {
                console.error(err);
            });
    },

    checkAuth() {
        const jwt = localStorage.getItem('access_token');
        if (jwt) {
            this.user.authenticated = true;
        } else {
            this.user.authenticated = false;
        }
    },

    getAuthHeader() {
        return {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        };
    },
};
