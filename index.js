// code your solution here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}


function mondayWork(action="go to the office"){
    return `This Monday, I will ${action}.`

}

function wrapAdjective(wrapper = "*") {
  return function(adjective = "a hard worker") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  }
}
console.log(wrapAdjective("||"))