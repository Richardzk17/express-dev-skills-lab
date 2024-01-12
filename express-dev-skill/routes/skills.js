import { Router } from 'express'
// import the Todo data
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:skillId', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:skillId', skillsCtrl.delete)
export { router }
