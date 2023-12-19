import { LiaCertificateSolid } from "react-icons/lia";
import { TbLicense } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { ImCheckboxChecked } from "react-icons/im";
import { MdCancel } from "react-icons/md";

const Certificates = ({ name, open, price, status }) => {
  if (!name) {
    return null;
  }
  return (
    <div className="lg:flex-col bg-card mr-5 lg:mr-32 2xl:mr-96 rounded-md mb-5">
      <div className="flex justify-between py-3 lg:pb-10">
        <div className="flex gap-2">
          <div className="pl-3 text-white text-2lg"><LiaCertificateSolid /></div>
          <div className="flex items-start text-white text-sm pr-4">{name}</div>
        </div>
        <div className={`pr-3 ${status ? 'text-green-700' : 'text-white'}`}>{status ? <ImCheckboxChecked /> : <MdCancel />}</div>
      </div>
      <div onClick={() => open()} className="flex gap-3 justify-between text-xs text-white px-4 py-3 lg:pr-7">
        <div>&#8358; {price}</div>
        <div>View doc &gt;</div>
      </div>
    </div>
  );
}

const Licenses = ({ license, open, price, status }) => {
  if (!license) {
    return null;
  }

  return (
    <div className="lg:flex-col bg-card mr-5 lg:mr-32 2xl:mr-96 rounded-md mb-5">
      <div className="flex justify-between py-3 lg:pb-10">
        <div className="flex gap-2">
          <div className="pl-3 text-white text-lg"><TbLicense /></div>
          <div className="text-white text-sm pr-4">{license}</div>
        </div>
        <div className={`pr-3 ${status ? 'text-green-700' : 'text-white'}`}>{status ? <ImCheckboxChecked /> : <MdCancel />}</div>
      </div>
      <div onClick={() => open()} className="flex gap-3 justify-between text-xs text-white px-4 py-3 lg:pr-7">
        <div>&#8358; {price}</div>
        <div>View doc &gt;</div>
      </div>
    </div>
  );
}

const Clearances = ({ permit, open, price, status }) => {
  if (!permit) {
    return null;
  }

  return (
    <div className="lg:flex-col bg-card mr-5 lg:mr-32 2xl:mr-96 rounded-md mb-5">
      <div className="flex justify-between py-3 lg:pb-10">
        <div className="flex gap-2">
          <div className="pl-3 text-white text-lg"><AiOutlineSafetyCertificate /></div>
          <div className="text-white text-sm pr-4">{permit}</div>
        </div>
        <div className={`pr-3 ${status ? 'text-green-700' : 'text-white'}`}>{status ? <ImCheckboxChecked /> : <MdCancel />}</div>
      </div>
      <div onClick={() => open()} className="flex gap-3 justify-between text-xs text-white px-4 py-3 lg:pr-7">
        <div>&#8358; {price}</div>
        <div>View doc &gt;</div>
      </div>
    </div>
  );
}

const Card = ({ open, name, license, permit, price, status }) => {
  return (
    <div>
      <Certificates open={open} name={name} price={price} status={status} />
      <Licenses open={open} license={license} price={price} status={status} />
      <Clearances open={open} permit={permit} price={price} status={status} />
    </div>
  )
}

export default Card