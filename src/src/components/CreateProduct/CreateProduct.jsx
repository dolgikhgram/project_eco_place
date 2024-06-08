import {Button, MenuItem, Select, TextField} from "@mui/material"
import {useEffect, useRef, useState} from "react"

const CreateProduct = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/category', {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            });
    }, [])


    const formRef = useRef(null)


    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current);
        const name = formData.get('name')
        const category_id = formData.get('category_id')
        const price = formData.get('price')
        const photo = formData.get('photo')
        const seller_id = formData.get('seller_id')


        fetch('http://localhost:8080/api/product', {
            method: 'POST',
            body: JSON.stringify({
                name,
                category_id,
                price,
                photo,
                seller_id
            }),
            headers: new Headers({'content-type': 'application/json'}),
        }).then((res) => {
            //status - 200 OK
            //status - 400 неправильные данные
            if (res.status === 200) {
                //вошел
            } else {
                //не вошел
            }
        })

    }

    return (
        <div>
                <form ref={formRef} onSubmit={onFormSubmit}
                      style={{display: 'flex', flexDirection: 'column',   alignItems: 'center' }}>
                    <TextField
                        color="success"
                        name="name"
                        label="name"
                    />
                    <Select
                        color="success"
                        name="category_id"
                        label="category_id"
                        style={{width: 220}}
                    >
                        {categories.map((item) => <MenuItem value={item.id}>{item.name}</MenuItem>)}
                    </Select>

                    <TextField
                        color="success"
                        name="price"
                        label="price"
                    />
                    <TextField
                        color="success"
                        name="photo"
                        label="photo"
                    />
                    <TextField
                        color="success"
                        name="seller_id"
                        label="seller_id"
                    />
                    <Button type="submit"
                            color="success"
                            variant="contained"
                            style={{ marginTop: 10}}
                    >
                        Создать новый товар
                    </Button>
                </form>
        </div>
    )
}

export default CreateProduct