import React from "react";

class AddUserForm extends React.Component{
    constructor(props) {
        super(props);
        this.initialState = {
            name:"",
            username:"",
        };
        this.state = this.initialState;

        this.handleChanged = this.handleChanged.bind(this);
    }

    handleChanged(event){
        const {name,value} =event.target
        this.setState(
            {
                [name]:value,
            }
        )

    }
    render() {
        return (
            <form onSubmit={(event)=>{
                event.preventDefault();
                if (!this.state.name || !this.state.username) return;
                this.props.addUser(this.state);
                this.setState(this.initialState);

            }}>
                <label>Name</label>
                <input type="text" name="name" value= {this.state.name} onChange={this.handleChanged}/>
                <label>UserName</label>
                <input type="text" name="username" value={this.state.username}  onChange={this.handleChanged}/>
                <button>Add new user</button>
            </form>
        );
    }
}

export default  AddUserForm;