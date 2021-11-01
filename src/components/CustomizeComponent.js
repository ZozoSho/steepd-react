import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderFlavor({flavor}) {
    return (
        <Card>
                <CardImg width="100%" src={flavor.image} alt={flavor.name} />
                    <CardImgOverlay>
                        <CardTitle>{flavor.name}</CardTitle>
                    </CardImgOverlay>   
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
    console.log(props.flavors);
    const baseArray = props.flavors.filter(base => base.type === "Base Tea");
    console.log(baseArray);
    const base = props.flavors.filter(flavor => flavor.type === "Base Tea").map(flavor => {
        return (
            <div key={flavor.id} className="col-md-5 m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });

    const floral = props.flavors.filter(flavor => flavor.type === "Floral").map(flavor => {
        return (
            <div key={flavor.id} className="col-md-5 m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });

    const spice = props.flavors.filter(flavor => flavor.type === "Spice").map(flavor => {
        return (
            <div key={flavor.id} className="col-md-5 m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });

    const fruit = props.flavors.filter(flavor => flavor.type === "Fruit").map(flavor => {
        return (
            <div key={flavor.id} className="col-md-5 m-1">
                <RenderFlavor flavor={flavor} />
            </div>
        );
    });
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Customize Your Tea</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <h4>Base Tea</h4>
            </div>    
            <div className="row">
                {base}
            </div>
            <div className="row">
                <h4>Floral</h4>
            </div>   
            <div className="row">
                {floral}
            </div>
            <div className="row">
                <h4>Spice</h4>
            </div>   
            <div className="row">
                {spice}
            </div>
            <div className="row">
                <h4>Fruit</h4>
            </div>   
            <div className="row">
                {fruit}
            </div>
        </div>
    );
}

export default Customize;