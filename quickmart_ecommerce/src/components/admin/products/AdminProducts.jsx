import React, { useState } from 'react'
import {MdAddShoppingCart} from 'react-icons/md';
import { useSelector } from 'react-redux';
import Loader from '../../shared/Loader';
import { FaBoxOpen } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import { adminProductTableColumn } from '../../helper/tableColumn';
import { useDashboardProductFilter } from '../../../hooks/useProductFilter';
const AdminProducts = () => {

  // const products = [{ "productName": "Robot3", "image": "http://localhost:8080/images/4cc3c95e-7d34-4e43-8e4d-c933bcc2b361.png", "description": "Its an automatic car based on voice recognition & equiped with machine gun.", "quantity": 15, "price": 400.0, "discount": 0.0, "specialPrice": 400.0, "productId": 4 }, { "productName": "Robot2", "image": "http://localhost:8080/images/1aecfd5a-2eb8-42fc-bf19-2ef298c46ec7.png", "description": "Its an automatic car based on voice recognition & equiped with machine gun.", "quantity": 15, "price": 400.0, "discount": 0.0, "specialPrice": 400.0, "productId": 3 }];
  // const pagination = {pageNumber: 0, pageSize: 10, totalElements: 2, totalPages: 1, lastPage: true};
  
  const {products,pagination} = useSelector((state) => state.products);
  const {isLoading, errorMessage} = useSelector((state) => state.errors);

  useDashboardProductFilter();
  
  const tableRecords = products?.map((item) => {
  return {
    id: item.productId,
    productName: item.productName,
    description: item.description,
    discount: item.discount,
    image: item.image,
    price:item.price,
    quantity:item.quantity,
    specialPrice: item.specialPrice,
  }
});

const [currentPage, setCurrentPage] = useState(
    pagination?.pageNumber + 1 || 1
  );

  const handleEdit = (product) => {

  };
  const handleDelete = (product) => {

  };
  const handleImageUpload = (product) => {

  };
  const handleProductView = (product) => {

  };
  const handlePaginationChange = (paginationModel) => {

  };

  const emptyProduct =  !products || products?.length === 0;
  
  return (
    <div>
      <div className='pt-6 pb-10 flex justify-end'>
        <button
           className='bg-custom-blue hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded-md shadow-md transition-colors hover:text-slate-300 duration-300'>
          <MdAddShoppingCart className='text-xl'/>
          Add Product
        </button>
      </div>

      {!emptyProduct && (
        <h1
         className='text-slate-800 text-3xl text-center font-bold pb-6 uppercase'>
        All Products</h1>
      )}
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
        {emptyProduct ? (
          <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
           <FaBoxOpen size={50} className='mb-3'/>
            <h2 className='text-2xl font-semibold'>
              No product created yet
            </h2>
          </div>
        ) : (
          <div className='max-w-full'>
            <DataGrid
                    className='w-full '
                    rows={tableRecords}
                    columns={adminProductTableColumn(
                      handleEdit,
                      handleDelete,
                      handleImageUpload,
                      handleProductView)}
                    paginationMode='server'
                    rowCount={pagination?.totalElements || 0}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: pagination?.pageSize || 10,
                          page: currentPage - 1,
                        },
                      },
                    }}
                    onPaginationModelChange={handlePaginationChange}
                    disableRowSelectionOnClick
                    pageSizeOptions={[pagination?.pageSize || 10]}
                    pagination
                    paginationOptions={{
                      showFirstButton: true,
                      showLastButton: true,
                      hideNextButton: currentPage === pagination?.totalPages,
                    }}
                  />
          </div>
        )}
        </>
      )}

    </div>
  )
}

export default AdminProducts