
const crudRoutes = (router, controller, preOperations=[], postOperations=[]) => {
  router.get('/', ...preOperations, controller.index, ...postOperations);
  router.post('/', ...preOperations, controller.store, ...postOperations);
  router.get('/:id', ...preOperations, controller.show, ...postOperations);
  router.put('/:id', ...preOperations, controller.update, ...postOperations);
  router.delete('/:id', ...preOperations, controller.delete, ...postOperations);

  return router;
}

module.exports = crudRoutes;
