import { useSelector } from "react-redux";

import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import DeleteModal from "./DeleteModal";
import CreateBoardModal from "./CreateBoardModal";

const Modals = () => {
  const ui = useSelector((state) => state.ui);

  return (
    <>
      {ui.addNewTaskModal && <AddTaskModal />}
      {ui.taskModal && <TaskModal />}
      {ui.editTaskModal && <AddTaskModal />}
      {ui.deleteTaskModal && <DeleteModal />}
      {ui.addNewBoardModal && <CreateBoardModal />}
      {ui.editBoardModal && <CreateBoardModal />}
      {ui.deleteBoardModal && <DeleteModal />}
    </>
  );
};

export default Modals;
