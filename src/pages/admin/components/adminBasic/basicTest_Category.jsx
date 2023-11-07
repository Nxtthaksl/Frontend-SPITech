import React, { useState, useEffect, useRef } from 'react'
import axios from '../../../../libs/axios'
import { useForm } from "react-hook-form";

export default function basicTest_Category() {
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
                formdata = { ...formdata, id_test_category: editMode.id_test_category }
                const res = await axios.put(`/test_category`, formdata)
                const data = await res.data
                if (data) {
                    // alert("เพิ่มข้อมูลสำเร็จ")
                    fetchData()
                    reset({
                        test_category_title: "",
                    })
                    modalRef.current.click()
                    setLoading(false)
                }
                return
            }

            function handleEdit(id) {
                console.log(id)
                const dataForEdit = data.find((item) => item.id_test_category === id)

                setEditMode(dataForEdit)
                setValue("test_category_title", dataForEdit.test_category_title)
                openModal.current.click()
            }


            const res = await axios.post("/test_category", formdata)
            const data = await res.data
            if (data) {
                // alert("เพิ่มข้อมูลสำเร็จ")
                fetchData()
                reset({
                    test_category_title: "",
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
            const res = await axios.get("/test_category")
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
            {JSON.stringify(data)}
            {loading && "Loading..."}
            <br />
            <div className="container-fluid">
                <h1 className="card-title"><b>การจัดการข้อมูลประเภทการสอบ</b></h1>
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
                                    <th>ประเภทการสอบ</th>
                                    <th>ตัวเลือก</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.id_test_category}</td>
                                        <td>{row.test_category_name}</td>
                                        <td><button type="button" className="btn btn-outline-warning" onClick={() => handleEdit(row.id_test_category)}>แก้ไข</button>
                                            <button type="button" className="btn btn-outline-danger">ลบ</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
