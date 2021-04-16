import React from "react";

export const ICSWP = () => {
	return (
		<form className="container border p-5">
			<div className="card">
				<div className="card-header container border p-4 font-weight-bold">
					<h4>Payment form example </h4>
				</div>
				<br>
					<div className="container border p-2" role="alert">
						Some Fields are missing{" "}
					</div>
				</br>
				<tab>
					<div className="form-row p-2">
						<div className="form-group col-md-5">
							<label title="inputEmail4">Card #</label>
							<input type="email" className="form-control" id="inputEmail4" placeholder="XXXXXXXXXXXX" />
						</div>
						<div className="form-group col-md-2">
							<label title="inputPassword4">CVC#</label>
							<input type="password" className="form-control" id="inputPassword4" placeholder="0000" />
						</div>
						<div className="form-group col-md-5">
							<label title="inputPassword4">Amount</label>
							<div className="input-group mb-3">
								<label
									className="input-group-text"
									title="inputGroupSelect01"
									style="background: white;">
									<i className="fas fa-dollar-sign" style="float: left;" />
								</label>
								<input
									type="number"
									className="form-control"
									id="inputPassword4"
									placeholder="Amount"
								/>
							</div>
						</div>
					</div>

					<div className="form-row p-2">
						<div className="form-group col-md-6">
							<label title="inputEmail4">First name</label>
							<input type="email" className="form-control" id="inputEmail4" placeholder="Name" />
						</div>
						<div className="form-group col-md-6">
							<label title="inputPassword4">Last Name</label>
							<input type="password" className="form-control" id="inputPassword4" placeholder="Name" />
						</div>
					</div>
					<div className="form-row p-2">
						<div className="form-group col-md-6">
							<label title="inputCity">City</label>
							<input type="text" className="form-control" id="inputCity" />
						</div>
						<div className="form-group col-md-3">
							<label title="inputState">State</label>
							<select id="inputState" className="form-control">
								<option selected>Choose...</option>
								<option>...</option>
							</select>
						</div>
						<div className="form-group col-md-3">
							<label title="inputZip">Zip</label>
							<input type="text" className="form-control" id="inputZip" />
						</div>
					</div>
					<div className="form-row p-2">
						<div className="form-group col-md-6">
							<label title="inputCity">We accept:</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<div className="input-group-text">
										<input type="radio" aria-label="Radio button for following text input" />
										<i className="fab fa-cc-mastercard" />
										<input type="radio" aria-label="Radio button for following text input" />
										<i className="fab fa-cc-visa" />
										<input type="radio" aria-label="Radio button for following text input" />
										<i className="fab fa-cc-discover" />
										<input type="radio" aria-label="Radio button for following text input" />
										<i className="fab fa-cc-amex" />
									</div>
								</div>
							</div>
						</div>
						<div className="form-group col-md-6">
							<label title="exampleFormControlTextarea1">Messages</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							<h6>Add any notes</h6>
						</div>
					</div>
				</tab>
				<div className="modal-footer container border p-2 alert alert-dark" role="alert">
					<button type="button" className="btn btn-primary">
						Cancel
					</button>
					<button type="button" className="btn btn-secondary" data-dismiss="modal">
						Send
					</button>
				</div>
			</div>
		</form>
	);
};
export default ICSWP;
