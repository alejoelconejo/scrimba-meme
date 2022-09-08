export default async function fetchApi(setAllMemes) {
  const res = await fetch('https://api.imgflip.com/get_memes')
  const dataApi = await res.json()
  setAllMemes(dataApi.data.memes)
}
