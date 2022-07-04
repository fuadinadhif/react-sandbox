import React, { useState, useContext, createContext } from 'react';
import sublinks from './data';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [page, setPage] = useState({ page: '', links: [] });
	const [location, setLocation] = useState({});
	const openSidebar = () => setIsSidebarOpen(true);
	const openSubmenu = (text, coordinates) => {
		const thePage = sublinks.find((link) => link.page === text);
		setPage(thePage);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};
	const closeSidebar = () => setIsSidebarOpen(false);
	const closeSubmenu = () => setIsSubmenuOpen(false);
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenuOpen,
				page,
				location,
				openSidebar,
				openSubmenu,
				closeSidebar,
				closeSubmenu,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => useContext(AppContext);
