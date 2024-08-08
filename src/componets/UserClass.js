import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        email: "",
      },
    };
  }

  async componentDidMount() {
    console.log("ComponentDidMount");
    const data = await fetch("https://api.github.com/users/saivulavapati");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log("userInfo Updated---by setState");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render..");
    const { name, email } = this.state.userInfo;
    return (
      <div>
        <h1>User :- {name}</h1>
        <h2>Email:- {email}</h2>
      </div>
    );
  }
}

export default UserClass;
