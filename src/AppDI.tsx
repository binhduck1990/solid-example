import React from 'react';

interface AppState {
    money: number
}

interface MoneyService {
    change(money: number): number
    changeBack(money: number): number
}

interface Props {
    changedMoneyService: MoneyService;
}

class AppDI extends React.Component<Props, AppState> {
    private library: MoneyService;

    constructor(props: Props) {
        super(props);
        this.state = {
            money: 0
        }
        this.library = this.props.changedMoneyService;
    }

    onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            money: parseInt(e.target.value)
        })
    }

    changeMoney = (): void => {
        this.setState({
            money: this.library.change(this.state.money)
        })
    }

    changeBackMoney = (): void => {
        this.setState({
            money: this.library.changeBack(this.state.money)
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

export default AppDI;
