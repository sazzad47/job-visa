import React from 'react';
import { withStyles } from '@mui/styles';
import LaunchIcon from '@mui/icons-material/Launch';

const styles = {
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
};

const MyUrlField = ({ record = {}, source, classes }) =>
    <a href={record[source]} className={classes.link}>
        {record[source]}
        <LaunchIcon className={classes.icon} />
    </a>;

export default withStyles(styles)(MyUrlField);