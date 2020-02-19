import { Router } from 'express';
import * as controller from '../controllers/controller';
import * as cors from 'cors';

const router = Router();

router.options('*', cors());
//router.use('/', cors())

router.get('/viewAnexos', controller.getViewAnexos);
router.get('/viewAutor', controller.getViewAutor);
router.get('/viewDepartamento', controller.getViewDepartamentoo);
router.get('/viewEnviados', controller.getViewEnviados);
router.get('/viewFinalizados', controller.getViewFinalizados);
router.get('/viewIncidente', controller.getViewIncidente);
router.get('/viewNaoFinalizados', controller.getViewNaoFinalizados);
router.get('/viewNaoLidos', controller.getViewNaoLidos);
router.get('/viewPrioridade', controller.getViewPrioridade);
router.get('/viewRecebidos', controller.getViewRecebidos);


export default router;