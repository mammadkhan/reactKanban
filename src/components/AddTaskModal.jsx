import {useState} from 'react'

import "../styles/AddTaskModal.css"

import {ReactComponent as Add} from '../assets/add.svg'
import {ReactComponent as Down} from '../assets/down.svg'
import {ReactComponent as Close} from '../assets/close.svg'
import { useSelector } from 'react-redux'

const AddTaskModal = () => {
    const board = useSelector((state)=>state.board)
    
    const [isOpen,setOpen] = useState(false)

    const [userInput, setUserInput] = useState({
        title:"",
        description:"",
        status:board.data[board.selected].columns[0].title
    })

    const handleDropDown = () => {
        setOpen(!isOpen)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const handleStatusChange = (title) => {
        setUserInput({...userInput,status:title});
        setOpen(false);
    }

  return (
    <div className='add_task_modal_container'>
        <form className='add_task_modal'>
            <h3 className='modal_title'>Add New Task</h3>
            <label htmlFor="title">Title
                <input id="title" className="modal_input" type="text" name="title" value={userInput.title} onChange={(e)=>setUserInput({...userInput,title:e.target.value})} maxLength={150} />
                {/* <span className="modal_warning">Required</span> */}
            </label>
            <label htmlFor="description">Description
                <textarea id="description" className="modal_input" type="text" name="description" value={userInput.description} onChange={e=>setUserInput({...userInput,description:e.target.value})} maxLength={300} />
            </label>
            <label htmlFor="subtasks">Subtasks
                <div className='subtasks_container'>
                    <input id="subtasks" className="modal_input" type="text" name="subtasks" />
                    <button type='button' className='delete_subtask'><Close /></button>
                    {/* <span className="modal_warning">Required</span>    */}
                </div>
            </label>
            <button type='button' className='add_new_subtask'><Add style={{width:"20px",height:"20px"}}/>Add New Subtask</button>
            <label  className='status_container' htmlFor="status_dropdown">Status
            <button type="button" id="status_dropdown" className='modal_input' onClick={handleDropDown}>{userInput.status}<Down style={{width:"20px",height:"20px"}}/></button>
            {isOpen && (
                <div className='status_dropdown_container'>
                    {
                        board.data[board.selected].columns.map((column)=>(
                            <button key={column.id} type="button" className='status_dropdown_container_button' onClick={handleDropDown}>{column.title}</button>
                            ))
                        }
                </div>
            )}
            </label>
            <button type='submit' className='create_task_button' onClick={(e)=>handleSubmit(e)}>Create Task</button>
        </form>
    </div>
  )
}

export default AddTaskModal