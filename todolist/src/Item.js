import Remove from './Remove';
function Item (props)
{
return (
	<li>{props.task}<Remove /> </li>
);

}
export default Item;
