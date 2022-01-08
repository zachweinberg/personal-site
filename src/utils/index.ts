export const formatNumber = (number: number) => {
  const nfObject = new Intl.NumberFormat('en-US')
  return nfObject.format(number)
}
