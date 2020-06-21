import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Chip, Badge, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	chip: {
		margin: theme.spacing(0.2),
		padding: theme.spacing(0.2)
	}
}));

export default function SearchItem(props) {
	const classes = useStyles();
	const {
		title,
		primaryTagIcon,
		primaryTagDescription,
		secondaryTagIcon,
		secondaryTagTitle,
		secondaryTagCount,
		secondaryTagDescription,
		color
	} = props;

	return (
		//<Typography>{title}</Typography>
		<Chip
			//key={`item-${Math.random()}-${Math.random()}`}
			className={classes.chip}
			icon={<Tooltip title={<React.Fragment>{primaryTagDescription}</React.Fragment>}>{primaryTagIcon}</Tooltip>}
			label={title}
			onDelete={() => {}}
			//onClick={() => {}}
			deleteIcon={
				<Badge badgeContent={secondaryTagCount} color={color === 'primary' ? 'secondary' : 'primary'}>
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
			}
			color={color}
		/>
	);
}
