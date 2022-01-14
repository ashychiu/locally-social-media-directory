import React from "react";
import "./AddBusiness.scss";

const AddBusiness = () => {
	return (
		<div className="wrapper business">
			<h1>Edit Information</h1>
			<div className="business__profile">
				logo
				<a href="">Change Profile Image</a>
			</div>
			<div className="flex-2-col">
				<div className="form-field">
					<label htmlFor="username" className="form-field__label">
						Instagram Username
					</label>
					<input
						type="text"
						name="username"
						id=""
						className="form-field__input"
						placeholder="myloveatfirstbite"
					/>
				</div>

				<div className="form-field">
					<label htmlFor="username" className="form-field__label">
						Instagram URL
					</label>
					<input
						type="text"
						name="username"
						id=""
						className="form-field__input"
						placeholder="instagram.com/myloveatfirstbite"
					/>
				</div>
			</div>

			<div className="form-field">
				<label htmlFor="username" className="form-field__label">
					Biography
				</label>
				<textarea
					name=""
					id=""
					className="form-field__text-area"
					placeholder="if you’re looking for cute cakes & cookies then you’re in the right place!"
				></textarea>
			</div>

			<div className="form-field width-half">
				<label htmlFor="location" className="form-field__label">
					Location
				</label>
				<input
					type="text"
					name="location"
					id=""
					className="form-field__input"
					placeholder=""
				/>
			</div>

			<div className="form-field width-half">
				<label htmlFor="location" className="form-field__label">
					Contact
				</label>
				<input
					type="text"
					name="location"
					id=""
					className="form-field__input"
					placeholder=""
				/>
			</div>

			<div className="form-field">
				<label htmlFor="location" className="form-field__label">
					Contact Hours
				</label>
				<div className="three-col">
					<div>
						<div>Monday</div>
						<div>Tuesday</div>
						<div>Wednesday</div>
						<div>Thursday</div>
						<div>Friday</div>
						<div>Saturday</div>
						<div>Sunday</div>
					</div>
					<div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
					</div>
					<div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
						<div>
							<input
								type="time"
								id="appt"
								name="appt"
								min="09:00"
								max="18:00"
								className="form-field__input"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddBusiness;
