function IngredientsList({items, combo}) {
    console.log(combo);
    return (
        <>
            <h2>Ingredients List</h2>
            <ul className="ingredients">
                {items.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>  //curly braces are like 'portal' to JS
                ))}
            </ul>
        </>
    );
}

export default IngredientsList;