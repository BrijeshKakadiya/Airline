import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CModalBody,
    CRow,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalFooter,
    CForm,
    CFormCheck
} from '@coreui/react'
import { toast } from 'react-toastify';

let arr = [];
const lockedSeats = []; //Fire seat 
// const lockArr = []; // For staff and management

const aircraftOne = () => {

    const [selectedSeat, setSelectedSeat] = useState([]);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState([]);
    const [check, setCheck] = useState(false);
    const [lockClick, setLockClick] = useState(false);

    const checkClick = () => {
        setCheck(true);
        lockedSeats.push('10A', '10B', '10C', '10D', '10E', '10F');
    }

    const handleBookSeats = () => {
        setFormData(selectedSeat.map(seat => ({ selectSeat, userName: '', email: '', age: '' })));
        setVisible(true);
    };

    const handleInputChange = (index, field, value) => {
        const newFormData = [...formData];
        newFormData[index][field] = value;
        setFormData(newFormData);
    };

    const handleSubmit = () => {
        setVisible(false);
        setSelectedSeat([]);
        toast.success("Ticket booked successfully.");
        // Add your form submission logic here
    };

    const onLockSeat = () => {
        // setSelectedSeat([]);
        toast.success("Seat Lock successfully.");
        // Add your form submission logic here
    };

    const onUnLockSeat = () => {
        setSelectedSeat([]);
        toast.success("Seat Unlock successfully.");
        // Add your form submission logic here
    };

    const seats1_3 = ['1A', '1B', '1C', '1D', '2A', '2B', '2C', '2D', '3A', '3B', '3C', '3D'];

    const seats4_7 = ['4A', '4B', '4C', '4D', '4E', '4F', '5A', '5B', '5C', '5D', '5E', '5F', '6A', '6B', '6C', '6D', '6E', '6F', '7A', '7B', '7C', '7D', '7E', '7F'];

    const seats8_19 = ['8A', '8B', '8C', '8D', '8E', '8F', '9A', '9B', '9C', '9D', '9E', '9F', '10A', '10B', '10C', '10D', '10E', '10F', '11A', '11B', '11C', '11D', '11E', '11F', '12A', '12B', '12C', '12D', '12E', '12F', '13A', '13B', '13C', '13D', '13E', '13F', '14A', '14B', '14C', '14D', '14E', '14F', '15A', '15B', '15C', '15D', '15E', '15F', '16A', '16B', '16C', '16D', '16E', '16F', '17A', '17B', '17C', '17D', '17E', '17F', '18A', '18B', '18C', '18D', '18E', '18F', '19A', '19B', '19C', '19D', '19E', '19F']

    const seats20 = ['20A', '20B', '20C', '20D'];

    const selectSeat = (seat) => {
        arr.push(seat)
        setSelectedSeat(prevSelectedSeats => {
            if (prevSelectedSeats.includes(seat)) {
                return prevSelectedSeats.filter(s => s !== seat);
            } else {
                if (prevSelectedSeats.length < 6) {
                    return [...prevSelectedSeats, seat];
                } else {
                    alert('You can only book up to 6 seats once time. || if you book more seats first complete 6 seats booking');
                    return prevSelectedSeats;
                }
            }
        });
    };

    // const selectLockSeat = (seat) => {
    //     lockArr.push(seat)
    //     // setLockSelectedSeat(prevSelectedSeats => {
    //     //     if (prevSelectedSeats.includes(seat)) {
    //     //         return prevSelectedSeats.filter(s => s !== seat);
    //     //     } else {
    //     //         if (prevSelectedSeats.length < 6) {
    //     //             return [...prevSelectedSeats, seat];
    //     //         } else {
    //     //             alert('You can only book up to 6 seats once time. || if you book more seats first complete 6 seats booking');
    //     //             return prevSelectedSeats;
    //     //         }
    //     //     }
    //     // });
    // };

    return (
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol xs={1}><a href='/#/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16" className='mt-10px ml-2rem'>
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg></a></CCol>
                    <CCol xs={4}><div className='p-9-5 fw-bolder'>Fri, May 31, 2024 || New Delhi(India) to Sydney(Australia)</div></CCol>
                </CRow>
                <CRow>
                    <CCol xs={5}></CCol>
                    <CCol xs={4}><CFormCheck className='checkbox' id="flexCheckDefault" label="Avoid seats near the fire exit." onChange={checkClick} defaultChecked={check} /></CCol>
                    <CCol xs={3}></CCol>
                </CRow>
                <CRow>
                    <CCol xs={2}></CCol>
                    <CCol xs={2}>
                        <div className='box w-70'>
                            <div className='d-flex justify-content-center fw-bolder'>
                                Legend
                            </div>
                            <ul className='a'>
                                <li>First class</li>
                                <li>Business class</li>
                                <li>Economy class</li>
                            </ul>
                        </div>
                    </CCol>
                    <CCol xs={4}>
                        <CRow>
                            <CCol xs={3}></CCol>
                            <CCol xs={6}>
                                <CRow>
                                    {seats1_3.map(seat => (
                                        <CCol xs={3} className='justify-content-center curson-context-menu'>
                                            <div key={seat} className='d-flex justify-content-center' onClick={() => selectSeat(seat)}>
                                                <div className={`seat first-class d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : '' || selectedSeat.includes(seat) && lockClick ? 'locked' : ''}`}>{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow className='mt-1rem mb-1rem'>
                                    <CCol xs={6} className='boarder-left-2px-solid-red fs-12px c-red'>Exit</CCol>
                                    <CCol xs={6} className='justify-content-center'>
                                        <div className='d-flex justify-content-center box-2'>
                                            <div className="d-flex justify-content-center fs-12px">Restroom <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" className='mt-1 ml-5'>
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            </svg></div>
                                        </div>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    {seats4_7.map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x curson-context-menu'>
                                            <div key={seat} className='d-flex justify-content-center' onClick={() => selectSeat(seat)}>
                                                <div className={`seat business-class d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : ''}`}>{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow className='mt-1rem mb-1rem'>
                                    <CCol xs={6} className='justify-content-center'>
                                        <div className='d-flex justify-content-center box-2'>
                                            <div className="d-flex justify-content-center fs-12px">Restroom <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" className='mt-1 ml-5'>
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            </svg></div>
                                        </div>
                                    </CCol>
                                    <CCol xs={6} className='justify-content-center'>
                                        <div className='d-flex justify-content-center box-2'>
                                            <div className="d-flex justify-content-center fs-12px">Restroom <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" className='mt-1 ml-5'>
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            </svg></div>
                                        </div>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    {seats8_19.map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x curson-context-menu'>
                                            <div key={seat} className={`d-flex justify-content-center ${lockedSeats.includes(seat) ? 'locked' : ''}`} onClick={() => selectSeat(seat)}>
                                                <div className={`seat economy-class d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : ''}`}>{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {seats20.map(seat => (
                                        <CCol xs={3} className='justify-content-center --cui-gutter-x curson-context-menu'>
                                            <div key={seat} className='d-flex justify-content-center' onClick={() => selectSeat(seat)}>
                                                <div className={`seat economy-class d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : ''}`}>{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow className='mt-1rem mb-1rem'>
                                    <CCol xs={6} className='justify-content-center'>
                                        <div className='d-flex justify-content-center box-2'>
                                            <div className="d-flex justify-content-center fs-12px">Restroom <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" className='mt-1 ml-5'>
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            </svg></div>
                                        </div>
                                    </CCol>
                                    <CCol xs={6} className='justify-content-center'>
                                        <div className='d-flex justify-content-center box-2'>
                                            <div className="d-flex justify-content-center fs-12px">Restroom <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" className='mt-1 ml-5'>
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            </svg></div>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CCol>
                            <CCol xs={3}></CCol>
                        </CRow>
                    </CCol>
                    <CCol xs={2}></CCol>
                    <CCol xs={2}><CButton color="primary" size='lg' onClick={handleBookSeats} disabled={selectedSeat.length === 0}>Book</CButton> <br />
                        {/* seat lock */}
                        {/* <CButton color="primary" size='lg' className='mt-5px' disabled={selectedSeat.length === 0} onClick={onLockSeat}>
                        Lock
                    </CButton>
                    <CButton color="secondary" size='lg' className='mt-5px ml-8px' onClick={onUnLockSeat}>
                        UnLock
                    </CButton> */}
                        {/* seat lock */}
                        <CModal
                            size="lg"
                            visible={visible}
                            onClose={() => setVisible(false)}
                            aria-labelledby="OptionalSizesExample2"
                        >
                            <CModalHeader>
                                <CModalTitle id="OptionalSizesExample2">Booking Detail</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                {formData.map((data, index) => (
                                    <CForm className="row g-3">
                                        <CCol xs="auto">
                                            <CFormInput
                                                label="UserName"
                                                id={`userName-${index}`}
                                                value={data.userName}
                                                onChange={(e) => handleInputChange(index, 'userName', e.target.value)}
                                            />
                                        </CCol>
                                        <CCol xs={4}>
                                            <CFormInput
                                                label="Email address"
                                                type="email"
                                                id={`email-${index}`}
                                                value={data.email}
                                                onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                            />
                                        </CCol>
                                        <CCol xs={4}>
                                            <CFormInput
                                                label="age"
                                                type="number"
                                                id={`age-${index}`}
                                                value={data.age}
                                                onChange={(e) => handleInputChange(index, 'age', e.target.value)}
                                            />
                                        </CCol>
                                    </CForm>
                                ))}
                                <CModalFooter>
                                    <CButton color="primary" onClick={handleSubmit}>Submit</CButton>
                                    <CButton color="secondary" onClick={() => setVisible(false)}>Cancel</CButton>
                                </CModalFooter>
                            </CModalBody>
                        </CModal></CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default aircraftOne;