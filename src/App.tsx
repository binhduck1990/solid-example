import React from 'react';
import Dola from "./dola";

interface AppState {
  money: number
}

class App extends React.Component<{}, AppState> {
  constructor(props: never) {
    super(props);
    this.state = {
      money: 0
    }
  }

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      money: parseInt(e.target.value)
    })
  }

  changeMoney = (): void => {
    const changeMoney = new Dola()
    this.setState({
      money: changeMoney.change(this.state.money)
    })
  }

  changeBackMoney = (): void => {
    const changeMoney = new Dola()
    this.setState({
      money: changeMoney.changeBack(this.state.money)
    })
  }

  render() {
    return (
      <div style={{ display : "flex", flexDirection: "column", textAlign: "center", marginTop: "200px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label style={{ marginRight: "10px" }}>Quy doi tien te tu VND:</label>
          <input style={{ marginRight: "10px" }} type="number" id="money" onChange={this.onChangeInput}/>
          <input style={{ marginRight: "10px" }} type="button" value="DOLA" onClick={this.changeMoney}/>
          <input style={{ marginRight: "10px" }} type="button" value="VND" onClick={this.changeBackMoney}/>
        </div>
        <p>So tien sau khi quy doi la: <span>{this.state.money}</span></p>
      </div>
    )
  }
}

export default App;
