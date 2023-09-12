import * as React from 'react';
// import PropTypes from 'prop-types';

import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';




export default function Header(props) {



    const { sections, title } = props
    return (
        <React.Fragment>





            <h1 style={{ backgroundColor: "orange" }}>


                Header


            </h1>










        </React.Fragment>
    )
};



// Header.propTypes = {
//     sections: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     title: PropTypes.string.isRequired,
//   };