'use client'

import { Product } from "@prisma/client";
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { formatPrice } from "@/utils/formatPrice";

interface ManageProductsClientProps{
    products:Product[]
}
const ManageProductsClient:React.FC<ManageProductsClientProps> = ({products}) => {

    let rows:any=[]
    if(products)
    {
        rows=products.map((product)=>{
            return{
                id:product.id,
                name:product.name,
                price:formatPrice(product.price),
                category:product.category,
                brand:product.brand,
                inStock:product.inStock,
                images:product.images,
            };
        });
    }
    const columns:GridColDef[]=[
        {field:'id',headerName:'ID',width:220},
    {field:'name',headerName:'Name',width:220},
        {field:'price',headerName:'Price(USD)',width:100},]

    return ( <div><DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      /></div> );
}
 
export default ManageProductsClient;