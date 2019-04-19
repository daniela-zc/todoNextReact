import ListItem from './ListItem';
import css from '../static/css/index.css';

export default (props) => (
    <div className={css.list}>
        {props.items.map((item, index) => (
            <ListItem
                key={index.toString()}
                item={item}
                itemNumber={index}
                updateItem={props.updateItem}
                deleteItem={props.deleteItem} /> 
        ))}
    </div>
);