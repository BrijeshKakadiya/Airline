import React, { useState } from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { AppHeader } from '../../../components'

const Bookings = () => {

    const [visible, setVisible] = useState(false);
    const [visibleQuestion, setVisibleQuestion] = useState(false);

    let obj = [
        { userName: "David", email: "david@gmail.com", age: "45", seatNo: "5A", totalAmount: "£850", status: "paid" },
        { userName: "Man", email: "man@gmail.com", age: "14", seatNo: "5B", totalAmount: "£850 - (25% Discount) = £637.5", status: "paid" },
        { userName: "Zack", email: "zack@gmail.com", age: "21", seatNo: "5C", totalAmount: "£850", status: "paid" }
    ]

    // let obj = [
    //     { userName: "Norman", email: "norman@gmail.com", age: "42", seatNo: "2A", totalAmount: "£2257", status: "paid" },
    //     { userName: "Nicky", email: "nicky@gmail.com", age: "43", seatNo: "2B", totalAmount: "£2257", status: "paid" },
    //     { userName: "Vicky", email: "vicky@gmail.com", age: "24", seatNo: "6A", totalAmount: "£1840", status: "paid" },
    //     { userName: "Hayden", email: "hayden@gmail.com", age: "13", seatNo: "6B", totalAmount: "£1840 - (25% Discount) = £1380", status: "paid" },
    // ]

    const [tickets, setTickets] = useState(obj);

    const handleDelete = (index) => {
        const newTickets = tickets.filter((_, i) => i !== index);
        setTickets(newTickets);
        setVisibleQuestion(false);
    };

    const onSubmitForm = () => {
        setVisible(!visible);
        setNewUserRole("");
        setUserName("");
        setEmail("");
    };

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "email") {
            setEmail(value);
        }
        if (name === "userName") {
            setUserName(value);
        }
    };

    return (
        <>
            <AppHeader />
            <CRow>
                <CCol xs={1}><a href='/#/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16" className='mt-10px ml-2rem'>
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg></a></CCol>
                {/* <CCol xs={4}><div className='p-9-5 fw-bolder'>Fri, May 31, 2024 || New Delhi(India) to Sydney(Australia)</div></CCol> */}
                <CCol xs={4}><div className='p-9-5 fw-bolder'>Fri, May 31, 2024 || New Delhi(India) to Sydney(Australia)</div></CCol>
            </CRow>
            <CRow>
                <CCol xs>
                    <CCard className="m-3rem">
                        <CCardBody>
                            <CTable align="middle" className="mb-0 border" hover responsive>
                                <CTableHead className="text-nowrap">
                                    <CTableRow>
                                        <CTableHeaderCell className="bg-body-tertiary text-center">
                                            UserName
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="bg-body-tertiary text-center">
                                            Email
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="bg-body-tertiary text-center">Age</CTableHeaderCell>
                                        <CTableHeaderCell className="bg-body-tertiary text-center">seat no</CTableHeaderCell>
                                        <CTableHeaderCell className="bg-body-tertiary text-center">Total amount</CTableHeaderCell>
                                        <CTableHeaderCell className="bg-body-tertiary text-center">status</CTableHeaderCell>
                                        <CTableHeaderCell className="bg-body-tertiary"></CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {tickets && tickets.map((item, index) => {
                                        return (
                                            <CTableRow v-for="item in tableItems seating-chart" key={index}>
                                                <CTableDataCell>
                                                    <div>{item.userName}</div>
                                                </CTableDataCell>
                                                <CTableDataCell className="text-center">
                                                    <div>{item.email}</div>
                                                </CTableDataCell>
                                                <CTableDataCell>
                                                    <div className="d-flex justify-content-between text-nowrap">
                                                        <div className="fw-semibold">{item.age}</div>
                                                    </div>
                                                </CTableDataCell>
                                                <CTableDataCell className="text-center">
                                                    <div>{item.seatNo}</div>
                                                </CTableDataCell>
                                                <CTableDataCell className="text-center">
                                                    <div>{item.totalAmount}</div>
                                                </CTableDataCell>
                                                <CTableDataCell className="text-center">
                                                    <div>{item.status}</div>
                                                </CTableDataCell>
                                                <CTableDataCell className="text-center">
                                                    <CButton color="danger text-white" onClick={() => setVisibleQuestion(true)}>Cancle</CButton>
                                                    <CModal
                                                        size="sm"
                                                        visible={visibleQuestion}
                                                        onClose={() => setVisibleQuestion(false)}
                                                    >
                                                        <CModalBody>
                                                            <div className="text-align-center fs-18px">Are you sure you want to cancel your booking?</div>
                                                            <CModalFooter className="display-ruby-text">
                                                                <CButton color="primary" onClick={() => handleDelete(index)} >Submit</CButton>
                                                                <CButton color="secondary" onClick={() => setVisibleQuestion(false)}>Cancel</CButton>
                                                            </CModalFooter>
                                                        </CModalBody>
                                                    </CModal>
                                                </CTableDataCell>
                                                {/* <CTableDataCell>
                                                    <CIcon icon={cilDelete} className='color-red' />
                                                    </CTableDataCell> 
                                                */}
                                            </CTableRow>
                                        )
                                    })}
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Bookings;
