import React, { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
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

const User = () => {

  const [visible, setVisible] = useState(false);
  const [newUserRole, setNewUserRole] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const object = [
    {
      userName: "abc",
      email: "abc@gmail.com",
      role: "admin",
    }
  ]

  const onDropdownSelected = (e) => {
    // console.log("THE VAL", e);
    setNewUserRole(e)

  }

  const onChange = (event) => {
    // console.log("event", event);
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
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader><CButton color="primary" onClick={() => setVisible(!visible)}>+ Add User</CButton></CCardHeader>
            {/* Model start */}
            <CModal
              size="lg"
              visible={visible}
              onClose={() => setVisible(false)}
              aria-labelledby="OptionalSizesExample2"
            >
              <CModalHeader>
                <CModalTitle id="OptionalSizesExample2">Add User</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm className="row g-3">
                  <CCol xs="auto">
                    <CFormInput
                      id="userName"
                      label="UserName"
                      name="userName"
                      placeholder="Devid"
                      onChange={onChange}
                    // text="Must be 8-20 characters long."
                    // aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CCol>
                  <CCol xs={4}>
                    <CFormInput
                      id="email"
                      label="Email address"
                      name='email'
                      placeholder="name@example.com"
                      onChange={onChange}
                    // text="Must be 8-20 characters long."
                    // aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CCol>
                  <CCol xs="auto" className="mt-47px">
                    <CDropdown>
                      <CDropdownToggle color="secondary">{newUserRole == "" ? "Select Role" : newUserRole}</CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={() => onDropdownSelected("Admin")} value="Admin">Admin</CDropdownItem>
                        <CDropdownItem onClick={() => onDropdownSelected("Staff")} value="Staff">Staff</CDropdownItem>
                        <CDropdownItem onClick={() => onDropdownSelected("User")} value="User">User</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCol>
                  <CCol xs="auto" className="mt-47px">
                    <CButton color="primary" onClick={() => setVisible(!visible)}>Submit</CButton>
                  </CCol>
                </CForm>
              </CModalBody>
            </CModal>
            {/* Model end */}
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
                    <CTableHeaderCell className="bg-body-tertiary">Role</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {object.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.userName}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.email}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.role}</div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CIcon icon={cilDelete} className='color-red' />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default User
