import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import OrderTable from './OrderTable';
import { useSelector } from 'react-redux';
import useOrderFilter from '../../../hooks/useOrderFilter';
const Orders = () => {
   // const adminOrders = [ { "orderId": 2, "email": "user1@example.com", "orderItems": [ { "orderItemId": 2, "product": { "productName": "Robot1", "image": "744579ba-09b7-473a-8a95-808cfb14322d.png", "description": "Its an automatic car based on voice recognition & equiped with machine gun.", "quantity": 14, "price": 400.0, "discount": 0.0, "specialPrice": 400.0, "productId": 1 }, "quantity": 1, "discount": 0.0, "orderedProductPrice": 400.0 } ], "orderDate": "2026-01-06", "payment": { "paymentId": 2, "paymentMethod": "online", "pgPaymentId": "pi_3SmK2Q0BudA3XGAY0ydJOB9g", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 400.0, "orderStatus": "Order Accepted!", "addressId": 5 }, { "orderId": 1, "email": "user1@example.com", "orderItems": [ { "orderItemId": 1, "product": { "productName": "Robot2", "image": "ce28dc05-d747-4172-ad2f-4c6f8d841d21.png", "description": "Its an automatic car based on voice recognition & equiped with machine gun.", "quantity": 13, "price": 400.0, "discount": 0.0, "specialPrice": 400.0, "productId": 2 }, "quantity": 2, "discount": 0.0, "orderedProductPrice": 400.0 } ], "orderDate": "2025-09-14", "payment": { "paymentId": 1, "paymentMethod": "CARD", "pgPaymentId": "pi_1FHEh2eZvdgFHcxksdFHkkW", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 800.0, "orderStatus": "Order Accepted!", "addressId": 2 } ]
  //  const pagination = {pageNumber: 0, pageSize: 10, totalElements: 2, totalPages: 1, lastPage: true};
   
  const {adminOrder,pagination} = useSelector((state) => state.order);

  useOrderFilter();

  const emptyOrder =  !adminOrder || adminOrder?.length === 0;
  return (
    <div className='pb-6 pt-20'>
        {emptyOrder ? (
            <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
            <FaShoppingCart size={50} className='mb-3' />
            <h2 className='text-2xl font-semibold'>No Orders Placed Yet</h2>
            </div>
        ) : (
            <OrderTable adminOrder={adminOrder} pagination={pagination}/>
        )}
    </div>
  )
}

export default Orders