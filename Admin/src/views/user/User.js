import React, { useEffect, useState } from 'react'

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
import { registerUser, getAllUser, deleteUserById } from '../../../provider/services/user.service'
import { toast } from 'react-toastify'

const User = () => {

  const [visible, setVisible] = useState(false);
  const [newUserRole, setNewUserRole] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [allUserData, setAllUserData] = useState([]);
  const [visibleQuestion, setVisibleQuestion] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllUser();
      setAllUserData(data.data);
    };

    fetchData();
  }, []);

  const onDropdownSelected = (e) => {
    setNewUserRole(e)
  }

  const onSubmitForm = () => {
    let obj = {
      userName: userName,
      email: email,
      role: newUserRole,
    };
    registerUser(obj);
    getAllUserData();
    setVisible(!visible);
    setNewUserRole("");
    setUserName("");
    setEmail("");
    toast.success("Addedd Succeccfully!")
  };

  const getAllUserData = async () => {
    let data = await getAllUser();
    setAllUserData(data.data);
  }

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


  const handleDelete = (id) => {
    deleteUserById(id);
    // getAllUserData();
    // setBooking(newTickets);
    setVisibleQuestion(false);
    toast.success("Person Remove Succeccfully!")
  };

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <CRow>
                <CCol xs={2}>
                  <CButton className="curson-context-menu text-bold">Users</CButton>
                </CCol>
                <CCol xs={8}></CCol>
                <CCol xs={2} className='d-flex justify-content-end'>
                  <CButton color="primary" onClick={() => setVisible(!visible)}>+ Add User</CButton>
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
                    <CButton color="primary" onClick={onSubmitForm}>Submit</CButton>
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
                  {allUserData && allUserData.map((item, index) => {
                    return (
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

export default User
