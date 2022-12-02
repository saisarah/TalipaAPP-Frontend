const configuration = Object.freeze({
    'API_URL': import.meta.env.VITE_API_URL
})

export default function config(key, fallback = null)
{
    if (configuration[key])
        return configuration[key]

    if (typeof fallback === "function")
        return fallback()
    
    return fallback
}