function findMatching(drivers, string) {
    return drivers.filter((driver)=>driver.toLowerCase() === string.toLowerCase()
    )
}

const fuzzyMatch = (drivers, string) =>{
    return drivers.filter((driver)=>driver.startsWith(string))
}


function matchName (drivers, string) {
    return drivers.filter((drivers) => drivers.name === string);
} 