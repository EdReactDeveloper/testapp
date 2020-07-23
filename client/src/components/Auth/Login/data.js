const render = (payload) => {
  const { email, password } = payload;
	return [
		{
			label: 'Email address',
			controlId: 'formBasicEmail',
			type: 'email',
			invalid: email.error,
			name: 'email',
			value: email.value,
      placeholder: 'Enter email',
      error:email.error
		},
		{
			label: 'Password',
			controlId: 'formBasicPassword',
			type: 'password',
			invalid: password.error,
			name: 'password',
			value: password.value,
      placeholder: 'Enter password',
      error: password.error
		}
	];
};

export default render
