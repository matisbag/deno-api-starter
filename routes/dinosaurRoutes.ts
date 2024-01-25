import { Router } from '@/deps.ts';
import {
  createDinosaur,
  deleteDinosaur,
  findDinosaur,
  getAllDinosaurs,
  updateDinosaur,
} from '@/controllers/dinosaurController.ts';

const router = new Router();

router
  .get('/', (ctx) => {
    ctx.response.body = 'Welcome to the Dinosaur API!';
  })
  .get('/dinosaurs', getAllDinosaurs)
  .get('/dinosaurs/:id', findDinosaur)
  .post('/dinosaurs', createDinosaur)
  .put('/dinosaurs/:id', updateDinosaur)
  .delete('/dinosaurs/:id', deleteDinosaur);

export default router;
