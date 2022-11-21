import axios from "axios";

export interface ContactTableRow {
    contact_id: Number,
    email_address: String,
    phone_number: String,
    first_name: String,
    last_name: String,
    middle_name: String,
    created_by: String,
    created_date: String,
    modified_by: String,
    modified_date: String,
    is_deleted: Number,
}


export interface ContactTableJsonObject {
    contact_id: Number,
    email_address: String,
    phone_number: String,
    first_name: String,
    last_name: String,
    middle_name: String,
    created_by: String,
    created_date: String,
    modified_by: String,
    modified_date: String,
    is_deleted: Number,

}

export async function getContactTable() {
    const response = await axios.get(
        'http://localhost:8000/contact',
        {}
    );

    return response;
}