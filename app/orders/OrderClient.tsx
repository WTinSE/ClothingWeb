'use client'

import { Order, User } from "@prisma/client";
import moment from "moment";
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { formatPrice } from "@/utils/formatPrice";
import {  MdClose, MdDone, MdRemoveRedEye } from "react-icons/md";
import Status from "@/app/ components/Status";
import ActionBtn from "@/app/ components/ActionBtn";
import Heading from "@/app/ components/Heading";
import { useRouter } from "next/navigation";
import {getStorage } from "firebase/storage";
import firebaseApp from "@/libs/firebase";


interface OrderClientProps{
    orders:ExtendedOrder[];
}
type ExtendedOrder=Order&{
    user:User;
}
const OrderClient:React.FC<OrderClientProps> = ({orders}) => {
    const router=useRouter()
    const storage = getStorage(firebaseApp);
    let rows:any=[]
    if(orders){
        rows=orders.map((order)=>{
           return {
            id:order.id,
            customer:order.user.name,
            amount:formatPrice(order.amount/100),
            paymentStatus:order.status,
            date:moment(order.createDate).fromNow(),
            deliveryStatus:order.deliveryStatus,
           } ;
        });
    }
   
    const columns:GridColDef[]=[
        {field:'id',headerName:'ID',width:220},
        {field:'name',headerName:'Name',width:220},
        {field:'price',headerName:'Price(USD)',width:100,renderCell:(params)=>{
            return(<div className="font-bold text-slate-800">{params.row.price}</div>);
        },
    },
        {field:'category',headerName:"Category",width:100},
        {field:'brand',headerName:"Brand",width:100},
        {field:'inStock',headerName:"inStock",width:120,renderCell:(params)=>{
    return(<div>{params.row.inStock==true?
        (
        <Status text="in stock"
        icon={MdDone}
        bg="bg-teal-200"
        color="text-teal-700"
        />
        ):(
            <Status text="out of stock" icon={MdClose}
            bg="bg-rose-200"
            color="text-rose-700"/>)}</div>
    );},},
    {field:"action",headerName:"Actions",width:200,renderCell:(params)=>{
        return(
        <div className="flex justify-between gap-4 w-full">
            <ActionBtn icon={MdRemoveRedEye} onClick={()=>{router.push(`/order/${params.row.id}`)}}/>           
        </div>);}
    }
];

  return (
    <div className="max-w-[1150px] m-auto text-xl">
        <div className="mb-4 mt-8">
            <Heading title="Orders" center/>
        </div>
        <div style={{height:600,width:"100%"}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination:{
                        paginationModel:{page:0,pageSize:10}
                    },
                }}
                pageSizeOptions={[10,20]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    </div>
  )
}

export default OrderClient