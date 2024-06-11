import "./style.css"
import Table from "react-bootstrap/Table"
import { AiFillDelete } from "react-icons/ai";


const CardsDetails = () => {
    return (
        <div>
            <div className="container mt-2">
               <h2 className="text-center">Items Details  Page</h2>

               <section className="container mt-3">
                <div className="iteamsdetails">
                    <div className="items_img">
      
                           <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
                    </div>

                    <div className="details">
                     <Table>
                        <tr>
                            <td>
                                <p><strong>Restaurant</strong>:</p>
                                <p><strong>Price</strong>:</p>
                                <p><strong>Dishes</strong>:</p>
                                <p><strong>Total</strong>:</p>
                            </td>
                            <td>
                            <p><strong>Rating</strong>: <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}></span></p>
                            <p><strong>Order</strong>: <span></span></p>
                            <p><strong>Remove</strong>: <span style={{color:"red",fontSize:"20px",cursor:"pointer"}}><AiFillDelete /></span></p>
                            </td>
                        </tr>
                     </Table>
                    </div>
                </div>
               </section>
            </div>
        </div>
    );
};

export default CardsDetails;