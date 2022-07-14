import Router from "koa-router";
import exerciseRouter from "../resources/exercise/exercise.router";
import programRouter from "../resources/program/program.router";
import setsRouter from "../resources/set/sets.router";
import testRoutes from "../resources/test/test.router";
import userRoutes from "../resources/user/user.routes";
import workoutRoutes from "../resources/workout/workout.router";
import authRoutes from "../resources/auth/auth.router";

const router = new Router();

router.use(
  testRoutes,
  authRoutes,
  userRoutes,
  exerciseRouter,
  programRouter,
  setsRouter,
  workoutRoutes
);

export default router.routes();
