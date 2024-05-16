import React from 'react'
import Airindialogo from '../../assets/images/avatars/AirIndia.png'
import Iberia from '../../assets/images/avatars/Iberia.png'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'

const Dashboard = () => {

  return (
    <>
      <CCard className="mb-4 margin-1-12rem">
        <CCardBody className='pt-0px'>
          <div className='p-9-5 fw-bolder'>Fri, May 31, 2024</div>
          <CRow>
            <CCol xs={2} className='d-flex'>
              <div>
                <CAvatar src={Airindialogo} size="md" />
              </div>
              <span className='fs-14px fw-bold ml-8px'>
                Air India<br /> <span className='fs-14px fw-lighter'>AI 302</span>
              </span>
            </CCol>
            <CCol xs={2}>
              <span className='fs-16px fw-bolder ml-28px'>
                14:20 <br /> <span className='fs-14px fw-normal ml-24px'>New Delhi</span>
              </span>
            </CCol>
            <CCol xs={2} className='d-flex'>
              <span className='fs-14px ml-10px'>
                12 h 20 m <br /> <hr className='m-0 hr-color' /><span className='fs-12px fw-normal ml-6px'>Non stop</span>
              </span>
            </CCol>
            <CCol xs={2}>
              <span className='fs-16px fw-bolder'>
                07:10 <br /> <span className='fs-14px fw-normal'>Sydney</span>
              </span>
            </CCol>
            <CCol xs={2}>
              <span className='fs-16px fw-bolder'>
                £618.00 <br /> <span className='fs-14px fw-normal'>per adult</span>
              </span>
            </CCol>
            <CCol xs={2} className='mt-8px'>
              <span className='fs-12px'>
                <a href="/#/aircraftOne" className='text-decoration-none c-black'>View Flight Details -{'>'}</a>
              </span>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4 margin-1-12rem">
        <CCardBody className='pt-0px'>
          <div className='p-9-5 fw-bolder'>Fri, May 31, 2024</div>
          <CRow>
            <CCol xs={2} className='d-flex'>
              <div>
                <CAvatar src={Iberia} size="md" />
              </div>
              <span className='fs-14px fw-bold ml-8px'>
                Iberia<br /> <span className='fs-14px fw-lighter'>IB 7405</span>
              </span>
            </CCol>
            <CCol xs={2}>
              <span className='fs-16px fw-bolder ml-28px'>
                12:35 <br /> <span className='fs-14px fw-normal ml-24px'>London - Heathrow Apt</span>
              </span>
            </CCol>
            <CCol xs={2} className='d-flex'>
              <span className='fs-14px ml-10px'>
                08 h 10 m <br /> <hr className='m-0 hr-color' /><span className='fs-12px fw-normal ml-6px'>Non stop</span>
              </span>
            </CCol>
            <CCol xs={2}>
              <span className='fs-16px fw-bolder'>
                15:35 <br /> <span className='fs-14px fw-normal'>Washington-Dulles Apt</span>
              </span>
            </CCol>
            <CCol xs={2}>
              <span className='fs-16px fw-bolder'>
                £2257.00 <br /> <span className='fs-14px fw-normal'>per adult</span>
              </span>
            </CCol>
            <CCol xs={2} className='mt-8px'>

              <span className='fs-12px cursor-pointer'>
                <a href="/#/aircraftTwo" className='text-decoration-none c-black'>View Flight Details -{'>'}</a>
              </span>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
