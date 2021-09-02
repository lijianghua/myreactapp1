import React from "react";

class UserTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                {this.props.users.length > 0 ?
                    this.props.users.map(
                    user=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button
                                    className="button muted-button"
                                    onClick={()=>{this.props.editRow(user)}}
                                >
                                    Edit
                                </button>
                                <button
                                    className="button muted-button"
                                    onClick={()=>{this.props.deleteUser(user.id)}}
                                >
                                    Delete
                                </button>
                            </td>

                        </tr>
                    )
                    )
                    :
                    (
                        <tr>
                            <td colSpan={3}>No Users</td>
                        </tr>
                    )
                }
                </tbody>

            </table>
        )
    }
}
export default UserTable;