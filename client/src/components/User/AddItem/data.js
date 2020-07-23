const render = (payload) => {
  const { firstName, lastName, email } = payload;
	return [
    {
			label: 'first name',
			controlId: 'firstNameInput',
			type: 'text',
			invalid: firstName.error,
			name: 'firstName',
			value: firstName.value,
      placeholder: 'first name',
      error: firstName.error
    },
    {
			label: 'last name',
			controlId: 'lastNameInput',
			type: 'text',
			invalid: lastName.error,
			name: 'lastName',
			value: lastName.value,
      placeholder: 'last name',
      error: lastName.error
		},
		{
			label: 'Email address',
			controlId: 'emailField',
			type: 'email',
			invalid: email.error,
			name: 'email',
			value: email.value,
      placeholder: 'Enter email',
      error:email.error
		}
	];
};

export default render;