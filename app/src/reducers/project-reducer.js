const defaultData = {
    _id: '',
    name: '',
    author: '',
    dateCreated: '',
    dateAccessed: ''
};

const projectReducer = (state = {...defaultData}, { type, payload }) => {
    switch(type) {
        case 'RESET_PROJECT_DATA':
            return {
                ...defaultData
            };
        case 'UPDATE_PROJECT':
            return {
                ...payload.project
            };
        default:
            return state;
    }
};

export default projectReducer;
