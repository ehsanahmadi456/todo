import { useState, ChangeEvent, useEffect } from 'react'
import { SmText, Title } from "@/mui/customize"
import FormUser from "./FormUser"
import { Button } from '@mui/material'
import { UserInfo } from "@/globalTypes"
import { LoadingButton } from '@mui/lab'
import request from '@/services/request'

function ProfilePage() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userDetail, setUserDetail] = useState<UserInfo>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    country: '',
    city: '',
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

  useEffect(() => {
    request.getProfile()
      .then(res => {
        setUserDetail({ ...res.data, profile: '/images/ehsan.jpg' });
      })
  }, [])

  return (
    <div className="mt-4">
      <Title className="!text-dark-500 dark:!text-dark-400">Edit Profile</Title>
      <SmText className="!text-dark-500 dark:!text-dark-300">Updated At: {userDetail.updatedAt && userDetail.updatedAt.split('T')[0]}</SmText>
      {/* <ImageUser userDetail={userDetail} setUserDetail={setUserDetail} /> */}
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