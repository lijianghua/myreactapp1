import React from "react";

class EditUserForm extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        console.log('constructor --- 2 ');
        this.state = this.props.currentUser;
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
                this.setState({
                    name:"",
                    username:"",
                });

            }}>
                <label>Name</label>
                <input type="text" name="name" value= {this.state.name} onChange={this.handleChanged}/>
                <label>UserName</label>
                <input type="text" name="username" value={this.state.username}  onChange={this.handleChanged}/>
                <button>Update user</button>
                <button
                    className="button muted-button"
                    onClick={()=>{
                        this.props.setEditing(false);
                    }
                    }
                >
                    Cancel
                </button>
            </form>
        );
    }
}

export default  EditUserForm;