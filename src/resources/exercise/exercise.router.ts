import { MajorGroup } from "../exercise/exercise.entity";
import { Context } from "koa";
import Router from "koa-router";
import exerciseService from "../exercise/exercise.service";

const router = new Router({ prefix: "/exercise" });

router.get("/", async (ctx: Context) => {
  const { major_group } = ctx.query;
  if (major_group) {
    return (ctx.body = await exerciseService.getExercisesByMajorGroup(
      major_group as MajorGroup
    ));
  }
  ctx.body = await exerciseService.getAllExercises();
});

router.get("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await exerciseService.getExerciseById(id);
});

router.post("/", async (ctx: Context) => {
  const { body } = ctx.request;
  ctx.body = await exerciseService.createExercise(body);
});

export default router.routes();
