import React, {Component} from "react";

const users= [
  {
    name: 'Sarah',
    age: 20
  },
  {
    name: 'Alex',
    age: 21
  },
  {
    name: 'Leo',
    age: 22
  },
]

interface User {
  name: string;
  age: number;
}


interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined
}



class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };
  onClick = () => {
    const foundUser = this.props.users.find((user) =>{
      return user.name === this.state.name;
    });

    this.setState({user: foundUser})
  };

  render(){
    const {name, user } = this.state
    return (
      <div>
        User Search
        <input onChange={(e)=> this.setState({name: e.target.value})} value={name} />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    )
  }

}


export default UserSearchClass
