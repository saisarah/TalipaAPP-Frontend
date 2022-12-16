

export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const asyncWrapper = async(callback) => {
    try {
        const result = await callback();
        return [result, null];
    } catch (err) {
        return [null, err];
    }
}

export const toFormData = (object) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => {
        formData.append(key, object[key]);
    });
    return formData;
}