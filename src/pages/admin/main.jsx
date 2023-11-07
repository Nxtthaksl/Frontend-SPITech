import React, { useState, useEffect } from 'react'
import SideMenu from './components/Sidebar'
import Nametitle from './components/adminBasic/basicNametitle'
import Course from './components/adminBasic/basicCourse'
import Faculty from './components/adminBasic/basicFaculty'
import Department from './components/adminBasic/basicDepartment'
import Major from './components/adminBasic/basicMajor'
import Test_Category from './components/adminBasic/basicTest_Category'
import Project_Status from './components/adminBasic/basicProject_Status'
import Room from './components/adminBasic/basicRoom'

export default function mainAdmin() {
  const [menu, setMenu] = useState("nametitle")
  
  function handleClick(menu) {
    console.log(menu)
    setMenu(menu)
  }

  return (
    <div>
      <div className="row">
          {menu === "nametitle" && <Nametitle />}
          {menu === "course" && <Course />}
          {menu === "faculty" && <Faculty />}
          {menu === "department" && <Department />}
          {menu === "major" && <Major />}
          {menu === "test_category" && <Test_Category />}
          {menu === "project_status" && <Project_Status />}
          {menu === "room" && <Room />}
      </div>
    </div>
  )
}
