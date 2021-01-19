function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(arg="*"){
    return function(adjective="Big"){
        return `You are ${arg}${adjective}${arg}!`
    }
}

let Calculator = {
    add: function(a,b){
        return (a + b)
    },
    subtract: function(a,b){
        return (a - b)
    },
    multiply: function(a,b) {
       return (a * b)
    },
    divide: function(a,b){
        return(a/b)
    }
}

function actionApplyer(num, array=0){
    if (array !=0) {
       let total = num
       for (let i=0; i < array.length; i++) {
           total = array[i](total)   
       }
       return total
    } else {
        return num
    }
    
}


arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }]