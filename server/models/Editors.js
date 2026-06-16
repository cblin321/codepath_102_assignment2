const data = [
    {
        "name": "Neovim",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg",
        "description": "A hyperextensible Vim-based editor focused on extensibility and usability. Highly configurable via Lua.",
        "link": "https://neovim.io/"
    },
    {
        "name": "VS Code",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
        "description": "Microsoft's popular open-source editor with a massive extension ecosystem and built-in Git support.",
        "link": "https://code.visualstudio.com/download"
    },
    {
        "name": "Emacs",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg",
        "description": "A legendary, infinitely extensible editor. More of an operating system than just an editor.",
        "link": "https://www.gnu.org/software/emacs/"
    },
    {
        "name": "Helix",
        "image": "https://raw.githubusercontent.com/helix-editor/helix/master/logo.svg",
        "description": "A modern terminal editor with multiple selections and a built-in LSP, no plugins needed.",
        "link": "https://helix-editor.com/"
    },
    {
        "name": "Cursor",
        "image": "/public/cursorLogo.svg",
        "description": "An AI-first code editor built on VS Code, designed to let you write and edit code with natural language.",
        "link": "https://cursor.com/"
    },
    {
        "name": "Sublime Text",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png",
        "description": "A fast, lightweight editor with a polished UI and a loyal following for its speed and simplicity.",
        "link": "https://www.sublimetext.com/"
    }
]

function getAll() {
    return data
}

function getFirstByName(name) {
    const editorData = data.filter(editor => editor.name === name)

    if (editorData.length < 1) {
        const notFoundErr = new Error("Err: editor not found")
        notFoundErr.status = 404
        throw notFoundErr
    }

    return editorData[0]
}

module.exports = {
    getAll,
    getFirstByName
}
