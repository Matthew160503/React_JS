import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducers/productsSlice';
import './AddProduct.css';

function AddProduct() {
    const dispatch = useDispatch();
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        dispatch(addProduct(JSON.stringify(data)));
        reset();
    }

    
    return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label>
            Введите название продукта:
        <input {...register('name', {
            required: 'Необходимо указать имя продукта!',
            minLength: {value: 3, message: 'Название продукта должно быть длиной более 2 символов'}
        })} />
        </label>
        <div style={{color: '#bf1650'}}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
        <label>
            Введите цену продукта:
        <input type="number" {...register('price', {
            required: 'Необходимо указать цену продукта!',
            min: {value:0, message: 'Цена продукта должна быть положительной'}
        })} />
        </label>
        <div style={{color: '#bf1650'}}>{errors?.price && <p>{errors?.price?.message || "Error!"}</p>}</div>
        <label>
            Введите описание продукта:
        <input {...register('description', {
            required: 'Необходимо указать описание продукта!',
            minLength: {value: 10, message: 'Описание должно быть не менее 10 символов'}
        })} />
        </label>
        <div style={{color: '#bf1650'}}>{errors?.description && <p>{errors?.description?.message || "Error!"}</p>}</div>
        <input type='submit' disabled={!isValid}/>
    </form>
    );
}

export default AddProduct;