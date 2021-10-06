import { useContext } from 'react';
import Speaker from './Speaker';
import ReactPlaceHolder from 'react-placeholder';
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay';
import { data } from '../../SpeakerData';
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';
import SpeakerAdd from './SpeakerAdd';

export default function SpeakersList() {
	const {
		data: speakersData,
		requestStatus,
		error,
		updateRecord,
		insertRecord,
		deleteRecord,
	} = useRequestDelay(2000, data);

	const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

	if (requestStatus === REQUEST_STATUS.FAILURE) {
		return (
			<div className='text-danger'>
				ERROR: <b>loading Speaker Data Failed {error}</b>
			</div>
		);
	}

	return (
		<div className='container speakers-list'>
			<ReactPlaceHolder
				type='media'
				row={15}
				className='speakerslist-placeholder'
				ready={requestStatus === REQUEST_STATUS.SUCCESS}
			>
				<SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
				<div className='row'>
					{speakersData
						.filter(
							(speaker) =>
								speaker.first
									.toLowerCase()
									.includes(searchQuery.toLowerCase()) ||
								speaker.last
									.toLowerCase()
									.includes(searchQuery.toLowerCase())
						)
						.filter((speaker) =>
							speaker.sessions.find(
								(session) => session.eventYear === eventYear
							)
						)
						.map((speaker) => {
							return (
								<Speaker
									key={speaker.id}
									speaker={speaker}
									updateRecord={updateRecord}
									insertRecord={insertRecord}
									deleteRecord={deleteRecord}
								/>
							);
						})}
				</div>
			</ReactPlaceHolder>
		</div>
	);
}
