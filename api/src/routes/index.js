const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {vgRouter} = require('./vgRouter')
const {genderRouter} = require('./genderRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', vgRouter)
router.use('/genres', genderRouter)

module.exports = router;
