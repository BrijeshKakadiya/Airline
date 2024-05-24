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
    CFormCheck,
    CTooltip,
    CLink,
    CAvatar,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
} from '@coreui/react'
import spoonFork from '../../../assets/images/avatars/spoon-fork.png';
import { toast } from 'react-toastify';
import { AppHeader } from '../../../components'

let arr = [];
const lockedSeats = []; //Fire seat

const aircraftTwo = () => {

    const [selectedSeat, setSelectedSeat] = useState([]);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState([]);
    const [check, setCheck] = useState(false);
    const [lockClick, setLockClick] = useState(false);
    const [newSeatClass, setNewSeatClass] = useState("");
    const [passengerCount, setPassengerCount] = useState(2);


    const seats1_4 = ['1A', '1B', '1C', '1D', '2A', '2B', '2C', '2D', '3A', '3B', '3C', '3D', '4A', '4B', '4C', '4D'];

    const seats5_7 = ['5A', '5B', '5C', '5D', '5E', '5F', '6A', '6B', '6C', '6D', '6E', '6F', '7A', '7B', '7C', '7D', '7E', '7F'];

    const seats8_10 = ['8A', '8B', '8C', '8D', '8E', '8F', '9A', '9B', '9C', '9D', '9E', '9F', '10A', '10B', '10C', '10D', '10E', '10F'];

    const seats11_27 = ['11A', '11B', '11C', '11D', '11E', '11F', '12A', '12B', '12C', '12D', '12E', '12F', '13A', '13B', '13C', '13D', '13E', '13F', '14A', '14B', '14C', '14D', '14E', '14F', '15A', '15B', '15C', '15D', '15E', '15F', '16A', '16B', '16C', '16D', '16E', '16F', '17A', '17B', '17C', '17D', '17E', '17F', '18A', '18B', '18C', '18D', '18E', '18F', '19A', '19B', '19C', '19D', '19E', '19F', '20A', '20B', '20C', '20D', '20E', '20F', '21A', '21B', '21C', '21D', '21E', '21F', '22A', '22B', '22C', '22D', '22E', '22F', '23A', '23B', '23C', '23D', '23E', '23F', '24A', '24B', '24C', '24D', '24E', '24F', '25A', '25B', '25C', '25D', '25E', '25F', '26A', '26B', '26C', '26D', '26E', '26F', '27A', '27B', '27C', '27D', '27E', '27F']

    const checkClick = () => {
        setCheck(true);
        lockedSeats.push('16A', '16B', '16C', '16D', '16E', '16F');
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

    const selectSeat = (seat) => {
        arr.push(seat)
        console.log("seat", seat);
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




    return (<>
        <AppHeader />
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol xs={1}><a href='/#/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16" className='mt-10px ml-2rem'>
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg></a></CCol>
                    <CCol xs={4}><div className='p-9-5 fw-bolder'>Fri, May 31, 2024 || London - Heathrow Apt to Washington-Dulles Apt </div></CCol>
                </CRow>
                <CRow>
                    <CCol xs={6}></CCol>
                    <CCol xs={4}><CFormCheck className='checkbox' id="flexCheckDefault" label="Avoid seats near the fire exit." onChange={checkClick} defaultChecked={check} /></CCol>
                    <CCol xs={2}></CCol>
                </CRow>
                <CRow>
                    <CCol xs={2}></CCol>
                    <CCol xs={3}>
                        {/* <div className='box w-70'>
                            <div className='d-flex justify-content-center fw-bolder'>
                                Legend
                            </div>
                            <ul className='a'>
                                <li>First class</li>
                                <li>Business class</li>
                                <li>Economy class</li>
                            </ul>
                        </div> */}
                        <CRow className='mt-10rem'>
                            <div>Let's book the seats and enjoy travel smoothly!</div>
                        </CRow>
                        <CRow>
                            <CRow>
                                <CDropdown>
                                    <CDropdownToggle color="secondary">{newSeatClass == "" ? "Select Class" : newSeatClass}</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem onClick={() => setNewSeatClass("First Class")} value="First Class">First Class</CDropdownItem>
                                        <CDropdownItem onClick={() => setNewSeatClass("Business Class")} value="Business Class">Business Class</CDropdownItem>
                                        <CDropdownItem onClick={() => setNewSeatClass("Economy Class")} value="Economy Class">Economy Class</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CRow>
                            <CRow className='mt-1rem'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <label style={{ marginRight: 10 }}>
                                        Passenger
                                    </label>
                                    <input
                                        type="number"
                                        value={passengerCount}
                                        onChange={(e) => setPassengerCount(Number(e.target.value))}
                                        style={{ textAlign: 'center', width: 50 }}
                                        max={6}
                                    />
                                </div>
                                <div className='mt-12px text-bold'>
                                    Do you want to book our dynamic allocation seats? <br />
                                    To get best in class experience
                                </div>
                                <CRow>
                                    <CCol xs={12}>
                                        <CButton color="secondary" size='lg' className='mt-5px ml-8px'>
                                            Auto allocation
                                        </CButton>
                                    </CCol>
                                </CRow>
                            </CRow>
                        </CRow>
                    </CCol>
                    <CCol xs={4}>
                        <CRow>
                            <CCol xs={3}></CCol>
                            <CCol xs={6}>
                                <CRow>
                                    <CCol xs={5} className='justify-content-center box-3 border-top-left-radius-30px'>
                                        <div className="d-flex justify-content-center p-14px mt-9px"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" className='mt-1 ml-5'>
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                        </svg></div>
                                    </CCol>
                                    <CCol xs={2}></CCol>
                                    <CCol xs={5} className='justify-content-center box-3 border-top-right-radius-30px'>
                                        <div className="d-flex justify-content-center p-14px"> <CAvatar src={spoonFork} size="md" /></div>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs={5} className='pl-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                        </svg><span className='fs-12px'>Exit</span>
                                    </CCol>
                                    <CCol xs={2}></CCol>
                                    <CCol xs={5} className='d-flex justify-content-end pr-0 pt-6px'>
                                        <span className='fs-12px'>Exit</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </CCol>
                                </CRow>
                                <CRow className='p-10-0'>
                                    <CCol xs={5} className='justify-content-center box-3'>
                                        <div className="d-flex justify-content-center fs-12px">CLOSET</div>
                                    </CCol>
                                    <CCol xs={2}></CCol>
                                    <CCol xs={5} className='justify-content-center box-3'>
                                        <div className="d-flex justify-content-center fs-12px">CLOSET</div>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs={12} className='fs-12px d-flex justify-content-center'>(First class)</CCol>
                                </CRow>
                                <CRow>
                                    {seats1_4.map(seat => (
                                        <CCol xs={3} className='justify-content-center curson-context-menu'>
                                            <div key={seat} className='d-flex justify-content-center' onClick={() => selectSeat(seat)}>
                                                <div className={`seat-2 first-class1 d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : '' || selectedSeat.includes(seat) && lockClick ? 'locked' : ''}`}>
                                                    <CTooltip content="£2257">
                                                        <CLink className='text-decoration-none text-white'>{seat}</CLink>
                                                    </CTooltip></div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    <CCol xs={12} className='fs-12px'>
                                        <div className='d-flex align-items-center'>
                                            <hr className='w-28' /><span className='p-6px'> DELTA COMFORT+ </span><hr className='w-28' />
                                        </div>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    {seats5_7.map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x curson-context-menu'>
                                            <div key={seat} className='d-flex justify-content-center' onClick={() => selectSeat(seat)}>
                                                <div className={`seat business-class1 d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : '' || selectedSeat.includes(seat) && lockClick ? 'locked' : ''}`}>
                                                    <CTooltip content="£1840">
                                                        <CLink className='text-decoration-none text-white'>{seat}</CLink>
                                                    </CTooltip></div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    <CCol xs={12} className='fs-12px d-flex justify-content-center'>MAIN CABIN (Business class)</CCol>
                                </CRow>
                                <CRow className='mb-1rem'>
                                    {seats8_10.map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x curson-context-menu'>
                                            <div key={seat} className='d-flex justify-content-center' onClick={() => selectSeat(seat)}>
                                                <div className={`seat business-class1 d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : '' || selectedSeat.includes(seat) && lockClick ? 'locked' : ''}`}>
                                                    <CTooltip content="£1840">
                                                        <CLink className='text-decoration-none text-white'>{seat}</CLink>
                                                    </CTooltip></div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    <CCol xs={12} className='fs-12px d-flex justify-content-center'>(Economy class)</CCol>
                                </CRow>
                                <CRow>
                                    {seats11_27.map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x curson-context-menu'>
                                            <div key={seat} className={`d-flex justify-content-center ${lockedSeats.includes(seat) ? 'locked' : ''}`} onClick={() => selectSeat(seat)}>
                                                <div className={`seat economy-class1 d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : '' || selectedSeat.includes(seat) && lockClick ? 'locked' : ''}`}>
                                                    <CTooltip content="£1610">
                                                        <CLink className='text-decoration-none text-white'>{seat}</CLink>
                                                    </CTooltip></div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    <CCol xs={6}>
                                        <div className='h-100 box-3'></div>
                                    </CCol>
                                    {['28D', '28E', '28f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x curson-context-menu'>
                                            <div key={seat} className='d-flex justify-content-center' onClick={() => selectSeat(seat)}>
                                                <div className={`seat economy-class1 d-flex justify-content-center ${selectedSeat.includes(seat) ? 'selected' : '' || selectedSeat.includes(seat) && lockClick ? 'locked' : ''}`}>
                                                    <CTooltip content="£1610">
                                                        <CLink className='text-decoration-none text-white'>{seat}</CLink>
                                                    </CTooltip></div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    <CCol xs={6}>
                                        <div className='box-3 mt-5px'></div>
                                    </CCol>
                                    <CCol xs={6}><div className='box-3 mt-5px'></div></CCol>
                                </CRow>
                                <CRow className='mt-5px'>
                                    <CCol xs={5} className='pl-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                        </svg><span className='fs-12px'>Exit</span>
                                    </CCol>
                                    <CCol xs={2}></CCol>
                                    <CCol xs={5} className='d-flex justify-content-end pr-0 pt-6px'>
                                        <span className='fs-12px'>Exit</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs={5} className='justify-content-center box-3 border-bottom-left-radius-30px'>
                                        <div className="d-flex justify-content-center p-14px"> <CAvatar src={spoonFork} size="md" /></div>
                                    </CCol>
                                    <CCol xs={2}></CCol>
                                    <CCol xs={5} className='justify-content-center box-3 border-bottom-right-radius-30px'>
                                        <div className="d-flex justify-content-center p-14px mt-9px"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" className='mt-1 ml-5'>
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                        </svg></div>
                                    </CCol>
                                </CRow>
                            </CCol>
                            {/* <CCol xs={3}></CCol> */}
                            <CCol xs={3}></CCol>
                        </CRow>
                    </CCol>
                    <CCol xs={2}></CCol>
                    <CCol xs={2}>
                        <CButton color="primary" size='lg' onClick={handleBookSeats} disabled={selectedSeat.length === 0}>Book</CButton> <br />
                        {/* seat lock */}
                        {/* <CButton color="primary" size='lg' className='mt-5px' disabled={selectedSeat.length === 0} onClick={onLockSeat}>
                            Lock
                        </CButton>
                        <CButton color="secondary" size='lg' className='mt-5px ml-8px' disabled={selectedSeat.length === 0} onClick={onUnLockSeat}>
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
                                    <CButton color="primary" onClick={handleSubmit} href='/#/bookings'>Submit</CButton>
                                    <CButton color="secondary" onClick={() => setVisible(false)}>Cancel</CButton>
                                </CModalFooter>
                            </CModalBody>
                        </CModal>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    </>
    );
};

export default aircraftTwo;
