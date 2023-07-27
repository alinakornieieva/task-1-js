import { data, addNewNote, deleteNote, archiveNote } from "./data.js"
import { displayArchived } from "./archived.js"

const addBtn = document.querySelector('.add-btn')
const addSection = document.querySelector('.add-section')
const form = document.querySelector('.form')
const name = document.querySelector('#name')
const content = document.querySelector('#content')
const category = document.querySelector('#category')
const tbodyFirst = document.querySelector('#tbody_first')
const tbodySecond = document.querySelector('#tbody_second')
const table = document.querySelector('.main-table')

export const displayData = () => {
    let displayedData = data.filter((item) => !item.archived)
    displayedData = displayedData.map(({ id, name, created, category, content, dates }) =>
        `<tr>
            <th scope="row">${name}</th>
            <td>${created}</td>
            <td>${category}</td>
            <td>${content}</td>
            <td>${dates}</td>
            <td id="${id}"><i data-edit class="fa-solid fa-pen me-2"></i>
            <i data-archive class="fa-solid fa-box-archive me-2"></i
              ><i data-delete class="fa-solid fa-trash"></i></td>
        </tr>
        `
    )
    tbodyFirst.innerHTML = displayedData.join('')
    tbodySecond.textContent = null
    const categories = ['Task', 'Random Thought', 'Idea']
    categories.forEach((item) => {
        const active = data.filter((cur) => cur.category === item && !cur.archived).length
        const archived = data.filter((cur) => cur.category === item && cur.archived).length
        if (active > 0 || archived > 0) {
            tbodySecond.insertAdjacentHTML('beforeend', `<tr>
            <th scope="row">${item}</th>
            <td>${active}</td>
            <td>${archived}</td>
        </tr>`)
        }

    })
}

displayData()

addBtn.addEventListener('click', () => {
    addSection.classList.toggle('show')
})

table.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-delete')) {
        deleteNote(e.target.parentElement.id)
        displayData()
        displayArchived()
    }
    if (e.target.hasAttribute('data-archive')) {
        archiveNote(e.target.parentElement.id)
        displayData()
        displayArchived()

    }
    if (e.target.hasAttribute('data-edit')) {
        deleteNote(e.target.parentElement.id)
        displayData()
        displayArchived()

    }
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    try {
        if (!name.value || !content.value) {
            throw new Error('All fields should be filled')
        }
        const dates = name.value.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g) || ""
        const date = new Date()
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const month = months[date.getMonth()];
        const created = `${month} ${date.getDate()}, ${date.getFullYear()}`
        const newNote = { id: Date.now(), archived: false, name: name.value, created, content: content.value, category: category.value, dates }
        addNewNote(newNote)
        name.value = ''
        content.value = ''
        category.value = 'Task'
        addSection.classList.remove('show')
        displayData()
    } catch (e) {
        alert(e.message)
    }
})