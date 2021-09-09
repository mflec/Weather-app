const includes= (city, cities) => {
    let array = cities&&cities.length<5? cities : cities.slice(cities.length - 5, cities.length)
    for (let index = 0; index < array.length; index++) {
        const element = array[index].name;
        if (element == city.name) return true
    }
    return false
}

export default includes