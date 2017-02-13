window.nativeAPI = {
    initialize() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 0);
        });
    }
};
