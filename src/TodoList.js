import React from"react"
import ReactDom from "react-dom"
import TodoItems from "./TodoItems"


class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: []
        }
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value !==""){
            let newItem={
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState)=>{
                return{items: prevState.items.concat(newItem)};
            })
        }
        this._inputElement.value="";
        e.preventDefault();
    }
    deleteItem(key){
        let filtItems=this.state.items.filter(function(item){
            return(
                item.key !==key
            )
        })
        this.setState({
            items: filtItems
        })
    }
    render(){
        return(
                <div className="todolistmain">
                    <div className="todolistheader">
                        <form onSubmit={this.addItem}>
                            <input ref={(a) => this._inputElement = a}
                            placeholder="enter task"></input>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <TodoItems entries={this.state.items}
                                delete={this.deleteItem}/>
                </div>
            );
    }
}
export default TodoList;