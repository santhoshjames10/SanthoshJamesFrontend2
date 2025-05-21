

function ListGroup (){
    let items = [
        'New York',
        'San Francisco',
        'Los Angeles',
        'Chicago',
        'Houston',
    ];

    items = [];


    const message = items.length === 0 ? 'No items found' : null;


    

    
    return (
        <>
            <h1> List</h1>
            {items.length === 0 && <p> No items found</p>}
            <ul className="list-group">
                
                {items.map((item) => (
                    <li key ={item}>{item} </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;