// Компонент для отображения продуктов: Разработайте компонент, который отображает список всех 
// продуктов с их атрибутами, а также кнопки для удаления продукта из каталога и переключения его доступности.

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import { removeProduct, avaliableProduct, changeProduct } from '../reducers/productsSlice';
import './ViewProduct.css'


function ViewProducts() {
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch();

    return (<div>
        <h2>All products</h2>
        <div className='container'>
        {products.map((product) => (
            <Card className='product__box' key={product.id} sx={{ width: 500, height: 300}}>
            <CardContent className='product__info'>
              <Typography gutterBottom variant="h3" component="h3">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography gutterBottom variant="h4" component="h4">{product.price}</Typography>
            </CardContent>
            <CardActions className='product__buttons'>
              <Button onClick={() => dispatch(removeProduct(product))} size="small">Удалить товар</Button>
              <Button onClick={() => dispatch(avaliableProduct(product))} disabled={!product.avaliailable} size="small">Купить продукт</Button>
              <Button onClick={() => dispatch(changeProduct(product))}size="small">Изменить продукт</Button>
            </CardActions>
          </Card>
        ))}
        </div>
    </div>);
}

export default ViewProducts;