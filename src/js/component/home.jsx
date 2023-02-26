import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import MyCard from "./cards.jsx";
import Footer from "./footer.jsx";

const Home=()=> {
	return ( 
		<div className="text-center">
			<NavBar />
			<div className="container">
				<Jumbotrom />
				<div className="row justify-content-around">
					<MyCard foto="https://images.unsplash.com/photo-1677312887323-5c7a378a2630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
					<MyCard foto="https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
					<MyCard foto="https://images.unsplash.com/photo-1675180547490-b93306b2ca3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"/>
					<MyCard foto="https://images.unsplash.com/photo-1676625195945-0b12142742f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
