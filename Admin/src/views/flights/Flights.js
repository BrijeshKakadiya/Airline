import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
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
import { createFlight, getAllFlights, deleteFlightById } from '../../../provider/services/flights.service'
import { toast } from 'react-toastify'

const Flights = () => {

  const [visible, setVisible] = useState(false);
  const [flightName, setFlightName] = useState("");
  const [destination, setDestination] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [bookingSeats, setBookingSeats] = useState("");
  const [dateAndTime, setDateandtime] = useState("");
  const [allFlightsData, setAllFlightsData] = useState([]);
  const [visibleQuestion, setVisibleQuestion] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      let data = await getAllFlights();
      setAllFlightsData(data.data);
    }
    fetchData();
  }, [])

  const onSubmitForm = () => {
    let obj = {
      flightName: flightName,
      destination: destination,
      totalSeats: totalSeats,
      bookingSeats: bookingSeats,
      dateAndTime: dateAndTime,
    };
    createFlight(obj);
    getAllFlightData();
    setVisible(!visible);
    setFlightName("");
    setDestination("");
    setTotalSeats("");
    setBookingSeats("");
    setDateandtime("");
    toast.success("Flight add successfully!")
  };

  const getAllFlightData = async () => {
    let data = await getAllFlights();
    console.log("data", data);
    console.log("data.data", data.data);
    setAllFlightsData(data.data);
  }

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "flightName") {
      setFlightName(value);
    }
    if (name === "destination") {
      setDestination(value);
    }
    if (name === "totalSeats") {
      setTotalSeats(value);
    }
    if (name === "bookingSeats") {
      setBookingSeats(value);
    }
    if (name === "destination") {
      setDestination(value);
    }
    if (name === "dateAndTime") {
      setDateandtime(value);
    }
  };

  const handleDelete = async (id) => {
    deleteFlightById(id);
    let data = await getAllFlights();
    setAllFlightsData(data.data);
    setVisibleQuestion(false);
    toast.success("FLight Remove Succeccfully!")
  };

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <CRow>
                <CCol xs={2}>
                  <CButton className="curson-context-menu text-bold text-bold">Flights</CButton>
                </CCol>
                <CCol xs={8}></CCol>
                <CCol xs={2} className='d-flex justify-content-end'>
                  <CButton color="primary" onClick={() => setVisible(!visible)}>+ Add Flight</CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            {/* Model start */}
            <CModal
              size="lg"
              visible={visible}
              onClose={() => setVisible(false)}
              aria-labelledby="OptionalSizesExample2"
            >
              <CModalHeader>
                <CModalTitle id="OptionalSizesExample2">Add Flight</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm className="row g-3">
                  <CCol xs={4}>
                    <CFormInput
                      id="flightName"
                      label="Flight Name"
                      name="flightName"
                      placeholder="Air India"
                      onChange={onChange}
                    // text="Must be 8-20 characters long."
                    // aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CCol>
                  <CCol xs={4}>
                    <CFormInput
                      id="destination"
                      label="Destination"
                      name='destination'
                      placeholder="LHA-BOM"
                      onChange={onChange}
                    // text="Must be 8-20 characters long."
                    // aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CCol>
                  <CCol xs={4}>
                    <CFormInput
                      id="totalSeats"
                      label="Total Seats"
                      name='totalSeats'
                      placeholder="200"
                      onChange={onChange}
                    // text="Must be 8-20 characters long."
                    // aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CCol>
                  <CCol xs={4}>
                    <CFormInput
                      id="bookingSeats"
                      label="Booking Seats"
                      name='bookingSeats'
                      placeholder="122"
                      onChange={onChange}
                    // text="Must be 8-20 characters long."
                    // aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CCol>
                  <CCol xs={4}>
                    <CFormInput
                      id="dateandtime"
                      label="Date & Time"
                      name='dateAndTime'
                      placeholder="31 Nov, 9:30 Am"
                      onChange={onChange}
                    // text="Must be 8-20 characters long."
                    // aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CCol>
                  <CCol xs={4} className="mt-47px">
                    <CButton color="primary" onClick={onSubmitForm}>Submit</CButton>
                  </CCol>
                </CForm>
              </CModalBody>
            </CModal>
            {/* Model end */}
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap text-center">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Flight Name
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Destination
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Total Seats</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Booking Seats</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Date & Time</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {allFlightsData && allFlightsData.map((item, index) => {
                    return (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell>
                          <div>{item.flightName}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.destination}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.totalSeats}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.bookingSeats}</div>
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
                            <div className="text-align-center fs-18px">Are you sure you want to remove this Flight?</div>
                            <CModalFooter className="display-ruby-text">
                              <CButton color="primary" onClick={() => handleDelete(item._id)} >Submit</CButton>
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

export default Flights;
