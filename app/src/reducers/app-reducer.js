const defaultData = {
    projects: [
        {
            _id: '12345',
            name: 'Simple Truth',
            author: 'Ryan Burgett',
            dateCreated: new Date().toISOString(),
            dateAccessed: new Date().toISOString()
        },
        {
            _id: '23451',
            name: 'Purpose Power Love',
            author: 'Ryan Burgett',
            dateCreated: new Date().toISOString(),
            dateAccessed: new Date().toISOString()
        },
        {
            _id: '34512',
            name: 'Christ Fellowship',
            author: 'Ryan Burgett',
            dateCreated: new Date().toISOString(),
            dateAccessed: new Date().toISOString()
        }
    ]
};

const appReducer = (state = defaultData, { type, payload }) => {
    switch(type) {
        case 'CREATE_PROJECT':
            return {
                ...state,
                projects: [
                    ...state.projects,
                    {...payload.project}
                ]
            };
        case 'UPDATE_PROJECTS':
            return {
                ...state,
                projects: [...payload.projects]
            };
        default:
            return state;
    }
};

export default appReducer;
