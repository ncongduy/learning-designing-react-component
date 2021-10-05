import { useState, useEffect } from 'react';

export const REQUEST_STATUS = {
	LOADING: 'loading',
	SUCCESS: 'success',
	FAILURE: 'failure',
};

const useRequestDelay = (delayTime = 1000, initialData = []) => {
	const [data, setData] = useState(initialData);
	const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
	const [error, setError] = useState('');

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		async function delayFunc() {
			try {
				await delay(delayTime);
				// throw 'Test Error!';
				setRequestStatus(REQUEST_STATUS.SUCCESS);
				setData(data);
			} catch (err) {
				setRequestStatus(REQUEST_STATUS.FAILURE);
				setError(err);
			}
		}

		delayFunc();
	}, []);

	function updateRecord(record, doneCallback) {
		const originalRecords = [...data];
		const newRecords = data.map((rec) => {
			return rec.id === record.id ? record : rec;
		});

		async function delayFunction() {
			try {
				setData(newRecords);
				await delay(delayTime);
				if (typeof doneCallback === 'function') {
					doneCallback();
				}
			} catch (err) {
				console.log('error thrown inside delayFunction', err);
				if (typeof doneCallback === 'function') {
					doneCallback();
				}
				setData(originalRecords);
			}
		}

		delayFunction();
	}

	function insertRecord(record, doneCallback) {
		const originalRecords = [...data];
		const newRecords = [record, ...data];

		async function delayFunction() {
			try {
				setData(newRecords);
				await delay(delayTime);
				if (typeof doneCallback === 'function') {
					doneCallback();
				}
			} catch (err) {
				console.log('error thrown inside delayFunction', err);
				if (typeof doneCallback === 'function') {
					doneCallback();
				}
				setData(originalRecords);
			}
		}

		delayFunction();
	}

	function deleteRecord(record, doneCallback) {
		const originalRecords = [...data];
		const newRecords = data.filter((rec) => rec.id !== record.id);

		async function delayFunction() {
			try {
				setData(newRecords);
				await delay(delayTime);
				if (typeof doneCallback === 'function') {
					doneCallback();
				}
			} catch (err) {
				console.log('error thrown inside delayFunction', err);
				if (typeof doneCallback === 'function') {
					doneCallback();
				}
				setData(originalRecords);
			}
		}

		delayFunction();
	}

	return {
		data,
		requestStatus,
		error,
		updateRecord,
		insertRecord,
		deleteRecord,
	};
};

export default useRequestDelay;
