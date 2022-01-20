import React, { useState,useEffect } from 'react';
import Mymap from './Mymap';
import  db from '../firebase-config';

function Mapfile(props) {
    const custid='#id'+props.number;
    const cus='id'+props.number;
  return <>
  <button type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target={custid}>
        LIVE LOCATION
        </button>
        <div class="modal fade" id={cus}  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticLabel">Map</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <Mymap  lng={props.lng} lat={props.lat}/>
            </div>
            </div>
        </div>
        </div>
  </>;
}

export default Mapfile;
