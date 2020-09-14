import React from 'react';

const Card = ({id, name, username, email}) => {
	return(
		<div className='tc bg-light-green dib br3 ma2 grow b2 2 shadow-5'>
			<img alt='robots' src={`http://robohash.org/${id}?set=set2`} />
			<div>
			<h2>{name}</h2>
			<p>{username}</p>
			<p>{email}</p>
			</div>
		</div>
		)
}

export default Card;