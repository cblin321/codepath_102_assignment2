const contentContainer = document.querySelector("div.content")

const renderEditor = async () => {
    const params = window.location.pathname.split("/")
    params.shift()
    const editor = params[1]
    try {
        const editorContainer = document.createElement("article")
        const editorHeader = document.createElement("div")
        editorContainer.classList.add("editor-container")

        editorContainer.classList.add("container")
        const res = await fetch(`/api/editors/${editor}`)
        if (!res.ok) {
            const errMsg = await res.text()
            const errComponent = document.createElement("p")
            errComponent.textContent = errMsg
            contentContainer.appendChild(errComponent)
            return
        }

        const data = await res.json()
        console.log(data)
        if (data) {
            const editorName = document.createElement("h2")
            const editorImage = document.createElement("img")
            const editorDesc = document.createElement("p")

            const linkContainer = document.createElement("div")
            const linkLabel = document.createElement("p")
            const editorLink = document.createElement("a")
            console.log(data)

            editorName.textContent = data.name
            editorImage.src = data.img
            editorDesc.textContent = data.description
            editorLink.textContent = data.link
            editorLink.href = data.link
            linkLabel.textContent = "Find the homepage here: "

            editorContainer.appendChild(editorName)
            editorContainer.appendChild(editorImage)
            editorContainer.appendChild(editorDesc)
            editorContainer.appendChild(linkContainer)

            linkContainer.appendChild(linkLabel)
            linkContainer.appendChild(editorLink)

            contentContainer.appendChild(editorContainer)

        } else {
            const msg = document.createElement("p")
            msg.textContent = "No editors"
            contentContainer.appendChild(msg)
        }

    } catch (err) {
        console.error(err)
        console.log(err)
    }

}


renderEditor()
