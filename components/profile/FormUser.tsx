import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import Field from "../element/Field"
import { UserInfo } from '@/globalTypes';

interface IProps {
  userDetail: UserInfo,
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  setUserDetail: Dispatch<SetStateAction<UserInfo>>
}

function FormUser({ userDetail, setUserDetail, changeHandler }: IProps) {
  return (
    <div className="my-10 flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <Field type='text' placeholder='First Name' name='firstName' value={userDetail.firstName} onChange={changeHandler} />
        <Field type='text' placeholder='Last Name' name='lastName' value={userDetail.lastName} onChange={changeHandler} />
      </div>
      <Field type='number' placeholder='Contacts Number' name='phone' value={userDetail.phone} onChange={changeHandler} />
      <Field type='text' placeholder='Address' name='address' value={userDetail.address} onChange={changeHandler} />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <Field type='text' placeholder='Country' name='country' value={userDetail.country} onChange={changeHandler} />
        <Field type='text' placeholder='City' name='city' value={userDetail.city} onChange={changeHandler} />
      </div>
    </div>
  )
}

export default FormUser