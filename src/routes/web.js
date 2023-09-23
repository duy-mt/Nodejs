    import express from "express";
    // import homeController from "../controllers/homeController";
    const homeController = require('../controllers/homeController');
    import userController from "../controllers/userController";
    // const userController = require('../controllers/userController');
    import CRUDController from '../controllers/CRUDController';

    let router = express();

    let initWebRouter = (app) => {

        router.get("/about", homeController.getHomePage);
        router.post('/api/login', userController.handleLogin);
        
        router.post('/test/create', CRUDController.CreateUserController);
        
        return app.use("/", router);

    }

    module.exports = initWebRouter;