import { Drawer, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Home } from '@mui/icons-material';
import PostAddIcon from '@mui/icons-material/PostAdd';

const Navbar = () => {
    return (
        <>
        <header className='header'>
            <Drawer variant='permanent' sx={{ p: 5}}>
                <ul>
                    <li>
                        <Toolbar sx={{ mt: 1}}>
                            <Home
                                sx={{ mr: 1}}
                            />
                            <Typography variant="h6" noWrap component="div">
                                <Link to="/" className='link-navbar'>Home</Link>
                            </Typography>
                        </Toolbar>
                    </li>
                    <li>
                        <Toolbar>
                            <PostAddIcon
                                sx={{ mr: 1}}
                            />
                            <Typography variant="h6" noWrap component="div">
                                <Link to="/new-post" className='link-navbar'>New Post</Link>
                            </Typography>
                        </Toolbar>
                    </li>
                </ul>
            </Drawer>
        </header>
        </>
    )
}

export default Navbar