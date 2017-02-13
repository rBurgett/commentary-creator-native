import uuid from 'node-uuid';

export const createProject = name => {
    return {
        type: 'CREATE_PROJECT',
        payload: {
            project: {
                _id: uuid.v4(),
                dateCreated: new Date().toISOString(),
                dateAccessed: new Date().toISOString(),
                name
            }
        }
    };
};
