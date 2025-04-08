import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "react-bootstrap/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AddTaskSchema,
  IAddTaskProp,
} from "../../../../Schema/Task/AddTask.schema";
import TextInputControllers from "../../../../component/Controllers/TextInputControllers";
import addTaskApi from "../../../../ApiService/Task/AddTaskApi";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../../../Schema/Store/store.schema";
import { modalAction } from "../../../../store";

const AddTaskModal = ({ ...props }) => {
  const token = useSelector((store: IStore) => store.token);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IAddTaskProp>({
    resolver: zodResolver(AddTaskSchema),
  });

  const onSubmit: SubmitHandler<IAddTaskProp> = async (data) => {
    const request = await addTaskApi(data, token, dispatch);
    if (request.status == 200) {
      props.onHide();
      dispatch(
        modalAction.showModal({
          display: true,
          type: "success",
          title: "Task added sucessfully",
        })
      );
    } else
      setError("root", { message: "Error while adding task please try again" });
  };

  return (
    <Modal
      {...props}
      // @ts-ignore
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="  flex flex-col border border-slate-600 bg-dark p-3 rounded-2xl gap-4 px-5 pb-4">
        <div className="text-white font-bold text-center text-2xl">
          Add Task
        </div>
        <div>
          <TextInputControllers
            control={control}
            label="Name of Task"
            name="name"
            error={errors.name}
          />
          <TextInputControllers
            control={control}
            label="Description"
            name="description"
            error={errors.description}
          />
          <TextInputControllers
            control={control}
            label="Assigned"
            name="assigned"
            error={errors.assigned}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="w-full bg-gPrimary hover:bg-green-700 p-1 rounded-3xl text-sm sm:text-lg text-white font-semibold hover:shadow-md hover:shadow-white/50"
          >
            {isSubmitting ? "Adding Task" : "Add Task"}
          </button>

          <div className="text-red-400 text-base ml-2 text-center  h-4 mt-3">
            {errors.root?.message}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
