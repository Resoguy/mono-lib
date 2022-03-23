import * as React from 'react';

export const Button = ({ children }: any) => {
	return <button onClick={() => alert('clicked!')}>{children}</button>;
};
