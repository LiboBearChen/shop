import React from 'react'

function UploadProductPage(){

    const [state, setstate] = useState(initialState)
    const onTitleChange=(event)=>{

    }

    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <h2>Upload Travel Product</h2>
            </div>
            <form onSubmit>
                <br/>
                <br/>
                <label>Title</label>
                <input onChange={onTitleChange} value/>
                <br/>
                <br/>
                <label>Description</label>
                <textarea onChange value/>
                <br/>
                <br/>
                <label>Price($)</label>
                <textarea onChange value type="number"/>
                <select>
                    <option key value>

                    </option>
                </select>
                <br/>
                <br/>
                <button onClick>Submit</button>
            </form>
        </div>
    )
}

export default UploadProductPage