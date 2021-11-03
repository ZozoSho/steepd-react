import React from 'react';
import Cart from './CartComponent';
import { Button, Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderFlavor({flavor}) {
    return (
        <Card>
                <CardImg width="100%" src={flavor.image} alt={flavor.name} />
                        <CardTitle className="mx-auto"><h5>{flavor.name}</h5></CardTitle>
                <CardBody className="pt-0 mx-auto">
                    <Button className="cardbtn">Add</Button>    
                </CardBody>    
        </Card>
    );
}

function Customize(props) {
/*     const customize = props.flavors.map(flavor => {
        return (
            <div key={flavor.id} className="col-md-5 m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    }); */

    const base = props.flavors.filter(flavor => flavor.type === "Base Tea").map(flavor => {
        return (
            <div key={flavor.id} className="col m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });

    const floral = props.flavors.filter(flavor => flavor.type === "Floral").map(flavor => {
        return (
            <div key={flavor.id} className="col m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });

    const spice = props.flavors.filter(flavor => flavor.type === "Spice").map(flavor => {
        return (
            <div key={flavor.id} className="col m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });

    const fruit = props.flavors.filter(flavor => flavor.type === "Fruit").map(flavor => {
        return (
            <div key={flavor.id} className="col m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-lg-8 d-block">
                    <div className="row mx-auto pl-5">
                        <div className="col">
                            <h1>Customize Your Tea</h1>
                            <hr />
                        </div>
                    </div>

                    <div className="row mx-auto">
                        <div className="col">
                        <h4>Base Tea</h4>
                        </div>
                    </div>    
                    <div className="row">
                        {base}
                    </div>

                    <div className="row mx-auto">
                        <div className="col">
                        <h4>Floral</h4>
                        </div>
                    </div>   
                    <div className="row">
                        {floral}
                    </div>

                    <div className="row mx-auto">
                        <div className="col">
                        <h4>Spice</h4>
                        </div>
                    </div>   
                    <div className="row">
                        {spice}
                    </div>

                    <div className="row mx-auto">
                        <div className="col">
                        <h4>Fruit</h4>
                        </div>
                    </div>   
                    <div className="row">
                        {fruit}
                    </div>

                </div>

                    <Cart />

            </div>
        </div>
    );
}

export default Customize;