import { useEffect, useState } from "react";
import "../App.css";
import { ClientTableRow, ClientTableJsonObject, getClientTable } from "../DataObjects/ClientTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/ClientTableConstants";




export default function Main() {

    const [tableData, setTableData] = useState<ClientTableRow[]>([INIT_RESULT_DATA]);
    const [modalClientData, setmodalClientData] = useState<ClientTableRow>(INIT_RESULT_DATA);
    const [isModalActive, setIsModalActive] = useState<Boolean>(false);


    //A function that supports the creation of the client table.
    function setClientTable() {
        try {
            getClientTable().then(
                function (response: any) {
                    let clientTableArray: ClientTableRow[] = [];
                    console.log(response.data);
                    //Define the output of my objects to the array.
                    response.data.forEach((element: ClientTableJsonObject) => {
                        return clientTableArray.push({
                            abc_client_id: (element.abc_client_id ? element.abc_client_id : null),
                            client_name: (element.client_name ? element.client_name : ""),
                            //    AddressState: (element.state ? element.state : ""),
                            //      InventoryCount: (element.num_of_inventories ? element.num_of_inventories : null),
                            phone_number: (element.phone_number ? element.phone_number : ""),
                            company_address_id: undefined,
                            created_by: undefined,
                            created_date: undefined,
                            modified_by: undefined,
                            modified_date: undefined,
                            is_deleted: undefined
                        });
                    });


                    //Overwrite the table data.
                    setTableData(clientTableArray);
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
        let clientRow: ClientTableRow = tableData.at(key);
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
                            <p className="mb-3">{(modalClientData.abc_client_id ? modalClientData.abc_client_id.toString() : "")}</p>
                            {modalClientData.client_name &&
                                <>
                                    <label className="has-text-weight-medium">Clientasfasf Name: </label>
                                    <p>{(modalClientData.client_name ? modalClientData.client_name : "")}</p>
                                </>
                            }
                        </div>
                        <div className="column">
                            {modalClientData.abc_client_id &&
                                <>
                                    <label className="has-text-weight-medium">State: </label>

                                </>
                            }
                            {modalClientData.abc_client_id &&
                                <>
                                    <label className="has-text-weight-medium">Number of Inventories: </label>
                                    <p className="mb-3">{(modalClientData.abc_client_id ? modalClientData.abc_client_id.toString() : "")}</p>
                                </>
                            }
                            {modalClientData.abc_client_id &&
                                <>
                                    <label className="has-text-weight-medium">Number of Contacts: </label>
                                    <p>{(modalClientData.abc_client_id ? modalClientData.abc_client_id.toString() : "")}</p>
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
        setClientTable();
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
                                <tr id={(row.abc_client_id ? row.abc_client_id.toString() : "")}>
                                    <td>{(row.abc_client_id ? row.abc_client_id.toString() : "")}</td>
                                    <td>{(row.client_name ? row.client_name : "")}</td>
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