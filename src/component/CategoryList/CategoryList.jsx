import { CategoryItem } from '../CategoryItem/CategoryItem';
import styles from './CategoryList.module.css'

function CategoryList({ catalog = [] }) {
    return (
        <div className={styles.list}>
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export { CategoryList };