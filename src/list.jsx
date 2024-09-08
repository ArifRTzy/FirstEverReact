import PropTypes from 'prop-types'

function List(props){

    const category = props.category
    const itemList = props.items
    
    //fruits.sort((a,b) => a.name.localeCompare(b.name)) //ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)) //REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories)//NUMERIC
    //fruits.sort((a,b) => b.calories - a.calories)//REVERSE NUMERIC

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)//FILTER ONLY CALORIES UNDER 100
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)//FILTER ONLY CALORIES ABOVE OR EQUAL 100

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)

    return(<><h3>{category}</h3><ol>{listItems}</ol></>)
}
List.propTypes = {
    category : PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        calories : PropTypes.number,
    }))
}
List.defaultProps={
    category: "Category",
    items : [],
}

export default List