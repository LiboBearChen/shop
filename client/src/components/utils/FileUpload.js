import React from 'react'
import Dropzone from 'react-dropzone'
import {Icon} from 'antd'
import { response } from 'express';

function FileUpload() {

    const onDrop=(files)=>{
        let formData=new FormData();
        const config={
            header:{'content-type':'multipart/form-data'}
        }
        formData.append("file", files[0])

        //save images into the Node Server
        Axios.post('/api/product/uploadImage', formData, config)
        .then(response=>{
            if(response.data.success){

            }else{
                alert('Failed to save the Image in Server')
            }
        })

        
    }

    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Dropzone onDrop={onDrop} multiple maxSize>
                {({getRootProps, getInputProps})=>(
                    <div style={{width:'300px', height:'240px', border:'1px solid lightgray', display:'flex', alignItems:'center', justifyContent:'center'}}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()}/>
                        <Icon type="plus" style={{fontSize:'3rem'}}/>
                    </div>
                )}
            </Dropzone>
        </div>
    )
}

export default FileUpload
