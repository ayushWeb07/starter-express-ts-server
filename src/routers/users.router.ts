import { Router } from "express"
import * as users from "../controllers/users.controller.ts"

const router= Router()

router.get('/', users.getMany)
router.get('/:id', users.getOne)
router.post('/', users.create)
router.put('/:id', users.update)
router.delete('/:id', users.remove)

export default router