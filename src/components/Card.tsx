// src/components/Card.js
import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, link }) => (
	<div className={styles.card}>
		<h3>{title}</h3>
		<p>{description}</p>
		<a href={link}>Learn More</a>
	</div>
);

export default Card;
