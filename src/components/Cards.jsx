import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from "./CardData"
import { useState } from 'react';
import "./style.css"
import { useDispatch } from 'react-redux';
import { ADD } from "../redux/actions/action"



const Cards = () => {

    const [data, setData] = useState(CardData)
     
    const dispatch = useDispatch()
    const send = (element)=>{
        // console.log(e);
        dispatch(ADD(element));
      }
    return (
        <div className="container mt-3">
            <h2 className="text-center">Add to cart projects</h2>

            <div className="row d-flex justify-content-center align-content-center ">

                {
                    data.map((element, id) => {
                        return (
                            <>
                                <Card key={id} style={{ width: '22rem',border:"none" }} className='mx-2 mt-4 card_style'>
                                    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-4' />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                           Price:${element.price}
                                        </Card.Text>
                                       <div className='button_div d-flex justify-content-center align-content-center'>
                                       <Button 
                                       onClick={()=> send(element)}
                                       variant="primary" className='col-lg-12'>Add to Cart</Button>
                                       </div>
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