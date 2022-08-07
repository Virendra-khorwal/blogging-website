
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditDoc = () => {

    const [docDesc, setDocDesc] = useState('')
    const title = 'Untitled'

    const onChange = (docDesc) => {
        setDocDesc(docDesc)
    }

    return (
      <div>
        <div>
            <input value={title} ></input>
        </div>
        <div>
          <ReactQuill theme="snow" value={docDesc} onChange={onChange} />
        </div>
      </div>
    );
}

export default EditDoc