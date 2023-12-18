import { LiaCertificateSolid } from "react-icons/lia";
import { TbLicense } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Certificates = ({ name, open }) => {
  if (!name) {
    return null;
  }
  return (
    <div className="bg-royal-red mr-5 rounded-md mb-5">
      <div className="flex py-3 gap-2">
        <div className="pl-3 text-white text-2xl"><LiaCertificateSolid /></div>
        <div className="text-white text-sm pr-4">{name}</div>
      </div>
      <div onClick={() => open()} className="text-right text-xs text-white pr-4 py-3">View doc &gt;</div>
    </div>
  );
}

const Licenses = ({ license, open }) => {
  if (!license) {
    return null;
  }

  return (
    <div className="bg-royal-red mr-5 rounded-md mb-5">
      <div className="flex py-3 gap-3">
        <div className="pl-3 text-white text-xl"><TbLicense /></div>
        <div className="text-white text-sm pr-4">{license}</div>
      </div>
      <div onClick={() => open()} className="text-right text-xs text-white pr-4 pb-3">View doc &gt;</div>
    </div>
  );
}

const Clearances = ({ permit, open }) => {
  if (!permit) {
    return null;
  }

  return (
    <div className="bg-royal-red mr-5 rounded-md mb-5">
      <div className="flex py-3 gap-3">
        <div className="pl-3 text-white text-xl"><AiOutlineSafetyCertificate /></div>
        <div className="text-white text-sm pr-4">{permit}</div>
      </div>
      <div onClick={() => open()} className="text-right text-xs text-white pr-4 pb-3">View doc &gt;</div>
    </div>
  );
}

const Card = ({ open, name, license, permit }) => {
  return (
    <div>
      <Certificates open={open} name={name} />
      <Licenses open={open} license={license} />
      <Clearances open={open} permit={permit} />
    </div>
  )
}

export default Card