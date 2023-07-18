import { styled } from '@mui/material/styles';
import { Typography, TextField, Button } from "@mui/material";

const Title = styled(Typography)({ fontSize: 18, color: '#FFFFFF', fontWeight: 600 })

const SmText = styled(Typography)({ fontSize: 14, color: '#FFFFFF', fontWeight: 400 })

const Caption = styled(Typography)({ fontSize: 12, color: '#9C9C9C', fontWeight: 400 })

const Detail = styled(Typography)({ fontSize: 16, color: '#3E3E3E', fontWeight: 500 })

const Form = styled(TextField)({
    background: '#F7F7F9', padding: '6px 18px', borderRadius: 16,
    '.css-1x51dt5-MuiInputBase-input-MuiInput-input': { color: '#A3AFB9' }
})

const Input = styled(TextField)({
    // background: '#F7F7F9', padding: '6px 18px', borderRadius: 16,
    // '.css-1x51dt5-MuiInputBase-input-MuiInput-input': { color: '#A3AFB9' }
})

const BgButton = styled(Button)({ background: 'rgba(92,39,254,0.7) !important', borderRadius: 12 })

export { Title, SmText, Detail, Caption, Form, BgButton, Input };