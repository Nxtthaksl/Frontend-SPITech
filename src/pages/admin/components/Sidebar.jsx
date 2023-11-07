import React from 'react'
import { FaTachometerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Menu({ onClick }) {

    function handleClick(menu) {
        onClick(menu)
    }
    return (
        <aside className="main-sidebar sidebar-light-primary elevation-4">
            {/* Brand Logo */}
            <a href="#" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
                <span className="brand-text font-weight-light">SPITech</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    {/* <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div> */}
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i class="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                        <li className="nav-item menu-open">
                            <a href="#" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                {/* <FaTachometerAlt className='icon-sidebar' /> */}
                                <p>
                                    การจัดการข้อมูลพื้นฐาน
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview active">
                                <li className="nav-item">
                                    {/* <a href='#' onClick={() => handleClick("Nametitle")} className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>การจัดการข้อมูลคำนำหน้าชื่อ</p>
                                            </a> */}
                                    <Link to="/admin/nametitle" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>การจัดการข้อมูลคำนำหน้าชื่อ</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/course" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>การจัดการข้อมูลหลักสูตร</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                            <Link to="/admin/faculty" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>การจัดการข้อมูลคณะ</p>
                                            </Link>
                                        </li>
                                <li className="nav-item">
                                            <Link to="/admin/department" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>การจัดการข้อมูลภาควิชา</p>
                                            </Link>
                                        </li>
                                <li className="nav-item">
                                    <Link to="/admin/major" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>การจัดการข้อมูลสาขาวิชา</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/test_category" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>การจัดการข้อมูลประเภทการสอบ</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/project_status" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>การจัดการข้อมูลสถานะโครงงาน</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/room" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>การจัดการข้อมูลห้องสอบ</p>
                                    </Link>
                                </li>
                            </ul>
                            <li className="nav-item">
                                <Link to="staff" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>การจัดการข้อมูลเจ้าหน้าที่</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="teacher" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>การจัดการข้อมูลอาจารย์</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="student" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>การจัดการข้อมูลนักศึกษา</p>
                                </Link>
                            </li>

                        </li>
                        {/* <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    ข้อมูลโครงงานพิเศษ
                                </p>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    การจัดการข้อมูลข่าวสาร
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    การจัดการออกรายงาน
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}
