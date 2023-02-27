import moment from "moment";

const getFallback = (fallback) => {
    return typeof fallback === 'function' ? fallback() : fallback;
}

const remainingTime = (key) => {
    key=JSON.stringify(key)
    const cache = parseCache(key)

    if (!isValidCache(cache)) {
        return -1
    }

    return moment(cache.expiration).fromNow()

}

const isValidCache = (data) => {
    if (!data) return
    if (typeof data !== 'object') return false
    if (!data.hasOwnProperty('value') || !data.hasOwnProperty('expiration')) 
        return false

    return true;
}

const hasExpired = (expiration) => {
    if (expiration) {
        const remainingTime = expiration - Date.now()
        return remainingTime < 0
    }
    return false
}

const parseCache = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        return undefined
    }
}



const get = function(key, fallback) {
    key=JSON.stringify(key)

    const cache = parseCache(key)

    //No cache
    if (!isValidCache(cache)) 
        return getFallback(fallback);

    //Extract data
    const { value, expiration } = cache

    //Check if expired
    if (hasExpired(expiration)) 
        return getFallback(fallback)

    return value;
}

const set = function(key, value, ttl = null) {
    key = JSON.stringify(key)
    let expiration = ttl === null ? null : Date.now() + ttl;
    const cache = JSON.stringify({value, expiration})
    localStorage.setItem(key, cache)
    return value
}

const remove = function(key, value) {
    key = JSON.stringify(key)
    localStorage.removeItem(key)
    return value
}

export default {
    get,
    set,
    remove,
    remainingTime
}