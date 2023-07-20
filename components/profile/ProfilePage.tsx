import { useState, ChangeEvent } from 'react'
import { Title } from "@/mui/customize"
import ImageUser from "./ImageUser"
import FormUser from "./FormUser"
import { Button } from '@mui/material'
import { UserInfo } from "@/globalTypes"

function ProfilePage() {

  const [userDetail, setUserDetail] = useState<UserInfo>({
    firstName: 'Ehsan', lastName: 'Ahmadi', email: 'EhsanAhmadi8338@gamil.com', phone: '0912345678', address: 'Tehran, Parand...',
    country: 'Iran', city: 'Tehran', profile: '/images/ehsan.jpg'
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });

  return (
    <div className="mt-4">
      <Title className="!text-dark-500">Edit Profile</Title>
      <ImageUser userDetail={userDetail} setUserDetail={setUserDetail} />
      <FormUser userDetail={userDetail} setUserDetail={setUserDetail} changeHandler={changeHandler} />
      <div className="flex items-center justify-between !mt-8">
        <Button
          variant="outlined"
          color="success"
        >Cancel</Button>
        <Button
          className="!bg-light-tertiary !text-primary"
          variant="contained"
          color="success"
        >Update</Button>
      </div>
    </div>
  )
}

export default ProfilePage