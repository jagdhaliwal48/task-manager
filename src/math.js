const calculateTip = (total, percentage) =>{
    const percentageM = percentage/100
    const tip = total * percentageM
    return tip
}

const fahrenheitToC = (temp) =>{
    return (temp - 32)/1.8
}

const celsiusToF = (temp) =>{
    return (temp * 1.8) + 32
}

const add = (a, b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout( () =>{
            if(a <0 || b <0){
                return reject('Numbers must be non-negative')
            }
            resolve(a +b)
        }, 2000)
    })
}

module.exports = {calculateTip, fahrenheitToC, celsiusToF, add}