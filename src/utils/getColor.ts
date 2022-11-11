function percentage(partialValue: number, totalValue: number) {
  return (100 * partialValue) / totalValue
}

const getColor = (slotsFree: number, space: number) => {
  const math = parseFloat(percentage(slotsFree, space).toFixed(2))
  if (math < 33.33) {
    return 'green'
  } else if (math >= 33.33 && math < 66.66) {
    return 'yellow'
  } else {
    return 'red'
  }
}
export default getColor
