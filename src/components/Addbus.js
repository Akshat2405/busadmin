import React, { useState} from 'react';
import  db from '../firebase-config';
function Addbus() {
    const [busName,setbusName]=useState('');
    const [busNumber,setbusNumber]=useState('');
    const submitForm=(e)=>{
        e.preventDefault();
        const obj={
            SEATS:{
                S1:'EMPTY',
                S2:'EMPTY',
                S3:'EMPTY',
                S4:'EMPTY',
                S5:'EMPTY',
                S6:'EMPTY',
                S7:'EMPTY',
                S8:'EMPTY',
                S9:'EMPTY',
                S10:'EMPTY',
                S11:'EMPTY',
                S12:'EMPTY',
                S13:'EMPTY',
                S14:'EMPTY',
                S15:'EMPTY',
                S16:'EMPTY',
                S17:'EMPTY',
                S18:'EMPTY',
            },
            OWNERS:{
                S1:'NONE',
                S2:'NONE',
                S3:'NONE',
                S4:'NONE',
                S5:'NONE',
                S6:'NONE',
                S7:'NONE',
                S8:'NONE',
                S9:'NONE',
                S10:'NONE',
                S11:'NONE',
                S12:'NONE',
                S13:'NONE',
                S14:'NONE',
                S15:'NONE',
                S16:'NONE',
                S17:'NONE',
                S18:'NONE',
            }               
        }
        const myref=db.ref(`${busName}/BUSES`);
        myref.update({[busNumber]:obj});
        setbusName('');
        setbusNumber('');
    }
  return <>
        <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Add bus
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add Bus</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="dropdown mt-3">
            <form className="container">
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="busName" name="busName" value={busName}  placeholder="busName"  onChange={(e)=>{setbusName(e.target.value)}}/>
                <label htmlFor="floatingInput">Bus Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="_manufacturingYear" name="busNumber" value={busNumber}  onChange={(e)=>{setbusNumber(e.target.value)}} placeholder="busNumber" />
                <label htmlFor="floatingInput">Bus Number</label>
            </div>
            <button type="submit" className="btn btn-success" disabled={busName==='' || busNumber===''}  onClick={submitForm}>Add</button>
           </form> 
            </div>
        </div>
        </div>
  </>;
}

export default Addbus;
