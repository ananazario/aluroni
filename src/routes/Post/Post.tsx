import Modal from '../../components/Modal/Modal'
import Api from '../../shared/http/Api'
import { useRef, useState } from "react"
import { useCloseElement } from '../../shared/hooks/useCloseElement'
import './Post.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const Post = () => {

    const modal = useRef(null)

    const [date, setDate] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [isClosed, setIsClosed] = useCloseElement(false, modal)
    const [imageForPath, setImageForPath] = useState<string>('')
    const [imageForUpload, setImageForUpload] = useState<File | null | string>(null)

    const uploadImage = () => {
        const formData = new FormData();

        if (imageForUpload) {
            formData.append('avatar', imageForUpload)
        } else {
            formData.append('avatar', imageForPath)
        }

        Api.request({
            url: 'new-post',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        }).then((response) => 
            console.log(response)
        ).catch((error) => console.log(error))
    }

    const submeterForm = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        Api.post('/users', {
            avatar: uploadImage,
            createdAt: date,
            name: name
        }).then(() => {
            setDate('')
            setName('')
            setImageForPath('')
            setImageForUpload(null)
        }).catch((error) => {
            alert(error)
        })
    }

    const selecionarArquivos = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if(evento.target.files?.length) {
            setImageForUpload(evento.target.files[0])
        } else {
            setImageForUpload(null)     
        }
    }

    return (
        <div className='container'>
            <Breadcrumbs />
            <h1 className="mt-4">Post</h1>

            <form onSubmit={submeterForm} className="mt-4">
                <div className='div-form-label'>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Data de entrada
                    </label>
                    <input value={date} 
                        onChange={({target}) => setDate(target.value)} 
                        type="date" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                    />
                </div>
                <div className='div-form-label'>
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Nome
                    </label>
                    <input value={name} 
                        onChange={({target}) => setName(target.value)} 
                        type="text" 
                        className="form-control" 
                        id="exampleInputPassword1"
                    />
                </div>
                <div className='div-form-label'>
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Passe o caminho da imagem
                    </label>
                    <input value={imageForPath} 
                        onChange={({target}) => setImageForPath(target.value)} 
                        type="text" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                    />
                </div>
                <div className='div-form-label'>
                    <label htmlFor="formFile" className="form-label">
                        Ou baixe do seu repositório
                    </label>
                    <input
                        type="file" 
                        onChange={selecionarArquivos} 
                        className="form-control" 
                        id="formFile" 
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-pattern" onClick={() => setIsClosed(!isClosed)}>Submit</button>
            </form>
            <div className={`modal-container ${isClosed ? 'active' : ''}`}>
                <Modal
                    ref={modal}
                    isClosed={isClosed}
                    setIsClosed={setIsClosed}
                />
            </div>
        </div>
    )
}

export default Post