const contentContainer = document.querySelector("div.content")

const renderEditors = async () => {
    try {
        const editorListContainer = document.createElement("div")
        const res = await fetch("/api/editors")
        if (!res.ok) {
            const errMsg = await res.text()
            const errComponent = document.createElement("p")
            errComponent.textContent = errMsg
            contentContainer.appendChild(errComponent)
            return
        }

        const data = await res.json()
        if (data) {
            data.forEach(editor => {
                const editorContainer = document.createElement("article")
                editorContainer.classList.add("editor-container")

                const editorHeader = document.createElement("div")
                editorHeader.classList.add("editor-header")

                const editorName = document.createElement("h3")
                const editorImage = document.createElement("img")
                const editorDesc = document.createElement("small")

                const redirectBtn = document.createElement("a")
                redirectBtn.textContent = "Learn more"
                redirectBtn.href = `editors/${editor.name}`

                editorHeader.appendChild(editorImage)
                editorHeader.appendChild(editorName)


                editorName.textContent = editor.name
                editorImage.src = editor.img
                editorDesc.textContent = editor.description


                editorContainer.appendChild(editorHeader)
                editorContainer.appendChild(editorDesc)
                editorContainer.appendChild(redirectBtn)

                editorListContainer.appendChild(editorContainer)
            })
            contentContainer.appendChild(editorListContainer)
        } else {
            const msg = document.createElement("p")
            msg.textContent = "No editors"
            contentContainer.appendChild(msg)
        }

    } catch (err) {
        console.error(err)
    }

}


renderEditors()
