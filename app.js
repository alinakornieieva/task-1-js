let data = [
    { id: 1, name: 'Task 1', created: 'April 20, 2021', category: 'Task', content: 'It`s a content for task 1', dates: [] },
    { id: 2, name: 'Idea 1', created: 'April 23, 2021', category: 'Idea', content: 'It`s a content for idea 1', dates: [] }
]

const addBtn = document.querySelector('.add-btn')
const addSection = document.querySelector('.add-section')
const form = document.querySelector('.form')
const name = document.querySelector('#name')
const content = document.querySelector('#content')
const category = document.querySelector('#category')

addBtn.addEventListener('click', () => {
    addSection.classList.toggle('show')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    try {
        if (!name.value || !content.value) {
            throw new Error('All fields should be filled')
        }
        const dates = []
        const created = 'should redid'
        const newNote = { id: Date.now(), name: name.value, created, content: content.value, category, dates }
        data = [...data, newNote]
        name.value = ''
        content.value = ''
        category.value = 'Task'
        addSection.classList.remove('show')
        console.log(data)
    } catch (e) {
        alert(e.message)
    }
})
