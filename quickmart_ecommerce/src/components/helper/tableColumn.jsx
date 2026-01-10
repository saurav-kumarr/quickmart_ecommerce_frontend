
import { FaEdit } from 'react-icons/fa';


export const adminOrderTableColumn = [
  { 
    // ORDER ID
    sortable: false,
    disableColumnMenu: true,
    field: "id",
    headerName: "orderId",
    minWidth: 180,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className='text-center'>Order ID</span>
   },
  {
    //Column for customer email
    sortable: false,
    disableColumnMenu: true,
    field: "email",
    headerName: "Email",
    align: "center",
    Width: 250,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Email</span>
  },
  {
    // column for showing total amount of the Order.
    sortable: true,
    disableColumnMenu: true,
    field: "totalAmount",
    headerName: "Total Amount",
    align: "center",
    Width: 200,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Total Amount</span>
  },
  {
    // Column to display order status (e.g., Pending, Shipped).
    sortable: false,
    disableColumnMenu: true,
    field: "status",
    headerName: "Status",
    align: "center",
    Width: 200,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Status</span>
  },
  {
    // Column for order creation date.
    sortable: false,
    disableColumnMenu: true,
    field: "date",
    headerName: "Date",
    align: "center",
    Width: 200,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Order Date</span>
  },
  {
    // Custom action column with an "Edit" button.
    sortable: false,
    disableColumnMenu: true,
    field: "action",
    headerName: "Action",
    //align: "center",
    Width: 250,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center ",
    cellClassName: "text-slate-700 font-normal",
    renderHeader: (params) => <span>Action</span>,
    renderCell: (params) => {
      return(
        <div className='flex justify-center items-center space-x-2 h-full pt-2'>
          <button
                className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md'>
                <FaEdit className='mr-2'/>
                Edit
          </button>
        </div>
      );
    },
  },
];