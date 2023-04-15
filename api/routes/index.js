const express = require('express')
const router = express.Router()

// Users
const UserByIdController = require('../controllers/userById.controller')
const UserCreateController =  require('../controllers/userCreate.controller')
const UserSearchController = require('../controllers/userSearch.controller')
const UserUpdateController = require('../controllers/userUpdate.controller')
const UserDeleteByIdController = require('../controllers/userDeleteById.controller')
router.get('/user/:id', UserByIdController)
router.post('/user', UserCreateController)
router.put('/user', UserUpdateController)
router.delete('/user/:id', UserDeleteByIdController)
router.post('/user/search', UserSearchController)

// Projects
const ProjectByIdController = require('../controllers/projectsById.controller')
const ProjectCreateController =  require('../controllers/projectsCreate.controller')
const ProjectSearchController = require('../controllers/projectsSearch.controller')
const ProjectUpdateController = require('../controllers/projectsUpdate.controller')
const ProjectDeleteByIdController = require('../controllers/projectsDeleteById.controller')
router.get('/project/:id', ProjectByIdController)
router.post('/project', ProjectCreateController)
router.put('/project', ProjectUpdateController)
router.delete('/project/:id', ProjectDeleteByIdController)
router.post('/project/search', ProjectSearchController)

// Contributions
const ContributionByIdController = require('../controllers/contributionsById.controller')
const ContributionCreateController =  require('../controllers/contributionsCreate.controller')
const ContributionSearchController = require('../controllers/contributionsSearch.controller')
const ContributionUpdateController = require('../controllers/contributionsUpdate.controller')
const ContributionDeleteByIdController = require('../controllers/contributionsDeleteById.controller')
router.get('/contribution/:id', ContributionByIdController)
router.post('/contribution', ContributionCreateController)
router.put('/contribution', ContributionUpdateController)
router.delete('/contribution/:id', ContributionDeleteByIdController)
router.post('/contribution/search', ContributionSearchController)



//todo apis
// api to get the projects in which user have contributed
// api to get the projects made by user only
// filters
	// sorting by date
	// type contribution
	// reward types
// loading comments of a project

	
module.exports = router