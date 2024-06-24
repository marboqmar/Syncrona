//thi calls the API for random memes for our boards. We can't pick because its a free version
const getMeme = async () => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const { data } = await response.json();
    const memes = data.memes as Array<{ url: string }>
    const meme = memes[Math.ceil(Math.random()*memes.length)]
    return meme.url;
  }
  
  export { getMeme };