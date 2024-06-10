import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from "./CardData"
import { useState } from 'react';
import "./style.css"



const Cards = () => {

    const [data, setData] = useState(CardData)

    return (
        <div className="container mt-3">
            <h2 className="text-center">Add to cart projects</h2>

            <div className="row d-flex justify-content-center align-content-center ">

                {
                    data.map((element, id) => {
                        return (
                            <>
                                <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4 card_style'>
                                    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Cards;