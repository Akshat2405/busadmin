import React, { useState} from 'react';
import  db from '../firebase-config';
import Addbus from './Addbus';
import BusLayout from './BusLayout';
import Mapfile from './Mapfile';
import Mymap from './Mymap';
function Home() {
    const ref=db.ref('/');
    let data;
    ref.on('value',(sanpshot)=>{
        data=sanpshot.val();
    });
    const showdata=()=>{
        if(data!==undefined){
            let str=[];
            for(let key in data){
                let arr=[];
                let last;
                for(let key2 in data[key]['STATION']){
                    last=data[key]['STATION'][key2];
                }
                for(let key2 in data[key]['BUSES']){
                    arr.push(
                        <div class="card" style={{'width':'18rem','margin':'10px'}}>
                        <div class="card-body">
                                <h5 class="card-title"> Bus Number : {key2}</h5>
                                <p class="card-text">Start Station:{data[key]['STATION']['1']}</p>
                                <p class="card-text">Last Station:{last}</p>
                                {data[key]['BUSES'][key2]['LOCATION']!==undefined?<Mapfile  id={key} number={key2} lat={data[key]['BUSES'][key2]['LOCATION']['latitude']}  lng={data[key]['BUSES'][key2]['LOCATION']['longitude']}/>:''}
                                <BusLayout id={key} number={key2}/>
                        </div>
                        </div>
                    );
                }
                // console.log(arr);
                str.push(
                    <div class="alert alert-success row mt-5" role="alert">
                        <h1><span class="badge bg-success">{key}</span></h1>
                        <div className="row">
                            {arr}
                        </div>
                    </div>
                )
            }
            // console.log(data);
            // for(let key in data){
            //     for(let key2 in data[key]['BUSES']){
            //         for(let i=19;i<=36;i++){
            //             data[key]['BUSES'][key2]['SEATS'][`S${i}`]='EMPTY';
            //             data[key]['BUSES'][key2]['OWNERS'][`S${i}`]='NONE';
            //         }
            //     }
            // }
            // ref.set(data);
            return str;
        }
    }
  return <>
            <div className="container-fluid mt-0">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" style={{'color':'green'}} id="top_navbar" to="/">Admin</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link"  to="/home" style={{'color':'green'}} activeStyle={{fontWeight: "bold"}} >Home</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                <Addbus/>
                                </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        {showdata()}
                    </div>
                </div>
                
            </div>
        </>;
}

export default Home;
