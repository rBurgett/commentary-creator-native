export const resetProjectData = () => {
    return {
        type: 'RESET_PROJECT_DATA',
        payload: {}
    };
};

export const updateProject = project => {
    return {
        type: 'UPDATE_PROJECT',
        payload: {
            project: {...project}
        }
    };
};
