import React, {Component} from "react";
import FlipMove from "react-flip-move"
import './index.css';
class TodoItems extends Component{
    constructor(props){
        super(props);
        this.createTasks=this.createTasks.bind(this);
    }
    createTasks(item){
        return <li onClick={() =>this.delete(item.key)}
                key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }
    render(){
        let todoEntries = this.props.entries;
        let listItems =todoEntries.map(this.createTasks);

        return(
            <FlipMove duration={650} easing="ease-out">
            <ul className="theList">
                {listItems}
            </ul>
            </FlipMove>
        )
    }
}
export default TodoItems;