const router = new Router();

router.onBeforeChange = (path, stack, data, navigation) => {
    navigation.revealAnimation = Router.LEFT_TO_RIGHT;

    return;

}