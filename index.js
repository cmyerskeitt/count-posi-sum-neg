function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) return []
    let countPositive = 0
    let sumNegative = 0 
    for (let i = 0 ; i < input.length; i++){
      if (input[i] > 0 ){
        countPositive += 1
      } else if (input[i] <= 0 ){
        sumNegative += input[i]
      } else{
        return []
      }
    }
    return [countPositive, sumNegative]
}