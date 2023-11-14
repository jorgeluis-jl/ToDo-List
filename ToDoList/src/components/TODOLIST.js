import React, {useEffect, useState} from "react";
import TODOFORM from './TODOFORM';
import TODO from "./TODO";

// get the local items

function getlocal(){
    let item=localStorage.getItem('setTodos');
    if(item)
    return JSON.parse(localStorage.getItem('setTodos'));
else
return [];
}

function TODOLIST(){
    const [todos, setTodos=todo_input=>{

        //This is the case when user just gives unnecessary spaces
        if(!todo_input.text || /^\s*$/.test(todo_input.text)){
            return;
        }
        const newTodos=[todo_input, ...todos];
        setTodos(newTodos);
        //it'll print the inputs in console along with it's id
        //console.log(todo_input, ...todos);
    };

// updating the list of todos

const updateTODO=(todoID,newValue)=>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }
    setTodos(prev => prev.map(item => (item.id === todoID? newValue : item)));
};

//Delete an Item from todo list

const removeTODO=id=>{
    const removedArray=[...todos].filter(todo_input=>todo_input.id!==id);
    setTodos(removedArray);
};

// set the items in the local list

useEffect(()=>{
    localStorage.setItem('setTodos',JSON.stringify(todos));
    }, [todos]);

// button functionality
var element = document.getElementById("button1");
element.onclick = function() {
    return setTodos([]);
}

return(
    <>
        <div>
            <h1>
                Write down your plans below
            </h1>
            <TODO
                todos={todos}
                completeTODO={completeTODO}
                removeTODO={removeTODO}
                updateTODO={updateTODO}
            />
        </div>
    </>
);
}
export default TODOLIST

