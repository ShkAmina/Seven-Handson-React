import React from 'react'
import { useContext } from 'react'
import { useDispatch } from 'react-redux';
// import ContextData from './ContextData'
import { useNavigate, useNavigationType } from 'react-router-dom';
import {addData} from "./slice"


const Addnew = () => {
    // const DataContext = useContext(ContextData)
    const dispatch = useDispatch();
    const nav = useNavigate();
    const newObj = {
        name: "",
        age: "",
        course: "",
        batch: ""
    }

    const handlechange = (e) => {
        newObj[e.target.name] = e.target.value;
    }

    const HandleSubmit = () => {
        dispatch(addData(newObj))
        nav(-1);
    }
    const HandleCancel=()=>{
        nav (-1)
    }

    return (
        <>

            <div className='center'>
                <div className='main'>
                    <label> Name:  <input name="name" onChange={handlechange} placeholder='Entre your name'></input>
                    </label>
                    <label> Age: <input name="age" onChange={handlechange} placeholder='Entre your age'  ></input>
                    </label>
                </div>

                <div className='main'>
                    <label>Course:  <input name="course" onChange={handlechange} placeholder='Entre your course' ></input>
                    </label>
                    <label>Batch:   <input name="batch" onChange={handlechange} placeholder='Entre your batch'></input>

                    </label>
                </div>
            </div>
            <div className='update'>
                <button onClick={HandleSubmit}>Submit</button>
                <button onClick={HandleCancel}>Cancel</button>
            </div>


        </>
    )
}

export default Addnew;