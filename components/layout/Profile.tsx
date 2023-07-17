import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

function Profile() {
    return (
        <div
            className='bg-dark-300 sticky h-[calc(100vh-24px)] left-0 top-3 w-56 rounded-2xl 
        overflow-hidden py-3 pl-5'
        >
            <div className="mt-12 flex items-center justify-center">
                <ContentCopyOutlinedIcon />
                <img />
            </div>
        </div>
    )
}

export default Profile