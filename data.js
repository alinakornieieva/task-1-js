export let data = [
    {
        id: 1, archived: false, name: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
        created: 'April 20, 2021', category: 'Task', content: 'It`s a content for task 1',
        dates: '3/5/2021,  5/5/2021'
    },
    {
        id: 24, archived: true, name: 'Ran', created: 'April 23, 2021', category: 'Idea',
        content: 'Random content -----', dates: ''
    },
    {
        id: 2, archived: false, name: 'Idea 1', created: 'April 23, 2021', category: 'Idea',
        content: 'It`s a content for idea 1', dates: ''
    }
]

export const addNewNote = (newNote) => {
    return data = [...data, newNote]
}

export const deleteNote = (id) => {
    return data = data.filter((item) => item.id != id)
}

export const archiveNote = (id) => {
    const index = data.findIndex(item => {
        if (item.id == id) return true;
    })
    data[index].archived = !data[index].archived
    return data
}