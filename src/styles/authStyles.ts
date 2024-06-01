import { makeStyles } from '@mui/styles';

const useHeadingStyles = makeStyles({
  root: {
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
});

const useTextFieldStyles = makeStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white', // Color for focused label
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root:hover .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root:hover .MuiInputLabel-root': {
      color: 'white',
    },
  },
});

const useButtonStyles = makeStyles({
  root: {
    background: 'linear-gradient(135deg, #23a6d5, #891eb3)', // Gradient background
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(135deg, #1f8db3, #7d1ba3)', // Gradient background on hover
    },
  },
  alternateButton: {
    background: 'linear-gradient(135deg, #f50057, #c51162)', // Gradient background
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(135deg, #c51162, #a80052)', // Gradient background on hover
    },
  },
});

// const useTabsStyles = makeStyles({
//   Tabs: {
//     background: 'linear-gradient(135deg, #23a6d5, #891eb3)',
//     borderRadius: '10px',
//     overflow: 'hidden',
//   },
//   Tab: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '16px',
//     textTransform: 'uppercase',
//     padding: '10px 20px',
//     transition: 'all 0.3s ease-in-out',
//   },
//   authTabHover: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   authTabSelected: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   indicator: {
//     backgroundColor: 'white',
//   },
// });

const useTabsStyles = makeStyles({
  root: {
    "& .MuiTab-root": {
      color: "white", // Text color
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "white !important", // Selected tab text color
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "white", // Indicator color
    },
  },
  tab: {
    "&.Mui-selected": {
      color: "white !important", // Color for selected tab
    },
  },
});

export { useHeadingStyles, useTextFieldStyles, useButtonStyles, useTabsStyles };
