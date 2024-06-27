// AppointmentForm.js

import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [phone,setPhone] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [service, setService] = useState("");
	

	const handleSubmit = (e) => { e.preventDefault();
		addAppointment({ name, phone,date, time,service });
		setName("");
		setPhone("");
		setDate("");
		setTime("");
		setService("");
	};

	return (
		<div class="container">
			<form onSubmit={handleSubmit}>
				<div class="row">
					<div class="col-25">
						<label for="fname">Full Name :</label>
					</div>
					<div class="col-75">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div class="row">
				<div class="col-25">
					<label for="phone">Phone Number :</label>
				</div>
				<div class="col-75">
					<input
						type="phone"
						id="phone"
						name="phone"
						placeholder="Your phone number.."
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
			</div>
				<div class="row">
					<div class="col-25">
						<label for="fname">Appointment Date: </label>
					</div>
					<div class="col-75">
						<input
							id="date"
							name="firstname"
							placeholder="Date"
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div class="row">
				<div class="col-25">
					<label for="time">Appointment Time: </label>
				</div>
				<div class="col-75">
					<input
						id="time"
						name="time"
						type="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
				</div>
			</div>
			<div class="row">
                <div class="col-25">
                    <label for="service">Service:</label>
                </div>
                <div class="col-75">
                    <select
                        id="service"
                        name="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    >
                        <option value="">Select a service...</option>
                        <option value="Nail Art">Nail Art (Rs.500)</option>
                        <option value="Hair Cut">Hair Cut (Rs.350)</option>
                        <option value="Threading">Threading (Rs.50)</option>
                        <option value="Waxinng">Waxinng (Rs.200)</option>
                    </select>
                </div>
            </div>
				<div class="row">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;
