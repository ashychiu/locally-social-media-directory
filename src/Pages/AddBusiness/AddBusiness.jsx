import React from "react";
import "./AddBusiness.scss";
import AddBtn from "../../assets/Buttons/add-new-post.svg";
import bakeryLogo from "../../assets/Images/Bakery/My-Love-at-First-Bite-Logo.png";
import bakery1 from "../../assets/Images/Bakery/Photo 1 Preview.png";
import bakery2 from "../../assets/Images/Bakery/Photo 2 Preview.png";
import bakery3 from "../../assets/Images/Bakery/Photo 3 Preview.png";
import bakery4 from "../../assets/Images/Bakery/Photo 4 Preview.png";
import completeBtn from "../../assets/Buttons/complete-listing.svg";
import { Link } from "react-router-dom";

const AddBusiness = () => {
	return (
		<div className="wrapper business">
			<h1>Edit Information</h1>
			<div className="business__profile">
				<img src={bakeryLogo} alt="add" />
			</div>
			<div className="business__profile business__profile--link">
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

				<div className="contact-hours">
					<div className="three-col">
						<div>Monday</div>
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

				<div>
					<div className="three-col">
						<div>Tuesday</div>
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

				<div>
					<div className="three-col">
						<div>Wednesday</div>
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

				<div>
					<div className="three-col">
						<div>Thursday</div>
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

				<div>
					<div className="three-col">
						<div>Friday</div>
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

				<div>
					<div className="three-col">
						<div>Saturday</div>
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

				<div>
					<div className="three-col">
						<div>Sunday</div>
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

			<h3>Add your posts</h3>
			<div className="five-col">
				<div className="pointer">
					<img src={AddBtn} alt="add" />
				</div>
				<div>
					<img src={bakery1} alt="add" />
				</div>
				<div>
					<img src={bakery2} alt="add" />
				</div>
				<div>
					<img src={bakery3} alt="add" />
				</div>
				<div>
					<img src={bakery4} alt="add" />
				</div>
			</div>

			<div className="business__btn pointer">
				<Link to="/Store">
					<img src={completeBtn} alt="add" />
				</Link>
			</div>
		</div>
	);
};

export default AddBusiness;
