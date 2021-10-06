import React, { useContext } from 'react';
import { SpeakerContext } from '../contexts/SpeakerContext';

export default function SpeakerDelete() {
	const { speaker, deleteRecord } = useContext(SpeakerContext);
	return (
		<span className='session w-100'>
			<a href='#' className='remSes'>
				<i
					onClick={(evt) => {
						evt.preventDefault();
						if (
							window.confirm(
								'Are you sure you want to delete this speaker?'
							)
						) {
							deleteRecord(speaker);
						}
					}}
				>
					-
				</i>
			</a>
			<span className='padL2'>Delete Speaker</span>
		</span>
	);
}
