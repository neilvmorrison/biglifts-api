import { Context } from "koa";
import Router from "koa-router";
import workoutService from "./workout.service";

const router = new Router({ prefix: "/workout" });

router.post("/", async (ctx: Context) => {
  const { body } = ctx.request;
  if (body instanceof Array) {
    return (ctx.body = await workoutService.createManyWorkouts(body));
  }
  return (ctx.body = await workoutService.createWorkout(body));
});

router.get("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await workoutService.getWorkoutById(id);
});

export default router.routes();
