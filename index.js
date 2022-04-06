// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, matchExpression) {
    return drivers.filter(function (driver) {
        if(matchExpression === 'Sa'&& driver.includes(matchExpression)) {
            return driver;
        }
        return null;
    });
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}