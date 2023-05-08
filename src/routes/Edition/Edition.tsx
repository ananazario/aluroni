import { useEffect } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import Api from "../../shared/http/Api"
import './Edition.css'
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Edition = () => {

    const { id } = useParams()
    const { register, reset, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        Api.get(`/users/${id}`)
            .then((response) => reset(response.data))
    }, [])

    const editData: SubmitHandler<FieldValues> = (data) => {

        Api.put(`/users/${id}`, data)
            .then(() => {
                navigate('/')
            })
    }

    return (
        <section className="container">
        <Outlet />

        <Breadcrumbs />
        <h1 className="mt-4">Edition</h1>

        <form onSubmit={handleSubmit(editData)} className="w-100 mx-auto mt-4">
            <div className='div-form-label'>
                <label htmlFor="date" className="form-label">Data de entrada</label>
                <input
                    type="date" 
                    className="form-control" id="date" 
                    {...register('createdAt')}
                />
            </div>
            <div className='div-form-label'>
                <label htmlFor="nome" className="form-label">Nome</label>
                <input 
                    type="text" 
                    className="form-control" id="nome" 
                    {...register('name')} 
                />
            </div>
            <div className='div-form-label'>
                <label htmlFor="image" className="form-label">Imagem</label>
                <input 
                    type="text" 
                    className="form-control" id="image" 
                    {...register('avatar')} 
                />
            </div>
            <button type="submit" className="btn btn-primary btn-pattern">Submit</button>
        </form>
        </section>
    )
}

export default Edition
