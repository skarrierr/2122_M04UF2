import Remove from './Remove';
import ListItem from '@mui/material/ListItem';
function Item (props)
{
return (
	<ListItem>{props.task} <Remove id_task={props.id_task} remove={props.remove}/></ListItem>
);

}
export default Item;
