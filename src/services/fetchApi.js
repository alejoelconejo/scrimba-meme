const apiUrl = 'https://api.imgflip.com/get_memes'

export default async function fetchApi() {
  return fetch(apiUrl).then((res) => res.json())
}
