import React, { useState } from 'react';



function FormAddtodo(props) {
    const [text, setText] = useState('');

     let formHandler = e => {
      e.preventDefault();
      props.add(text);
      setText('');

    }
    let inputHandler = e => setText(e.target.value);





    return (
        <div className="form-inline">
            <form className="form-group" onSubmit={formHandler}>
                <input type="text" className="form-control mx-sm-3" onChange={inputHandler} placeholder="i want to do ..." value={text} />
                <button type="submit" className="btn btn-primary">add</button>
            </form>
        </div>
    )

}


export default (FormAddtodo);