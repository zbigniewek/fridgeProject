import React, {Component} from "react";
import "./openFridge.scss"
import {NavLink} from "react-router-dom";



class Open extends Component{
    state= {
        products: [],
        ref: ""
    }

    componentDidMount() {

        fetch('http://localhost:4000/products')
            .then((response) => {
                return response.json();
            })
            .then((data)=>{
                this.setState({
                    products: data
                })

            })

    }

    render() {
        const{products} =this.state;


    return (
        <div className={"fridgeContainer"}>
        <ul className={"openFridge"}>
            {products.map(props =>
                <li {...props} key={props.id} >
                    {props.name}{"   "}{props.quantity}
                    <div className={"buttons"}>
                    <button onClick={()=>{
                        fetch('http://localhost:4000/products/'+props.id)
                            .then((response) => {
                                return response.json();
                            })
                            .then((data)=>{

                                    data.quantity++;
                                    console.log(data);
                                    fetch('http://localhost:4000/products/' + data.id, {
                                        method: 'PUT',
                                        headers: {
                                            "Content-type": "application/json"
                                        },
                                        body: JSON.stringify(
                                            data
                                        )

                                    })
                                        .then((response) => {
                                            this.componentDidMount()
                                            return response.json();
                                        })

                            })
                    }}>Dodaj</button>
                    <button onClick={()=>{
                        fetch('http://localhost:4000/products/'+props.id)
                            .then((response) => {
                                return response.json();
                            })
                            .then((data)=>{

                                if(data.quantity>0) {
                                    data.quantity--;
                                    console.log(data);
                                    fetch('http://localhost:4000/products/' + data.id, {
                                        method: 'PUT',
                                        headers: {
                                            "Content-type": "application/json"
                                        },
                                        body: JSON.stringify(
                                            data
                                        )

                                    })
                                        .then((response) => {
                                            this.componentDidMount()
                                            return response.json();
                                        })
                                }
                            })
                    }}>Usuń</button>
                    </div>

                </li>
            )}
        </ul>

            <form onSubmit={(event) => {
                event.preventDefault();
                fetch('http://localhost:4000/products/', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            "name": this.state.ref,
                            "quantity": 0
                        }
                    )

                })
                    .then((response) => {
                        this.componentDidMount()
                        return response.json();
                    })

            }}>

                <div>
                    <input type="text"
                           onChange={(input) => {
                               this.setState({"ref": input.target.value}) }
                           }
                    />
                </div>

                <button className={"addProduct"} type="submit">Nowy produkt</button>
                <li className={"footer"}>
                <NavLink exact to="/" >ZAMKNIJ LODÓWKĘ!</NavLink>
                    </li>
            </form>
            </div>


    )
}

};

export default Open;

