// AppointmentList.js

import React, { useState } from "react";

const AppointmentList = ({
	appointments,
	deleteAppointment,
	editAppointment,
	clearAppointments,
}) => {
	const [editedIndex, setEditedIndex] = useState(null);
	const [editedName, setEditedName] = useState("");
	const [editedPhone, setEditedPhone] = useState("");
	const [editedDate, setEditedDate] = useState("");
    const [editedTime, setEditedTime] = useState("");
	const [editedService, setEditedService] = useState("");

	const handleEdit = (index) => {
		setEditedIndex(index);
		setEditedName(appointments[index].name);
		setEditedPhone(appointments[index].phone);
		setEditedDate(appointments[index].date);
		setEditedTime(appointments[index].time);
		setEditedService(appointments[index].service);
	};

	const handleSaveEdit = (index) => {
		editAppointment(index, editedName, editedPhone,editedDate,editedTime,editedService);
		setEditedIndex(null);
		setEditedName("");
	};

	const handleCancelEdit = () => {
		setEditedIndex(null);
		setEditedName("");
	};

	return (
		<div className="container">
			<h2>Appointment List</h2>
			<table id="list">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Date</th>
						<th>Time</th>
						<th>Service</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>
								{editedIndex === index ? (
									<input
										type="text"
										value={editedName}
										onChange={(e) =>
											setEditedName(e.target.value)
										}
									/>
								) : (
									appointment.name
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<input
										type="text"
										value={editedPhone}
										onChange={(e) =>
											setEditedPhone(e.target.value)
										}
									/>
								) : (
									appointment.phone
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<input
										type="date"
										value={editedDate}
										onChange={(e) =>
											setEditedDate(e.target.value)
										}
									/>
								) : (
									appointment.date
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<input
										type="time"
										value={editedTime}
										onChange={(e) =>
											setEditedTime(e.target.value)
										}
									/>
								) : (
									appointment.time
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<input
										type="service"
										value={editedService}
										onChange={(e) =>
											setEditedService(e.target.value)
										}
									/>
								) : (
									appointment.service
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<>
										<button
											onClick={() =>
												handleSaveEdit(index)
											}
										>
											Save
										</button>
										<button onClick={handleCancelEdit}>
											Cancel
										</button>
									</>
								) : (
									<>
										<button
											onClick={() => handleEdit(index)}
										>
											Edit
										</button>
										<button
											onClick={() =>
												deleteAppointment(index)
											}
										>
											Delete
										</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={clearAppointments}>Clear All</button>
		</div>
	);
};

export default AppointmentList;
