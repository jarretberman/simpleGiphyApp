console.log("Let's get this party started!");
grabGifs = async (q, key = 'H0X3IldL6LOfzFG0kObiCmzoSVyaLr4S') => {
    const randomGif = await axios.get("http://api.giphy.com/v1/gifs/search", {params : {q,key}}) 
    return randomGif.data.data
}

$('.form-group').on('click', async (evt) =>{
    evt.preventDefault()
    
    if(evt.target.id === 'submit'){
        const $value = $('#gifValue')
        const gifs = await grabGifs($value.val())
        const random = Math.floor(Math.random()*gifs.length)
        console.log(gifs)
        $value.val('')
        $('#gifs').append($('<img class = "col-sm-3 border-primary rounded px-0  m-sm-1"/>').attr('src', gifs[random].images.original.url))
    }

    if(evt.target.id === 'remove'){
        $('#gifs').empty()
    }
})


