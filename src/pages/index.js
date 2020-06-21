import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import DateSlider from '../components/DateSlider';
import { Container } from '@material-ui/core';
import Routes from '../routes';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	main: {
		padding: theme.spacing(8, 2, 12),
		minHeight: '80vh',
		display: 'flex',
		minWidth: '100%'
	},
	appBar: {
		backgroundColor: '#DDD',
		top: 'auto',
		bottom: 0,
		paddingLeft: 20,
		paddingRight: 20
	},
	menuButton: {
		marginRight: theme.spacing(2)
	}
}));

export default function Root() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="fixed">
				<Toolbar variant="dense">
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<TimelineOutlinedIcon />
					</IconButton>
					<Typography variant="h6" color="inherit">
						Islamic Timeline
					</Typography>
				</Toolbar>
			</AppBar>
			<Container maxWidth="lg" className={classes.main}>
				<Routes />
			</Container>
			<AppBar position="fixed" className={classes.appBar}>
				<DateSlider />
			</AppBar>
		</React.Fragment>
	);
}
