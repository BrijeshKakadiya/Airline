import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
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
import CIcon from '@coreui/icons-react'
import { cilDelete } from '@coreui/icons'
import { toast } from 'react-toastify'

const Bookings = () => {

  const obj = [
    { userName: "Devid", destination: "IND-AUS", email: "devid@gmail.com", seatNo: "5A", dateAndTime: "14:20(New Delhi) - 07:10(Sydney)", age: "45", amount: "£850" },
    { userName: "Man", destination: "IND-AUS", email: "man@gmail.com", seatNo: "5B", dateAndTime: "14:20(New Delhi) - 07:10(Sydney)", amount: "£850 - (25% Discount) = £637.5", age: "14" },
    { userName: "Zack", destination: "IND-AUS", email: "zack@gmail.com", seatNo: "5C", dateAndTime: "14:20(New Delhi) - 07:10(Sydney)", amount: "£850", age: "21" },
    { userName: "Norman", destination: "LHR-IAD", email: "norman@gmail.com", seatNo: "2A", dateAndTime: "12:35(London) - 15:35(Washington)", amount: "£2257", age: "42" },
    { userName: "Nicky", destination: "LHR-IAD", email: "nicky@gmail.com", seatNo: "2B", dateAndTime: "12:35(London) - 15:35(Washington)", amount: "£2257", age: "43" },
    { userName: "Vicky", destination: "LHR-IAD", email: "vicky@gmail.com", seatNo: "6A", dateAndTime: "12:35(London) - 15:35(Washington)", amount: "£1840", age: "24" },
    { userName: "Hayden", destination: "LHR-IAD", email: "hayden@gmail.com", seatNo: "6B", dateAndTime: "12:35(London) - 15:35(Washington)", amount: "£1840 - (25% Discount) = £1380", age: "13" },
  ]

  const [booking, setBooking] = useState(obj);
  const [visibleQuestion, setVisibleQuestion] = useState(false);

  const handleDelete = (index) => {
    const newTickets = booking.filter((_, i) => i !== index);
    setBooking(newTickets);
    setVisibleQuestion(false);
    toast.success("Booking Cancel successfully!")
  };

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader><CRow>
              <CCol xs={2}>
                <CButton className="curson-context-menu text-bold">Bookings</CButton>
              </CCol>
            </CRow></CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap text-center">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      User Name
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Destination
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Email</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">SeatNo</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">age</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Amount</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Date & Time</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {booking && booking.map((item, index) => {
                    return (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell>
                          <div>{item.userName}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.destination}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.email}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.seatNo}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.age}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.amount}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="d-flex justify-content-between text-nowrap">
                            <div className="fw-semibold">{item.dateAndTime}</div>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CIcon icon={cilDelete} className='color-red' onClick={() => setVisibleQuestion(true)} />
                        </CTableDataCell>
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
