function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    document.getElementById('results').innerHTML = '';

    console.log("::: Form Submitted :::")
    formText
    ? fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(data => {
        sentimentAnalysis(data.application_key, formText)
    })
    .catch(error => console.log("Error", error))
    : alert("Invalid Input!")
}

const sentimentAnalysis = (key, text) => {
    const formdata = new FormData();
    formdata.append("key", key)
    formdata.append("txt", text)
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
    const dl = document.createElement('dl')

    if (data.sentence_list) {
        const sentenceList = document.createElement('dt')
        sentenceList.innerHTML = "Sentence List:"

        for (const sentence of data.sentence_list) {
            const dd = document.createElement('dd')
            dd.innerHTML = sentence.text
            sentenceList.appendChild(dd)
        }
        dl.appendChild(sentenceList)
    }

    if (data.sentimented_concept_list) {
        const conceptList = document.createElement('dt')
        conceptList.innerHTML = "Concept List:"

        for (const concept of data.sentimented_concept_list) {
            const dd = document.createElement('dd')
            dd.innerHTML = concept.form
            conceptList.appendChild(dd)
        }
        dl.appendChild(conceptList)
    }

    if (data.sentimented_entity_list) {
        const entityList = document.createElement('dt')
        entityList.innerHTML = "Entity List:"

        for (const entity of data.sentimented_entity_list) {
            const dd = document.createElement('dd')
            dd.innerHTML = entity.form
            entityList.appendChild(dd)
        }
        dl.appendChild(entityList)
    }

    document.getElementById('results').appendChild(dl)
}

export { handleSubmit }
