class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id
        this.title = title
        this.description = description;
        this.imgUrl = imgUrl
    }
}

class Repository {
    constructor() {
        this.activities = []
        this.id= 0
    }

    getAllActivities() {
        return this.activities
    }

    createActivity(id, title, description, imgUrl) {
        const activity = new Activity(id, title, description, imgUrl)
        this.activities.push(activity)
        this.id++
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id)
    }
}

document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault()

    const title = document.getElementById('title').value
    const description = document.getElementById('descripcion').value
    const imgUrl = document.getElementById('imgUrl').value

    if (!title && !description && !imgUrl) {
        alert('Por favor, completa al menos un campo')
        return;
    }

    const activityElement = document.createElement('div')
    activityElement.classList.add('activity')
    activityElement.innerHTML = `
        <h4>${title}</h4>
        <p>${description}</p>
        <img src="${imgUrl}" alt="Imagen de la actividad">
    `

    const activitiesContainer = document.getElementById('activities-container')
    activitiesContainer.appendChild(activityElement)

    document.getElementById('title').value = ''
    document.getElementById('descripcion').value = ''
    document.getElementById('imgUrl').value = ''



    // boton de eliminar la actividad c: //
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = `
        <img src="assets/delete-button.svg" alt="Eliminar">
    `;
    deleteBtn.addEventListener('click', function() {
        activityElement.remove()
    })
    activityElement.appendChild(deleteBtn)
})