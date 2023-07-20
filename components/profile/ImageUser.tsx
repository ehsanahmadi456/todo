import { Dispatch, SetStateAction, useRef, RefObject } from 'react'
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit';
import { UserInfo } from '@/globalTypes';

interface IProps {
    userDetail: UserInfo,
    setUserDetail: Dispatch<SetStateAction<UserInfo>>
}

function ImageUser({ userDetail, setUserDetail }: IProps) {

    const inputRef: RefObject<HTMLInputElement> = useRef(null)
    const changeProfile = (e) => {
        let reader = new FileReader();
        if (e && e.currentTarget && e.currentTarget.files) {
            // setLocalBlob(e.currentTarget.files[0])

            reader.onload = () =>
                typeof reader.result === 'string' &&
                setUserDetail({ ...userDetail, profile: reader.result })

            reader.readAsDataURL(e.currentTarget.files[0]);
        }

        // inputRef.current?.click()
        // if (userDetail.profile) {
        //     setUserDetail({ ...userDetail, profile: '' })
        // }
    }

    return (
        <div className='relative w-fit mx-auto mt-10'>
            <div className='w-[120px] h-[120px] border border-tertiary rounded-full overflow-hidden flex items-center justify-center'>
                <Image
                    // className='rounded-full'
                    src={userDetail.profile || ''}
                    alt='profile'
                    width={900}
                    height={900}
                />
            </div>
            <div
                className='absolute right-1 bottom-1 w-8 h-8 bg-light-tertiary rounded-full'
                onClick={() => inputRef.current?.click()}
            >
                <input
                    className='absolute w-full h-full left-0 top-0'
                    onChange={changeProfile}
                    accept="image/*"
                    ref={inputRef}
                    type='file'
                    hidden
                />
                <EditIcon
                    className='w-full h-full p-2 text-primary'
                />
            </div>
        </div>
    )
}

export default ImageUser