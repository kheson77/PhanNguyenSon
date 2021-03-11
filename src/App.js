import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {
          name: "Captain Thang",
          age: 25,
          position: "PG",
        },
        {
          name: "Phan Nguyen Son",
          age: 22,
          position: "Center",
        },
        {
          name: "Dai Ta Duong Tuan",
          age: 27,
          position: "PF",
        },
      ],
      title: "CRUD with ReactJs",
      act: 0,
      index: '',
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  add = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let position = this.refs.position.value;

    
    
    if(this.state.act === 0){
      let data = { name, age, position };
      datas.push(data);
    } else{
      let index = this.state.index;
      datas[index].name = name;
      datas[index].age = age;
      datas[index].position = position;
    }
    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.form.reset();
    this.refs.name.focus();
  };

  edit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.age.value = data.age;
    this.refs.position.value = data.position;

    this.setState({
      act: 1,
      index: i
    })
    // this.refs.form.reset();
    this.refs.name.focus();
  }

  remove = (i) =>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    })
    this.refs.form.reset();
    this.refs.name.focus();
  }


  render() {
    var textBtn;
    textBtn = this.state.act == 1 ? "Editttttttttttt" : "Add a person";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.title}</p>
          <div class="body">
            <form class="form" ref="form">
              <input type="text" ref="name" placeholder="Name" />
              <input type="text" ref="age" placeholder="Age" />
              <input type="text" ref="position" placeholder="Position" />
            </form>
            <button class="add" onClick={(e) => this.add(e)}>{textBtn}</button>
            <table>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {this.state.datas.map((data, item) => (
                <tr>
                  <td key={item}>
                    {data.name}
                  </td>
                  <td key={item}>
                    {data.age.toString()}
                  </td>
                  <td key={item}>
                    {data.position}
                  </td>
                  <td><button key={item} onClick={() => this.edit(item)}>Edit</button></td>
                  <td><button key={item} onClick={() =>this.remove(item)}>Delete</button></td>
                </tr>
              ))}
            </table>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
