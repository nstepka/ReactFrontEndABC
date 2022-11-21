
import { ContactTableRow } from '../DataObjects/ClientTableInterface';


export const INIT_RESULT_DATA: ContactTableRow = {
    contact_id: -1,
    email_address: "",
    phone_number: "",
    first_name: "",
    created_by: "",
    created_date: undefined,
    modified_by: undefined,
    modified_date: undefined,
    is_deleted: undefined,
    last_name: "",
    middle_name: ""
};


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