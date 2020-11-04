import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-around',
    marginLeft: '15rem',
    marginRight: '15rem',
    marginTop: '5rem',
    height: '65%'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function ProfileTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className='tabs'
      >
        <Tab className='tab-cell' label="Profile" {...a11yProps(0)} />
        <Divider />
        <Tab className='tab-cell' label="Login & Security" {...a11yProps(1)} />
        <Divider />
        <Tab className='tab-cell' label="Billing & Wallet" {...a11yProps(2)} />
        <Divider />
        <Tab className='tab-cell' label="Privacy" {...a11yProps(3)} />
        <Divider />
        <Tab className='tab-cell' label="Notifications" {...a11yProps(4)} />
        <Divider />
        <Tab className='tab-cell' label="Recently Viewed" {...a11yProps(5)} />
      </Tabs>
      <TabPanel className='table-panel' value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel className='table-panel' value={value} index={2}>
        Item Two
      </TabPanel>
      <TabPanel className='table-panel' value={value} index={4}>
        Item Three
      </TabPanel>
      <TabPanel className='table-panel' value={value} index={6}>
        Item Four
      </TabPanel>
      <TabPanel className='table-panel' value={value} index={8}>
        Item Five
      </TabPanel>
      <TabPanel className='table-panel' value={value} index={10}>
        Item Six
      </TabPanel>
    </div>
  );
}
