export const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(','),
    mimeType = arr[0].match(/:(.*?);/)[1],
    decodedData = atob(arr[1]),
    lengthOfDecodedData = decodedData.length,
    u8array = new Uint8Array(lengthOfDecodedData)
  while (lengthOfDecodedData--) {
    u8array[lengthOfDecodedData] = decodedData.charCodeAt(lengthOfDecodedData)
  }
  return new File([u8array], filename, { type: mimeType })
}
