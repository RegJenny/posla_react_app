import React, {useState, useEffect} from 'react';

const ModalDialog = () => {

	const [category, setCategory] = useState([]);
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(res => {
				setCategory(res);
			})
			.catch((e) => {
				console.log(e);
			})
	});





	return(
		<>
		{category&&
        category.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}

		</>
		)
}
export default ModalDialog;