import React, { useState, useEffect, useRef } from 'react'
import axios from '../../../../libs/axios'
import { useForm } from "react-hook-form";

export default function basicCourse() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  let x = 10;
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [editMode, setEditMode] = useState(null)
  const modalRef = useRef()
  const openModal = useRef()

  async function onSubmit(formdata) {
    try {
      console.log(formdata)
      setLoading(true)

      if (editMode) {
        formdata = { ...formdata, course_code: editMode.course_code }
        const res = await axios.put(`/course`, formdata)
        const data = await res.data
        if (data) {
          // alert("เพิ่มข้อมูลสำเร็จ")
          fetchData()
          reset({
            course_name: "",
          })
          modalRef.current.click()
          setLoading(false)
        }
        return
      }

      function handleEdit(id) {
        console.log(id)
        const dataForEdit = data.find((item) => item.course_code === id)

        setEditMode(dataForEdit)
        setValue("course_name", dataForEdit.course_name)
        openModal.current.click()
      }


      const res = await axios.post("/name_title", formdata)
      const data = await res.data
      if (data) {
        // alert("เพิ่มข้อมูลสำเร็จ")
        fetchData()
        reset({
          course_name: "",
        })
        modalRef.current.click()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get("/course")
      const data = await res.data
      setData(data)
      setLoading(false)
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="content">
      {/* {JSON.stringify(data)} */}
      {/* {loading && "กำลังโหลดข้อมูล"} */}
      <br />
      <div className="container-fluid">
        <h1 className="card-title"><b>การจัดการข้อมูลหลักสูตร</b></h1>
        <br />
        <div className="card">
          <div className="card-header">
            {/* <h3 className="card-title">Bordered Table</h3> */}
            <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={openModal}>+ เพิ่ม</button>
          </div>
          {/* /.card-header */}
          <div className="card-body  text-center">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: 10 }}>รหัสหลักสูตร</th>
                  <th>ชื่อหลักสูตร</th>
                  <th>ตัวเลือก</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.course_code}</td>
                    <td>{row.course_name}</td>
                    <td><button type="button" className="btn btn-outline-warning" onClick={() => handleEdit(row.id_name_title)}>แก้ไข</button>
                      <button type="button" className="btn btn-outline-danger">ลบ</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* /.card */}
      </div>
    </section>

  )
}
