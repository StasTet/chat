export const signInUser = (payload) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = {
            status: 200,
            data: payload
        };

        return resolve(data);
    }, 500);
});
