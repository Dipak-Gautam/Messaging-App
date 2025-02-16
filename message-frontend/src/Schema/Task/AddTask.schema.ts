import { z } from "zod";

export const AddTaskSchema = z.object({
  name: z.string().min(2, "Name must be minimum 2 character long"),
  description: z.string().optional(),
  //   status: z.enum([
  //     "Not-Started",
  //     "In-Progress",
  //     "Partially-Completed",
  //     "Completed",
  //     "Stopped",
  //   ]),
  assigned: z.string().min(2, "Please provide valid name"),
});

export type IAddTaskProp = z.infer<typeof AddTaskSchema>;
