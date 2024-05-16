import React from 'react';
import {
    CCard,
    CCardBody,
    CCol,
    CRow,
} from '@coreui/react'

const aircraftOne = () => {
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
                                    {['1A', '1B', '1C', '1D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat first-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['2A', '2B', '2C', '2D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat first-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['3A', '3B', '3C', '3D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat first-class d-flex justify-content-center">{seat}</div>
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
                                    {['4A', '4B', '4C', '4D', '4E', '4F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat business-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['5A', '5B', '5C', '5D', '5E', '5F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat business-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['6A', '6B', '6C', '6D', '6E', '6F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat business-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['7A', '7B', '7C', '7D', '7E', '7F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat business-class d-flex justify-content-center">{seat}</div>
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
                                    {['8A', '8B', '8C', '8D', '8E', '8F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['9A', '9B', '9C', '9D', '9E', '9F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow className='boarder-left-2px-solid-red boarder-right-2px-solid-red'>
                                    {['10A', '10B', '10C', '10D', '10E', '10F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow className='boarder-left-2px-solid-red boarder-right-2px-solid-red'>
                                    {['11A', '11B', '11C', '11D', '11E', '11F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['12A', '12B', '12C', '12D', '12E', '12F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['13A', '13B', '13C', '13D', '13E', '13F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['14A', '14B', '14C', '14D', '14E', '14F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['15A', '15B', '15C', '15D', '15E', '15F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['16A', '16B', '16C', '16D', '16E', '16F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['17A', '17B', '17C', '17D', '17E', '17F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['18A', '18B', '18C', '18D', '18E', '18F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['19A', '19B', '19C', '19D', '19E', '19F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['20A', '20B', '20C', '20D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
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
                            {/* <CCol xs={3}></CCol> */}
                            <CCol xs={3}></CCol>
                        </CRow>
                    </CCol>
                    <CCol xs={4}></CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default aircraftOne;
