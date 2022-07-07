import React, {Component} from 'react';
import '../Card.css';

class Card extends Component {
    render() {
        return(
            <div className="col">
                <div className="card" style={{ width: '18rem', textAlign: "center", marginTop: "5%", boxShadow: "5px 5px 10px 0px #000000"}} >
                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary" style={{borderRadius: "0px"}}>Aggiungi al carrello<span className='badge badge-light'>x{this.props.card.quantità}</span></button>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} Roll</h5>
                        <p className="card-text">Euro {this.props.card.prezzo}</p>
                        {/* <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button> */}
                        {this.props.card.quantità > 0 && <button onClick={() => this.props.onDecrement(this.props.card)} className="btn btn-outline-danger" >Rimuovi</button>}
                        {this.props.card.showMessage && <p className="quantity-text">Impossibile togliere dal carrello</p>}
                    </div>
                </div>
            </div>
        );
    }
}


export default Card;