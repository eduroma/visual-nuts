const getVisualNutsOutput = (number) => {
    if (number % 3 === 0 && number % 5 === 0) return 'Visual Nuts';
    if (number % 3 === 0) return 'Visual';
    if (number % 5 === 0) return 'Nuts';
    return number
}
const printVisualNutsNumbers = ({start=1, end=100} = {}, outputHandler=getVisualNutsOutput) => {

  for (let i = start; i <= end; i++) {
      console.log(outputHandler(i));
    }
}

module.exports = {
  getVisualNutsOutput,
  printVisualNutsNumbers
}
