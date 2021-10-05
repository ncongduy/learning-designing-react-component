import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { SpeakerFilterProvider } from '../contexts/SpeakerFilterContext';

export default function Speakers() {
	return (
		<SpeakerFilterProvider startingShowSessions={false}>
			<SpeakersToolbar />
			<SpeakersList />
		</SpeakerFilterProvider>
	);
}
