const cardStyle = {
	width: 620,
	height: 430,
	border: "1px solid black",
	margin: "0px auto",
	textAlign: "center"
};
const topDivStyle = {
	height: 50,
	width: "100%",
	display: "flex"
};
const userPicDivStyle = {
	height: 50,
	width: 50,
	display: "flex"
};
const userPicStyle = {
	border: "1px solid black",
	borderRadius: "100%",
	height: 40,
	width: 40,
	margin: "auto"
};
const userNameAndTimeDivStyle = {
	display: "flex",
	flexDirection: "column",
	height: 50,
	justifyContent: "center",
	paddingLeft: 5
}
const reactionDivStyle = {
	display: "flex", 
	alignItems: "center", 
	height: 50, 
	width: "100%"
}
const reactionCounterStyle = {
	flexGrow: 1, 
	textAlign: "right", 
	paddingRight: 10
}
const likeNotClickedStyle = {
	padding: "5px 10px"
}
const likeClickedStyle = {
	padding: "5px 10px",
	fontWeight: "bold",
	color: "darkblue"
}
const commentNotClickedStyle = {
	padding: "10px 5px"
}
const commentClickedStyle = {
	padding: "10px 5px",
	fontWeight: "bold",
	color: "darkblue"
}
const shareNotClickedStyle = {
	padding: "10px"
}
const shareClickedStyle = {
	padding: "10px",
	fontWeight: "bold",
	color: "darkblue"
}

// styles object

const styles = {
	cardStyle: cardStyle,
	topDivStyle: topDivStyle,
	userPicDivStyle: userPicDivStyle,
	userPicStyle: userPicStyle,
	userNameAndTimeDivStyle: userNameAndTimeDivStyle,
	reactionDivStyle: reactionDivStyle,
	reactionCounterStyle: reactionCounterStyle,
	likeNotClickedStyle: likeNotClickedStyle,
	commentNotClickedStyle: commentNotClickedStyle,
	shareNotClickedStyle: shareNotClickedStyle
}

export { styles }