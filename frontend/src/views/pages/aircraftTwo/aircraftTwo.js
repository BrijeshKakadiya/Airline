// import React from 'react';
// // import './SeatingChart.css'; // Import custom CSS for additional styling

// const aircraftTwo = () => {
//   const generateSeats = (rows, cols, className) => {
//     const seatArray = [];
//     for (let row = 1; row <= rows; row++) {
//       const seatRow = [];
//       for (let col = 1; col <= cols; col++) {
//         seatRow.push(
//           <div key={`${row}-${col}`} className={`seat ${className}`}>
//             {row}{String.fromCharCode(64 + col)}
//           </div>
//         );
//       }
//       seatArray.push(
//         <div key={row} className="row justify-content-center mb-2">
//           {seatRow}
//         </div>
//       );
//     }
//     return seatArray;
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Aircraft 2:</h2>
//       <div className="seating-chart">
//         {/* First Class Section */}
//         <div className="section">
//           {generateSeats(4, 4, 'first-class')}
//         </div>

//         {/* Business Class Section */}
//         <div className="section">
//           {generateSeats(10, 6, 'business-class')}
//         </div>

//         {/* Economy Class Section */}
//         <div className="section">
//           {generateSeats(19, 6, 'economy-class')}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default aircraftTwo;

import React from 'react';
import {
    CCard,
    CCardBody,
    CCol,
    CRow,
    CAvatar,
} from '@coreui/react'
import spoonFork from '../../../assets/images/avatars/spoon-fork.png';

const aircraftTwo = () => {
    return (
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol xs={1}><a href='/#/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16" className='mt-10px ml-2rem'>
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg></a></CCol>
                    <CCol xs={4}><div className='p-9-5 fw-bolder'>Fri, May 31, 2024 || London - Heathrow Apt to Washington-Dulles Apt </div></CCol>
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
                                    {['1A', '1B', '1C', '1D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat-2 first-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['2A', '2B', '2C', '2D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat-2 first-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['3A', '3B', '3C', '3D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat-2 first-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['4A', '4B', '4C', '4D'].map(seat => (
                                        <CCol xs={3} className='justify-content-center'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat-2 first-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    <CCol xs={12} className='fs-12px'>
                                        <div className='d-flex align-items-center'>
                                            <hr className='w-28' /><span className='p-6px'> DELTA COMFORT+ </span><hr className='w-28'/>
                                        </div>
                                    </CCol>
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
                                <CRow>
                                    <CCol xs={12} className='fs-10px d-flex justify-content-center'>MAIN CABIN</CCol>
                                </CRow>
                                <CRow>
                                    {['8A', '8B', '8C', '8D', '8E', '8F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat business-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['9A', '9B', '9C', '9D', '9E', '9F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat business-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow className='mb-1rem'>
                                    {['10A', '10B', '10C', '10D', '10E', '10F'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat business-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
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
                                    {['20A', '20B', '20C', '20D', '20E', '20f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['21A', '21B', '21C', '21D', '21E', '21f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['22A', '22B', '22C', '22D', '22E', '22f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['23A', '23B', '23C', '23D', '23E', '23f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['24A', '24B', '24C', '24D', '24E', '24f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['25A', '25B', '25C', '25D', '25E', '25f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['26A', '26B', '26C', '26D', '26E', '26f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    {['27A', '27B', '27C', '27D', '27E', '27f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
                                            </div>
                                        </CCol>
                                    ))}
                                </CRow>
                                <CRow>
                                    <CCol xs={6}>
                                        <div className='h-100 box-3'></div>
                                    </CCol>
                                    {['28D', '28E', '28f'].map(seat => (
                                        <CCol xs={2} className='justify-content-center --cui-gutter-x'>
                                            <div key={seat} className='d-flex justify-content-center'>
                                                <div className="seat economy-class d-flex justify-content-center">{seat}</div>
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
                    <CCol xs={4}></CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default aircraftTwo;
