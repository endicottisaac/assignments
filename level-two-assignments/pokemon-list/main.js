const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)

xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
        console.log(data.objects)
    }
}

const showData= arr => {
    for(let i = 0; i < arr.length; i++){
        const h2 = document.createElement('h2')
        h2.textContent = arr[i].name
        document.body.appendChild(h2)
    }
}