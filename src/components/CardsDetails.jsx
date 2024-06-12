import { useEffect, useState } from "react";
import "./style.css"
import Table from "react-bootstrap/Table"
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT } from "../redux/actions/action";
import { ADD,REMOVE } from "../redux/actions/action"

const CardsDetails = () => {
    const [data, setData] = useState([])
    // console.log(data)
    const { id } = useParams()
    // console.log(id)
    const getdata = useSelector((state) => state?.cartreducer?.carts)
    // console.log(getdata)
    const dispatch = useDispatch()

    const history = useNavigate()

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comparedata);
    }

    useEffect(() => {
        compare();
    }, [id])

    // add data
    const send = (element)=>{
        // console.log(element);
        dispatch(ADD(element));
      }

    const dlt = (id) => {
        dispatch(DLT(id))
        history("/")
    }
    // remove one 
    const remove =(item)=>{
        dispatch(REMOVE(item))
    }

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
                                                        <p><strong>Total</strong>:{ele.price * ele.qnty}</p>
                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                            <span onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)} style={{ fontSize: 24 }} >-</span>
                                                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                            <span style={{ fontSize: 24 }} onClick={()=>send(ele)} >+</span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p><strong>Rating</strong>: <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating}*</span></p>
                                                        <p><strong>Order</strong>: <span>{ele.somedata}</span></p>
                                                        <p onClick={() => dlt(ele.id)}><strong>Remove</strong>: <span style={{ color: "red", fontSize: "20px", cursor: "pointer" }}><AiFillDelete /></span></p>
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