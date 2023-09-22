    import express from "express";
    // import homeController from "../controllers/homeController";
    const homeController = require('../controllers/homeController');
    let router = express();

    let initWebRouter = (app) => {

        router.get("/about", homeController.getHomePage);
        return app.use("/", router);
    }

    module.exports = initWebRouter;