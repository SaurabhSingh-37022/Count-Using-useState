
import './Count.css'
import React, {useState} from 'react'



function Count(){
    // let add = 1;
    // const state = useState();
    // console.log(state); 

    const [add,setAdd] = useState(0);
        // add = current getValue
        // setAdd = updated value



    function IncNum(){
        setAdd(add+1);
        // console.log("clicked me"+ add++)
        

    }
    return(
        <div>
            <div className="count">
                <h1>{add}</h1>
                <button onClick={IncNum}>Click Me</button>
            </div>

        </div>
    )
}
export default Count;