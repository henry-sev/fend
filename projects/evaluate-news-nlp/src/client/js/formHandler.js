function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })


    document.getElementById('results').innerHTML = '';

    const formdata = new FormData();
    formdata.append("key", "35c6a1388a5251d2ae876f78f25970f5")
    formdata.append("txt", formText)
    formdata.append("lang", "en")
    formdata.append("model", "general")

    const requestOptions = {
        method: "POST",
        body: formdata,
    }

    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            updateUI(data)
        })
        .catch(error => {console.log("Error", error)})


}

const updateUI = (data) => {
    // const dl = document.createElement('dl')
    const sentenceList = document.createElement('div')
    const conceptList = document.createElement('div')
    const entityList = document.createElement('div')

    sentenceList.innerHTML = "Sentence List:"
    conceptList.innerHTML = "Concept List:"
    entityList.innerHTML = "Entity List:"


    if (data.sentence_list) {
        const ul = document.createElement('ul')

        for (const sentence of data.sentence_list) {
            const li = document.createElement('li')
            li.innerHTML = sentence.text
            ul.appendChild(li)
        }
        sentenceList.appendChild(ul)
    }

    if (data.sentimented_concept_list) {
        const ul = document.createElement('ul')

        for (const sentence of data.sentimented_concept_list) {
            const li = document.createElement('li')
            li.innerHTML = sentence.form
            ul.appendChild(li)
        }
        conceptList.appendChild(ul)
    }

    if (data.sentimented_entity_list) {
        const ul = document.createElement('ul')

        for (const sentence of data.sentimented_entity_list) {
            const li = document.createElement('li')
            li.innerHTML = sentence.form
            ul.appendChild(li)
        }
        entityList.appendChild(ul)
    }

    document.getElementById('results').appendChild(sentenceList)
    document.getElementById('results').appendChild(conceptList)
    document.getElementById('results').appendChild(entityList)

}

export { handleSubmit }
