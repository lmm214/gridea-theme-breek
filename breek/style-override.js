const generateOverride = (params = {}) => {
  let result = ''
  if (params.pageBgColor && params.pageBgColor !== '') {
    result += `
      body {
        ${params.pageBgColor};
      }
    `
  }
  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }
  return result
}
module.exports = generateOverride