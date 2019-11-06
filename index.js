// Your code here
function mapToNegativize(array){
    const newArray = []
    for(let i = 0; i<array.length; i++){
        newArray[i] = array[i] *-1
    }
    return newArray
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    const newArray = []
    for(let i = 0; i<array.length; i++){
        newArray[i] = array[i] * 2
    }
    return newArray
}

function mapToSquare(array){
    const newArray = []
    for(let i=0; i<array.length; i++){
        newArray[i] = Math.pow(array[i],2)
    }
    return newArray
}

function reduceToTotal(array, startingpoint = 0){
    let total = startingpoint
    for(let i = 0; i<array.length; i++){
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array){
    let truthy = true
    for(let i=0; i<array.length; i++){
        if(!array[i]){
            truthy = false
            break
        }
    }
    return truthy
}

function reduceToAnyTrue(array){
    let truthy = false
    for(let i=0;i<array.length;i++){
        if(array[i]){
            truthy = true
            break
        }
    }
    return truthy
}
