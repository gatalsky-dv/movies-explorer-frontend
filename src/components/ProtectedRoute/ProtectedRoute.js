import React from "react";
import { useLocation, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ loggedIn, children  }) {
	const location = useLocation();
	
	if (!loggedIn) {
		return <Navigate to='/' state={{ from: location }} />
	}
	
	return children;

}