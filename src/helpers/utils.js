

export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const asyncWrapper = async(callback) => {
    try {
        const result = await callback();
        return [result, null];
    } catch (err) {
        return [null, err];
    }
}