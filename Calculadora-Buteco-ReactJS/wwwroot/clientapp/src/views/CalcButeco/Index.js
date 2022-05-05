import React from 'react';
import ReactDOM from 'react-dom';

export default class Index
    extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            AccountValue: "",
            Tip: "",
            QuantityPerson: "",
            TipValue: "",
            TotalPay: "",
            TotalPayPerPerson: ""
        }

    }

    calculate = () => {
        let TipCalculation = (parseInt(this.state.Tip) * parseFloat(this.state.AccountValue)) / 100; //realiza o calculo da gorjeta
        let TotalPayCalculation = parseFloat(this.state.AccountValue) + TipCalculation; //soma o valor da conta + o valor da gorjeta
        let PayPerPersonCalculation = TotalPayCalculation / parseInt(this.state.QuantityPerson);

        this.setState({
            //TipValue: (this.state.Tip * this.state.AccountValue) / 100;
            TipValue: TipCalculation,
            TotalPay: TotalPayCalculation,
            TotalPayPerPerson: PayPerPersonCalculation
        });
    }

    clearFields = (i) => {
        this.setState({
            AccountValue: "",
            Tip: "",
            QuantityPerson: ""
        })
    }

    render = () => {
        let saida =
            <>
                <h2>Calculadora de Buteco</h2>
                <br />
                <p>Conta</p>
                <input type="text" value={this.state.AccountValue} onChange={(e) => this.setState({ AccountValue: e.target.value })}/>
                <br />
                <br />
                <p>Gorjeta</p>
                <input type="number" value={this.state.Tip} onChange={(e) => this.setState({ Tip: e.target.value })}/>
                <br />
                <br />
                <p>Quantidade de Pessoas</p>
                <input type="text" value={this.state.QuantityPerson} onChange={(e) => this.setState({ QuantityPerson: e.target.value })}/>
                <br />
                <br />
                <button type="button" onClick={() => this.calculate()}>Calcular</button>
                <button type="button" onClick={this.clearFields}>Zerar</button>      
                <hr />
                <br />
                <p> Gorjeta: {this.state.TipValue}</p>
                <p> Total a pagar: {this.state.TotalPay}</p>
                <p> Total a pagar por pessoa: {this.state.TotalPayPerPerson}</p>
            </>
        return saida;
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));