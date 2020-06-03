const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl']
// let here = 'here'
// let absent = 'absent'

// minions.forEach((currentElement) => {
//   console.log(currentElement + ' - here')
// })
let capitalizedMinions = [];
capitalizedMinions = minions.map((capitalize)=>{
  
  for(let i = 0; i < minions.length; i++) {
    if (minions[i] === 'kevin'){ 
      
      break}
    let letter = minions[i].toUpperCase;
    capitalizedMinions[i] = minions[i] 
  }
})
console.log('minions -', capitalizedMinions)