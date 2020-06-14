import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import { Chip, Badge, Tooltip } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

//
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12,
		maxWidth: 400
	},
	paper: {
		minWidth: 200,
		minHeight: 200,
		padding: 10,
		textAlign: 'center'
	},

	//new

	root: {
		minWidth: 200
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: '#CCC',
		color: '#000'
	}
}));

export default function SearchItem(props) {
	const classes = useStyles();
	const {
		title,
		subTitle,
		description,
		year,
		primaryTagIcon,
		secondaryTagIcon,
		secondaryTagTitle,
		secondaryTagCount,
		secondaryTagDescription
	} = props;

	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<Grid item lg={3} md={4} xs={6}>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" className={classes.avatar}>
							{primaryTagIcon}
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={title}
					subheader={subTitle}
				/>
				<CardActions disableSpacing>
					<Badge badgeContent={secondaryTagCount} color="primary">
						<Tooltip
							title={
								<React.Fragment>
									<Typography>{secondaryTagTitle}</Typography>
									{secondaryTagDescription}
								</React.Fragment>
							}
						>
							{secondaryTagIcon}
						</Tooltip>
					</Badge>
					<Chip style={{ marginLeft: 10 }} size="small" label={`${year}`} color="primary" />

					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>{description}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Grid>
	);
}
