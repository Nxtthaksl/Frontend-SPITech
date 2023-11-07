import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/login'
import AdminLayout from './pages/admin'
import AdminMain from './pages/admin/main'

import BasicNametitle from './pages/admin/components/adminBasic/basicNametitle'
import BasicCourse from './pages/admin/components/adminBasic/basicCourse'
import BasicFaculty from './pages/admin/components/adminBasic/basicFaculty'
import BasicDepartment from './pages/admin/components/adminBasic/basicDepartment'
import BasicMajor from './pages/admin/components/adminBasic/basicMajor'
import BasicTest_Category from './pages/admin/components/adminBasic/basicTest_Category'
import BasicProject_Status from './pages/admin/components/adminBasic/basicProject_Status'
import BasicRoom from './pages/admin/components/adminBasic/basicRoom'

import AdminStaff from './pages/admin/components/adminStaff'
import AdminTeacher from './pages/admin/components/adminTeacher'
import AdminStudent from './pages/admin/components/adminStudent'
import AdminProject from './pages/admin/components/adminProject'
import AdminNews from './pages/admin/components/adminNews'
import AdminDocument from './pages/admin/components/adminDocument'

import StaffPage from './pages/staff'
import TeacherPage from './pages/teacher'
import StudentPage from './pages/student'
import { BrowserRouter as Router, Route, Outlet, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="main" element={<AdminMain />} />
          <Route path="nametitle" element={<BasicNametitle />} />
          <Route path="course" element={<BasicCourse />} />
          <Route path="faculty" element={<BasicFaculty />} />
          <Route path="department" element={<BasicDepartment />} />
          <Route path="major" element={<BasicMajor />} />
          <Route path="test_category" element={<BasicTest_Category />} />
          <Route path="project_status" element={<BasicProject_Status />} />
          <Route path="room" element={<BasicRoom />} />
          <Route path="staff" element={<AdminStaff />} />
          <Route path="teacher" element={<AdminTeacher />} />
          <Route path="student" element={<AdminStudent />} />
          <Route path="project" element={<AdminProject />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="document" element={<AdminDocument />} />
        </Route>


        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
