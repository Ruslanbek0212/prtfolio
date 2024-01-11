import  React, { useContext } from 'react';
import './Navbar.css'
import {AppBar,Box, Toolbar, IconButton, Typography, Menu, Container,  Button, 
     MenuItem } from '@mui/material/';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import { menu } from '../../utilits/Constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Contexts } from '../../context/Contexts';
import {  Link } from 'react-router-dom';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbars() {
  const {setBasket, state} = useContext(Contexts)

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };  

  const showBasket = () => {
    setBasket(true)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{alignItems: 'center'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: 'white',
              fontWeight: 900,
              display: {xs: 'none' , md: 'flex'},
              transition: '1s',
              '&:hover': {
                color: 'crimson'
              }
              
            }}
          >
            fintech-shop.uz
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menu.map((page) => (
                <MenuItem key={page.linkName} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to={page.slag} >{page.linkName}</Link> </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            fintech-shop.uz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menu.map((page) => (
              <Button
                key={page.linkName}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.slag} >{page.linkName}</Link>
              </Button>
            ))}
          </Box>
          <Box>
          <IconButton aria-label="cart">
            <Badge badgeContent={state.basket?.length} color="secondary">
              <ShoppingCartIcon onClick={showBasket} />
            </Badge>
          </IconButton>
            
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbars;