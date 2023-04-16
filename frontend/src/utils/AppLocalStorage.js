const getLocalValue = (key)  => {
    let jsonValue= null
    let value = localStorage.getItem(key)
    if (value && value != 'undefined') {
        jsonValue = JSON.parse(value)
    }
    return jsonValue
}


const setLocalValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    return value
}


export {
    getLocalValue,
    setLocalValue
}