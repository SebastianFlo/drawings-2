const storeConfig = {
    state: {
        drawings: [],
    },
    mutations: {
        addDrawings(state, drawings) {
            state.drawings = drawings;
        },
    },
};

export default storeConfig;
