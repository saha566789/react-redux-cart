import { useEffect, useState } from "react";
import "./style.css"
import Table from "react-bootstrap/Table"
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const CardsDetails = () => {
    const [data, setData] = useState([])
    // console.log(data)
    const { id } = useParams()
    // console.log(id)
    const getdata = useSelector((state) => state?.cartreducer?.carts)
    console.log(getdata)

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comparedata);
    }

    useEffect(() => {
        compare();
    }, [id])


    return (
        <div>
            <div className="container mt-2">
                <h2 className="text-center">Items Details  Page</h2>

                <section className="container mt-3">
                    <div className="iteamsdetails">
                        {
                            data.map((ele) => {
                                return (
                                    <>
                                        <div className="items_img">

                                            <img src={ele.imgdata} alt="" />
                                        </div>

                                        <div className="details">
                                            <Table key={ele.id}>
                                                <tr>
                                                    <td>
                                                        <p><strong>Restaurant</strong>:{ele.rname}</p>
                                                        <p><strong>Price</strong>:{ele.price}</p>
                                                        <p><strong>Dishes</strong>:{ele.address}</p>
                                                        <p><strong>Total</strong>:{}</p>
                                                    </td>
                                                    <td>
                                                        <p><strong>Rating</strong>: <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating}*</span></p>
                                                        <p><strong>Order</strong>: <span>{ele.somedata}</span></p>
                                                        <p><strong>Remove</strong>: <span style={{ color: "red", fontSize: "20px", cursor: "pointer" }}><AiFillDelete /></span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
        </div>
    );
};

export default CardsDetails;