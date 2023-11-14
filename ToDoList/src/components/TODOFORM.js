import React, {useState, useEffect, useRef} from 'react';

function TODOFORM(props) {
    const [input, setInput]=useState(propos.edit ? props.edit.value : '');
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    function handleChange (e) {
        setInput(e.target.value);
    };
    
    function handleSubmit (e) {
        e.prevenDefault();

        props.onSubmit({
            id.: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='TODOFORM'>
            {propos.edit ? (
                <>
                <input
                    placeholder='Update your item'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                    />
                <button onClick={handleSubmit} className='todo-button edit'>
                    Update
                </button>
                </>
            ) : (
            <>
            <input
                type='text'
                placeholder='what to do?'
                value={input}
                name='text'
                className='TODOINPUT'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='TODOBUTTON'>
            Add TODO
            </button>
            </>
            )}
        </form>
    );
)
export default TODOFORM
