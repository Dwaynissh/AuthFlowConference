import { Router } from "express";
import {
  createAdmin,
  createClient,
  createLogistics,
  createVendor,
  getAll,
  getAllDealer,
  logOut,
  resetPassWord,
  signinAll,
  verifyAll,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-client").post(createClient);
router.route("/create-Admin").post( createAdmin);
router.route("/create-dispatcher").post(createLogistics);
router.route("/create-vendor").post(createVendor);
router.route("/sign-in").post(signinAll);
router.route("/get-All").get( getAll);
router.route("/get-Alls").get( getAllDealer);
router.route("/verify").patch(verifyAll);
router.route("/logOut").get(logOut);
router.route("/reset-password").patch(resetPassWord);
router
  .route("/change-password/userID")
  .patch( resetPassWord);

export default router;
