import { data, archiveNote } from "./data.js"
import { displayData } from "./app.js"
const archivedTable = document.querySelector('.archived')
const tbodyArchived = document.querySelector('#tbody_archived')
const archiveBtn = document.querySelector('.archive-btn')

archivedTable.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-unarchive')) {
        archiveNote(e.target.id)
        displayData()
        displayArchived()
    }
})

archiveBtn.addEventListener('click', () => {
    archivedTable.classList.toggle('archived')
})

export const displayArchived = () => {
    let displayedData = data.filter((item) => item.archived)
    displayedData = displayedData.map(({ id, name, created, category, content, dates }) =>
        `
        <tr>
            <th scope="row">${name}</th>
            <td>${created}</td>
            <td>${category}</td>
            <td>${content}</td>
            <td>${dates}</td>
            <td>
            <i id=${id} data-unarchive class="fa-solid fa-box-archive"></i
              >
        </tr>
    `
    )
    tbodyArchived.innerHTML = displayedData.join('')
}

displayArchived()