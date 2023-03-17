import { useDispatch, useSelector } from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { shades } from '@/theme'
import { MenuOutlined, PersonOutline, SearchOutlined } from '@mui/icons-material'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.secondary[500]}
        >
          CÓCTEL & CREAM
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          zIndex="2"
        >
          <SearchOutlined />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <PersonOutline />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
