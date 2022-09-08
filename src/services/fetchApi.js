export default async function fetchApi(setAllMemes, setIsLoading) {
  const res = await fetch('https://api.imgflip.com/get_memes')
  const dataApi = await res.json()
  setAllMemes(dataApi.data.memes)
  setIsLoading(false)
}
