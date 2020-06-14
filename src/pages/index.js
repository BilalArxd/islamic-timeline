import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import DateSlider from '../components/DateSlider';
import { Container } from '@material-ui/core';
import Routes from '../routes';

const useStyles = makeStyles((theme) => ({
	main: {
		padding: theme.spacing(2, 2, 12),
		minHeight: '80vh',
		display: 'flex',
		minWidth: '100%'
	},
	text: {
		padding: theme.spacing(2, 2, 0)
	},
	paper: {
		paddingBottom: 50
	},
	list: {
		marginBottom: theme.spacing(2)
	},
	subheader: {
		backgroundColor: theme.palette.background.paper
	},
	appBar: {
		backgroundColor: '#EEE',
		top: 'auto',
		bottom: 0,
		paddingLeft: 20,
		paddingRight: 20
	},
	grow: {
		flexGrow: 1
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	}
}));

export default function Root() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg" className={classes.main}>
				<Routes />
			</Container>
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<DateSlider />
			</AppBar>
		</React.Fragment>
	);
}
