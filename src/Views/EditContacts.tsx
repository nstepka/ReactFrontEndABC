import { useEffect, useState, FormEvent } from "react";
import "../App.css";
import { ContactTableRow, ContactTableJsonObject, getContactTable } from "../DataObjects/ContactTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/ContactTableConstants";





export default function Main() {

    const [tableData, setTableData] = useState<ContactTableRow[]>([INIT_RESULT_DATA]);
    const [modalClientData, setmodalClientData] = useState<ContactTableRow>(INIT_RESULT_DATA);
    const [isModalActive, setIsModalActive] = useState<Boolean>(false);


    //A function that supports the creation of the client table.
    function setContactTable() {
        try {
            getContactTable().then(
                function (response: any) {
                    let contactTableArray: ContactTableRow[] = [];
                    console.log(response.data);
                    response.data.forEach((element: ContactTableJsonObject) => {
                        return contactTableArray.push({
                            contact_id: (element.contact_id ? element.contact_id : null),
                            first_name: (element.first_name ? element.first_name : ""),
                            phone_number: (element.phone_number ? element.phone_number : ""),
                            email_address: (element.email_address ? element.email_address : ""),
                            middle_name: undefined,
                            last_name: (element.last_name ? element.last_name : ""),
                            created_by: undefined,
                            created_date: undefined,
                            modified_by: undefined,
                            modified_date: undefined,
                            is_deleted: undefined
                        });
                    });


                    //Overwrite the table data.
                    setTableData(contactTableArray);
                },
                (error) => {
                    console.log(error)
                }
            );
        } catch { }
    }

    function toggleModal() {
        setIsModalActive(!isModalActive);
    }

    function showModal(key: number) {
        let clientRow: ContactTableRow = tableData.at(key);
        setmodalClientData(clientRow);
        toggleModal();
    }


    function editClient(key: number) {
        let contactRow: ContactTableRow = tableData.at(key);
        setmodalClientData(contactRow);
        toggleModal();
    }

    const sendForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { first_name, last_name, phone_number } = event.target as typeof event.target & {
            first_name: { value: string }
            last_name: { value: string }
            phone_number: { value: string }

        }

        await fetch('/route', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                first_name: first_name.value,
                last_name: last_name.value,
                phone_number: phone_number.value
            })
        })
    }


    const Modal = ({ closeModal, modalState }: { closeModal: any, modalState: boolean }) => {
        if (!modalState) {
            return null;
        }

        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <div className="modal-card-head is-radiusless">
                        <p className="modal-card-title">Client Contact List</p>
                        <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
                    </div>
                    <section className="modal-card-body columns">
                        <div className="column">
                            {modalClientData.first_name &&
                                <>
                                    <label className="has-text-weight-medium">Client First Name: </label>
                                    <p>{(modalClientData.first_name ? modalClientData.first_name : "")}</p>

                                </>
                            },
                            {modalClientData.last_name &&
                                <>
                                    <label className="has-text-weight-medium">Client Last Name Name: </label>
                                    <p>{(modalClientData.last_name ? modalClientData.last_name : "")}</p>

                                </>
                            },
                            {modalClientData.phone_number &&
                                <>
                                    <label className="has-text-weight-medium">Client Phone Number: </label>
                                <p>{(modalClientData.phone_number ? modalClientData.phone_number : "")}</p>

                                </>
                            }


                        </div>
                        <div className="column" onSubmit={event => sendForm}>
                            {modalClientData.contact_id &&
                                <>
                                   <div className="field">
                                        <label className="has-text-weight-medium">Updated First name: </label>
                                        <input className="input" type="text" id="first_name" placeholder="Text Input"></input>
                                   </div>
                                </>
                            }
                            {modalClientData.contact_id &&
                                <>
                                <div className="field">
                                    <label className="has-text-weight-medium">Updated Last name: </label>
                                    <input className="input" type="text" id="last_name" placeholder="Text Input"></input>
                                </div>
                                </>
                            }
                            {modalClientData.contact_id &&
                                <>
                                <div className="field">
                                    <label className="has-text-weight-medium">Updated Phone Number: </label>
                                    <input className="input" type="text" id="phone_number" placeholder="Text Input"></input>
                                </div>
                                </>
                            }
                            <button type="submit">Submit</button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }


    //The useEffect is a function that runs whenever the set data changes or when loading the page.
    useEffect(() => {
        setContactTable();
    }, []);

    return (
        <>
            <h2 className="is-size-2 pb-6 has-text-weight-medium">Client Contact List</h2>
            <div className="box columns is-centered is-radiusless">
                <div className="column is-6 px-0 py-0">
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Client Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Edit Client</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, i) =>
                                <tr id={(row.contact_id ? row.contact_id.toString() : "")} >
                                    <td>{(row.contact_id ? row.contact_id.toString() : "")}</td>
                                    <td>{(row.first_name ? row.first_name : "")} {(row.last_name ? row.last_name : "")}

                                    </td>
                                    <td>{(row.email_address ? row.email_address : "")} </td>
                                    <td>{(row.phone_number ? row.phone_number : "")}</td>
                                    <td><button onClick={() => editClient(i)}>Click to Edit</button></td>
                                    
                                </tr>

                            )}
                        </tbody>
                    </table>
                    <Modal
                        closeModal={toggleModal}
                        modalState={isModalActive.valueOf()}
                    />
                </div>
                <div className="column is-6 px-0 py-0">
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                               
                                <th>Contact Info</th>
                                <th>Contact Editor</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, i) =>
                                <tr id={(row.contact_id ? row.contact_id.toString() : "")}>
                                    
                                    <td>
                                    <tr>{(row.first_name ? row.first_name : "")}</tr>
                                    <tr> {(row.last_name ? row.last_name : "")}</tr>

                                    <tr>{(row.email_address ? row.email_address : "")}</tr>
                                    <tr>{(row.phone_number ? row.phone_number : "")}</tr>
                                    </td>
                                </tr>

                            )}
                        </tbody>
                        
                    </table>

                    <Modal
                        closeModal={toggleModal}
                        modalState={isModalActive.valueOf()}
                    />
                
                </div>                
              
            </div>
        </>
    );
}
