import React, { useState, useEffect, useRef } from 'react'
import axios from '../../../../libs/axios'
import { useForm } from "react-hook-form";

export default function basicNametitle() {
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
        formdata = { ...formdata, id_name_title: editMode.id_name_title }
        const res = await axios.put(`/name_title`, formdata)
        const data = await res.data
        if (data) {
          // alert("เพิ่มข้อมูลสำเร็จ")
          fetchData()
          reset({
            name_title_th: "",
            name_title_en: "",
          })
          modalRef.current.click()
          setLoading(false)
        }
        return
      }

      function handleEdit(id) {
        console.log(id)
        const dataForEdit = data.find((item) => item.id_name_title === id)

        setEditMode(dataForEdit)
        setValue("name_title_th", dataForEdit.name_title_th)
        setValue("name_title_en", dataForEdit.name_title_en)
        openModal.current.click()
      }


      const res = await axios.post("/name_title", formdata)
      const data = await res.data
      if (data) {
        // alert("เพิ่มข้อมูลสำเร็จ")
        fetchData()
        reset({
          name_title_th: "",
          name_title_en: "",
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
      const res = await axios.get("/name_title")
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
      {/* {loading && "Loading..."} */}
      <br />
      <div className="container-fluid">
        <h1 className="card-title"><b>การจัดการข้อมูลคำนำหน้าชื่อ</b></h1>
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
                  <th style={{ width: 10 }}>ลำดับ</th>
                  <th>คำนำหน้าชื่อภาษาไทย</th>
                  <th>คำนำหน้าชื่อภาษาอังกฤษ</th>
                  <th>ตัวเลือก</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id_name_title}</td>
                    <td>{row.name_title_th}</td>
                    <td>{row.name_title_en}</td>
                    <td><button type="button" className="btn btn-outline-warning" onClick={() => handleEdit(row.id_name_title)}>แก้ไข</button>
                      <button type="button" className="btn btn-outline-danger">ลบ</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
          {/* /.card-body */}
          {/* <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><a className="page-link" href="#">«</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">»</a></li>
                </ul>
              </div> */}
        </div>
        {/* /.card */}
      </div>
    </section>


  )
}
