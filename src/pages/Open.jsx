import React, {Component} from "react";

class Open extends Component{
    state={
        products: [],
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
        console.log(products)


    return (

        <ul>
            {products.map(props =>
                <li {...props} key={props.id} >
                    {props.name}{" "}{props.quantity}
                    <button>+</button>
                    <button>-</button>

                </li>
            )}
        </ul>



    )
}
};

export default Open;

