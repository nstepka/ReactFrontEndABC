import axios from "axios";

export interface ClientTableRow {
    //company_address_id: JSX.Element;
    abc_client_id: Number,
    client_name: String,
    company_address_id: Number,
    phone_number: String,
    created_by: String,
    created_date: String,
    modified_by: String,
    modified_date: String,
    is_deleted: Number,

}


export interface ClientTableJsonObject {
    abc_client_id: Number,
    client_name: String,
    company_address_id: Number,
    phone_number: String,
    created_by: String,
    created_date: String,
    modified_by: String,
    modified_date: String,
    is_deleted: Number,
}



export async function getClientTable() {
    const response = await axios.get(
        'http://localhost:8000/abcclient',
        {}
    );

    return response;
}