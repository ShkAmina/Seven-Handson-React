import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from './slice';

const Edit = () => {

    const dispatch = useDispatch();
   
    const Life = useSelector((state) => state.dataKey);


    const nav = useNavigate();
    const loc = useLocation().state.data

    const currData = {
        name: Life[loc].name,
        age: Life[loc].age,
        course: Life[loc].course,
        batch: Life[loc].batch,
    }

    const handlechange = (e) => {
        currData[e.target.name] = e.target.value;
    }

    const HandleSubmit = () => {
        dispatch( editData({currData,loc}));
        nav(-1);
    }
    return (
        <>

            <div className='center'>
                <div className='main'>
                <label> Name:  <input name="name" onChange={handlechange} placeholder={Life[loc].name}></input>
                </label>
                <label> Age: <input name="age" onChange={handlechange} placeholder={Life[loc].age} ></input>
                </label>
                </div>

                <div className='main'>
                <label>Course:  <input name="course" onChange={handlechange} placeholder={Life[loc].course}></input>
                </label>
                <label>Batch:   <input name="batch" onChange={handlechange} placeholder={Life[loc].batch}></input>

                </label>
                </div>
            </div>
            <div className='update'>
            <button onClick={HandleSubmit}>Update</button>
            </div>
        </>
    )
}

export default Edit