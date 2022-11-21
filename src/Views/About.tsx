import { useEffect, useState } from "react";
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
                            email_address: undefined,
                            middle_name: undefined,
                            last_name: undefined,
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


    const Modal = ({ closeModal, modalState }: { closeModal: any, modalState: boolean }) => {
        if (!modalState) {
            return null;
        }

        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <div className="modal-card-head is-radiusless">
                        <p className="modal-card-title">Client Infoasdasfasfasdrmation</p>
                        <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
                    </div>
                    <section className="modal-card-body columns">
                        <div className="column">
                            <label className="has-text-weight-medium">Number: </label>
                            <p className="mb-3">{(modalClientData.contact_id ? modalClientData.contact_id.toString() : "")}</p>
                            {modalClientData.first_name &&
                                <>
                                    <label className="has-text-weight-medium">Clientasfasf Name: </label>
                                    <p>{(modalClientData.first_name ? modalClientData.first_name : "")}</p>
                                </>
                            }
                        </div>
                        <div className="column">
                            {modalClientData.contact_id &&
                                <>
                                    <label className="has-text-weight-medium">State: </label>

                                </>
                            }
                            {modalClientData.contact_id &&
                                <>
                                    <label className="has-text-weight-medium">Number of Inventories: </label>
                                    <p className="mb-3">{(modalClientData.contact_id ? modalClientData.contact_id.toString() : "")}</p>
                                </>
                            }
                            {modalClientData.contact_id &&
                                <>
                                    <label className="has-text-weight-medium">Number of Contacts: </label>
                                    <p>{(modalClientData.contact_id ? modalClientData.contact_id.toString() : "")}</p>
                                </>
                            }
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
            <h2 className="is-size-2 pb-6 has-text-weight-medium">Client Lidafasfasfasfst</h2>
            <div className="box columns is-centered is-radiusless">
                <div className="column is-12 px-0 py-0">
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Client Name</th>
                                <th>State</th>
                                <th>Number of Invenftories</th>
                                <th>Number of Contacts</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, i) =>
                                <tr id={(row.contact_id ? row.contact_id.toString() : "")}>
                                    <td>{(row.contact_id ? row.contact_id.toString() : "")}</td>
                                    <td>{(row.first_name ? row.first_name : "")}</td>
                                    <td><button className="button is-dark" onClick={() => showModal(i)}>View Client Details</button></td>
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
