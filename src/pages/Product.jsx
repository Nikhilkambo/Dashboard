import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import product_image from '../assets/product.jpeg';
import MyVerticallyCenteredModal from '../componets/Model'
import AddProduct from "../componets/AddProduct";
import Button from 'react-bootstrap/Button';
import { AuthContext } from "../AuthContext";



const Product = () => {
    const{productDetails,productList,modalShow,setModalShow}=useContext(AuthContext)
    const [updateModel,setUpdateModel] =useState(false);
    const [updatePage, setUpdatePage] = useState(true);
    useEffect(()=>{
      getProducts()
    },[updatePage]) 
    const userDetails=JSON.parse(localStorage.getItem('userInfo'))
    const getProducts = async()=>{
      try {
         let response=  await axios.get("http://127.0.0.1:3007/api/product/list",{ 'headers': { 'x-auth': userDetails.token }})
         let result = await response.data
         if (result) {
          productDetails(result)

          } 
      } catch (error) {

      }
    }
    const deleteProduct = async(id)=>{
      try {
        const response =await axios.delete(`http://127.0.0.1:3007/api/product/delete/${id}`,{ 'headers': { 'x-auth': userDetails.token }})
        alert("Delete Successfully",response)  
      }catch(err){     
        alert("Error in Deleting the Record");    
        }
      }
    const mystyle = {
      width: "70px",    
    };
   


  return (
    <>
      <div className="container btn-container my-3">
          <Button variant="outline-primary" onClick={() => setModalShow(true) }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
</svg> Add Product </Button>
      </div>
      <MyVerticallyCenteredModal addproduct={<AddProduct/>}
        show={modalShow}
        title= {"Add New Product"}
        onHide={() => setModalShow(false)}
      />
      <div className="container overflow-auto">
       
        <table className="table table-bordered table-responsive table-image ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Company</th>
              <th scope="col">Category</th>
              <th scope="col">Product Image</th>
              <th scope="col">More</th>
            </tr>
          </thead>
          
            {productList.map((item,index)=>
            <tbody key={index}>
            <tr>
                <th scope="row">{index+1}</th>
                <td >{item.name}</td>
                <td>{item.price}</td>
                <td>{item.company}</td>
                <td>{item.category}</td>
                <td ><img className="img-fluid" alt="product-photo" style={mystyle}  src={item.productImage ? 'http://127.0.0.1:3007/api/product/'+item.productImage  : ''} width='100' height='100' /></td>
                <td>
                  <div> 
                    <Button onClick={() => deleteProduct(item._id)} variant="outline-danger" className="m-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></Button>
<Button onClick={() => setUpdateModel(true)} variant="outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></Button>     <MyVerticallyCenteredModal addproduct={<AddProduct/>}
        show={updateModel}
        title= {"Update Product"}
        onHide={() => setUpdateModel(false)}
       
      />   
                  </div>
                </td>
                </tr>
                </tbody>
            )}
        </table>
        {productList.length===0 && <p className="text-center">No Result Found</p>}
      </div>
    </>
  );
};

export default Product;
