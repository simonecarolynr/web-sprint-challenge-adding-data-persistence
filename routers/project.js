const express = require("express")
const project = require("../data/seeds/001-project")

const router = express.Router()

//retrieves list of projects
router.get("/projects", async (req, res, next) => {
    try {
        const projects = await project.getProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

//adds a project
router.post('/project', (req, res) => {
    const projectData = req.body;

    project.addProject(projectData)
        .then(project => {
        res.status(201).json(project);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to create new project' });
    });
})

module.exports = router;