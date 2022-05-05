import React from 'react';
import ReactDOM from 'react-dom';


export default class Index
    extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            item: "",
            itens: [],
            indexEdicao: -1
        }

    }

    adicionar = () => {

        let itensAux = this.state.itens;

        if (this.state.indexEdicao == -1)
            itensAux.push(this.state.item);
        else {
            itensAux[this.state.indexEdicao] = this.state.item;
        }


        this.setState({
            indexEdicao: -1,
            item: "",
            itens: itensAux
        });
    }

    zerar = (i) => {

    }

    render = () => {


        /*let linhas = [];
        this.state.itens.forEach(i => {
            linhas.push(<tr><td>{i}</td></tr>);
        });*/


        let saida =
            <>
                <input type="text"
                    value={this.state.item}
                    onChange={(e) => this.setState({ item: e.target.value })}
                />
                <button type="button"
                    onClick={this.adicionar}>+</button>
                <br />
                <br />
                <br />
                <table>
                    {this.state.itens.map(i => {
                        return (
                            <tr>
                                <td>{i}</td>
                                <td>
                                        <button type="button"
                                        onClick={() => this.excluir(i)}>X</button>
                                </td>
                                <td>
                                    <button type="button"
                                        onClick={() => this.editar(i)}>E</button>
                                </td>
                            </tr>)
                    })}
                </table>
            </>
       
        return saida;
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));