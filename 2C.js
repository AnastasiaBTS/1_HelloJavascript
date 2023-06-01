function numberChecker(num) { //name of the function and get the argument num
    if (num > 20) { //if 20 greater than num
      return `${num} is greater than 20`; //return template
    } else if (num === 20) { //if 20 = num 
      return `${num} is equal to 20`; //return template
    } else if (num < 20) { //if 20 less then num
      return `${num} is less than 20`; //return template
    } else { //if num is not a number
      return `${num} isn't even a number :(`; //return template
    }
  }
  console.log (numberChecker(8))
  