import React from "react";
import UserTable from "./UserTable"
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            usersData:[
                {
                    id:1,
                    name:'Tania',
                    username: 'floppydiskette',
                },
                {
                    id:2,
                    name:'Craig',
                    username: 'siliconeidolon',
                },
                {
                    id:3,
                    name:'Ben',
                    username: 'benisphere',
                },
            ],
            editing:false,
            currentUser:{
                id:null,
                name:"",
                username:"",
            },
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.setEditing = this.setEditing.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.editRow = this.editRow.bind(this);

    }
    setCurrentUser(user){
        this.setState({
                currentUser: {
                    id:user.id,
                    name:user.name,
                    username:user.username,
                },
        });
    }
    setEditing(v) {
        this.setState({
            editing:v,
        });
    }

    editRow(user) {
        this.setEditing(true);
        this.setCurrentUser({ id: user.id, name: user.name, username: user.username });
    }
    updateUser(){

    }

    deleteUser(id) {
        this.setState(prevState=>{
            return {
                usersData: prevState.usersData.filter(user=>user.id!==id),
            }
        });
    }
    addUser(user){
        this.setState(prevState=>{
            user.id = prevState.usersData.length + 1;
            return {
                usersData:[...prevState.usersData,user],
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h1>CRUD App with Hooks</h1>
                <div className="flex-row">
                    <div className="flex-large">
                        {
                            this.state.editing ?
                                (
                                    <div>
                                        <h2>Edit User </h2>
                                        <EditUserForm
                                        setEditing={this.setEditing}
                                        currentUser={this.state.currentUser}
                                        updateUser={this.updateUser}
                                        />
                                    </div>)
                                :
                                (
                                    <div>
                                        <h2>Add user</h2>
                                        <AddUserForm addUser={this.addUser}/>
                                    </div>
                                )
                        }

                    </div>
                    <div className="flex-large">
                        <h2>View users</h2>
                        <UserTable users={this.state.usersData} editRow={this.editRow} deleteUser={this.deleteUser} />
                    </div>
                </div>
            </div>
        )

    }
}

export default App;