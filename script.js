const input = document.querySelector('input')
const downloadButton = document.querySelector('button')

downloadButton.addEventListener('click',(e)=>{
    e.preventDefault() 
    downloadButton.innerText = 'Downloading file.....'
    fetchFile(input.value)  
})

const fetchFile = (url) =>{
    fetch(url).then(res => res.blob()).then(file =>{
        const tempUrl = URL.createObjectURL(file)
        const aTag = document.createElement('a')
        aTag.href = tempUrl
        aTag.download = url.replace(/[^\\\/]/,'')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(tempUrl)
        downloadButton.innerText = 'Download File'
    }).catch(()=>{
        downloadButton.innerText = 'Download File'
        alert("Unabel to Download selected file")
        input.value = ""
    })
}