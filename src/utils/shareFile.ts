export const shareFile = (file: File, title: string, text: string) => {
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator
      .share({
        files: [file],
        title,
        text,
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error))
  } else {
    alert(
      `😑 Your system doesn't support sharing files. Try with another browser!`
    )
  }
}
