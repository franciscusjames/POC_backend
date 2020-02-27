import { Router } from 'express';
import * as controller from '../controllers/controller';
import * as cors from 'cors';

const router = Router();

router.options('*', cors());
router.use('/', cors())

router.get('/emailsFiltrados', controller.getEmailsFiltrados);
router.get('/emailsFinalizados', controller.getEmailsFinalizados);
router.get('/emailsNaoFinalizados', controller.getEmailsNaoFinalizados);
router.post('/historicoEmail', controller.postHistoricoEmail);
router.get('/emailsNaoLidos1dia', controller.getEmailsNaoLidos1dia);
router.get('/emailsNaoLidos2dias', controller.getEmailsNaoLidos2dias);
router.get('/emailsNaoLidos3dias', controller.getEmailsNaoLidos3dias);
router.get('/emailsNaoLidos5dias', controller.getEmailsNaoLidos5dias);
router.get('/emailsNaoLidos7dias', controller.getEmailsNaoLidos7dias);
router.get('/emailsNaoLidos15dias', controller.getEmailsNaoLidos15dias);
router.put('/finalizarEmail', controller.putFinalizarEmail);

export default router;