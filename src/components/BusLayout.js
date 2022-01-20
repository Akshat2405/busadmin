import React,{useState} from 'react'
import  db from '../firebase-config';

function BusLayout(props) {
    let data;
    const ref=db.ref(`${props.id}/BUSES/${props.number}`);
    ref.on('value',(snapshot)=>{
        data=snapshot.val();
    })
    const[value,setValue]=useState(0);
    const [arr,setArr]=useState({
        S1:data['SEATS']['S1'],
        S2:data['SEATS']['S2'],
        S3:data['SEATS']['S3'],
        S4:data['SEATS']['S4'],
        S5:data['SEATS']['S5'],
        S6:data['SEATS']['S6'],
        S7:data['SEATS']['S7'],
        S8:data['SEATS']['S8'],
        S9:data['SEATS']['S9'],
        S10:data['SEATS']['S10'],
        S11:data['SEATS']['S11'],
        S12:data['SEATS']['S12'],
        S13:data['SEATS']['S13'],
        S14:data['SEATS']['S14'],
        S15:data['SEATS']['S15'],
        S16:data['SEATS']['S16'],
        S17:data['SEATS']['S17'],
        S18:data['SEATS']['S18'],
    })
    let name;
    const handleSeat=(e)=>{
        name=e.target.id;
        if(arr[name]==='TRUE'){
            return;
        }
        if(arr[name]==='EMPTY'){
            setArr({...arr,[name]:'FALSE'});
            setValue(value+15);
        }
        else{
            setArr({...arr,[name]:'EMPTY'});
            setValue(value-15);
        }
    }
    const submitSeat=()=>{
        for(let i in arr){
            if(arr[i]==='FALSE'){
                let ref=db.ref(`${props.id}/BUSES/${props.number}/SEATS`);
                ref.update({[i]:'TRUE'});
                ref=db.ref(`${props.id}/BUSES/${props.number}/OWNERS`);
                ref.update({[i]:'BY ADMIN'});
            }
        }
    }
    const custid='#cus'+props.number;
    const cus='cus'+props.number;
    const custQR='#QR'+props.number;
    const cuQR='QR'+props.number;
    return (
        <>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target={custid}>
        SEAT STATUS
        </button>
        <div class="modal fade" id={cus}  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticLabel">Bus Layout</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="container">
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S1=='EMPTY')?'white':(arr.S1==='TRUE')?'#6fa379':'#157347','disabled':(arr.S1==='TRUE')?'true':'false'}} id='S1' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S2=='EMPTY')?'white':(arr.S2==='TRUE')?'#6fa379':'#157347','disabled':(arr.S2==='TRUE')?'true':'false'}} id='S2' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S3==='EMPTY')?'white':(arr.S3==='TRUE')?'#6fa379':'#157347','disabled':(arr.S3==='TRUE')?'true':'false'}} id='S3' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S4==='EMPTY')?'white':(arr.S4==='TRUE')?'#6fa379':'#157347','disabled':(arr.S4==='TRUE')?'true':'false'}} id='S4' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S5==='EMPTY')?'white':(arr.S5==='TRUE')?'#6fa379':'#157347','disabled':(arr.S5==='TRUE')?'true':'false'}} id='S5' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S6==='EMPTY')?'white':(arr.S6==='TRUE')?'#6fa379':'#157347','disabled':(arr.S6==='TRUE')?'true':'false'}} id='S6' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S7==='EMPTY')?'white':(arr.S7==='TRUE')?'#6fa379':'#157347','disabled':(arr.S7==='TRUE')?'true':'false'}} id='S7' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S8==='EMPTY')?'white':(arr.S8==='TRUE')?'#6fa379':'#157347','disabled':(arr.S8==='TRUE')?'true':'false'}} id='S8' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S9=='EMPTY')?'white':(arr.S9=='TRUE')?'#6fa379':'#157347','disabled':(arr.S9=='TRUE')?'true':'false'}} id='S9' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S10=='EMPTY')?'white':(arr.S10=='TRUE')?'#6fa379':'#157347','disabled':(arr.S10=='TRUE')?'true':'false'}} id='S10' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S11=='EMPTY')?'white':(arr.S11=='TRUE')?'#6fa379':'#157347','disabled':(arr.S11=='TRUE')?'true':'false'}} id='S11' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S12=='EMPTY')?'white':(arr.S12=='TRUE')?'#6fa379':'#157347','disabled':(arr.S12=='TRUE')?'true':'false'}} id='S12' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S13==='EMPTY')?'white':(arr.S13==='TRUE')?'#6fa379':'#157347','disabled':(arr.S13==='TRUE')?'true':'false'}} id='S13' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S14==='EMPTY')?'white':(arr.S14==='TRUE')?'#6fa379':'#157347','disabled':(arr.S14==='TRUE')?'true':'false'}} id='S14' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S15==='EMPTY')?'white':(arr.S15==='TRUE')?'#6fa379':'#157347','disabled':(arr.S15==='TRUE')?'true':'false'}} id='S15' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S16==='EMPTY')?'white':(arr.S16==='TRUE')?'#6fa379':'#157347','disabled':(arr.S16==='TRUE')?'true':'false'}} id='S16' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div  class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S17==='EMPTY')?'white':(arr.S17==='TRUE')?'#6fa379':'#157347','disabled':(arr.S17==='TRUE')?'true':'false'}} id='S17' onClick={handleSeat}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':(arr.S18==='EMPTY')?'white':(arr.S18==='TRUE')?'#6fa379':'#157347','disabled':(arr.S18==='TRUE')?'true':'false'}} id='S18' onClick={handleSeat}></div>
                </div>
                <div class="col-4" style={{'display':'inline'}}>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}}></div>
                <div class="btn btn-outline-dark" style={{'width':'45%','height':'50px','margin':'2px','backgroundColor':'yellow','disabled':'true'}} ></div>
                </div>
            </div>
            
            
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success"  data-bs-dismiss="modal" onClick={submitSeat}>Apply</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default BusLayout
