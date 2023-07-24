import { useState, ChangeEvent } from 'react'
import { SmText, Title } from "@/mui/customize"
import ImageUser from "./ImageUser"
import FormUser from "./FormUser"
import { Button } from '@mui/material'
import { UserInfo } from "@/globalTypes"
import { LoadingButton } from '@mui/lab'
import request from '@/services/request'

function ProfilePage({ user }) {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userDetail, setUserDetail] = useState<UserInfo>({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    phone: user.phone || '',
    address: user.address || '',
    country: user.country || '',
    city: user.city || '',
    profile: '/images/ehsan.jpg'
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });

  const updateHandler = () => {
    const { firstName, lastName, phone, address, country, city } = userDetail
    setIsLoading(true);
    request.updateProfile(firstName, lastName, phone, address, country, city)
      .then(() => {
        setIsLoading(false);
      })
  }

  return (
    <div className="mt-4">
      <Title className="!text-dark-500">Edit Profile</Title>
      <SmText className="!text-dark-500">Updated At: {user.updatedAt && user.updatedAt.split('T')[0]}</SmText>
      <ImageUser userDetail={userDetail} setUserDetail={setUserDetail} />
      <FormUser userDetail={userDetail} setUserDetail={setUserDetail} changeHandler={changeHandler} />
      <div className="flex items-center justify-between !mt-8">
        <Button
          variant="outlined"
          color="success"
        >Cancel</Button>
        <LoadingButton
          loading={isLoading}
          className={!isLoading && "!bg-light-tertiary !text-primary"}
          onClick={updateHandler}
          variant="contained"
          color="success"
        >Update</LoadingButton>
      </div>
    </div>
  )
}

export default ProfilePage