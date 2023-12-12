import { LiaCertificateSolid } from "react-icons/lia";

const Certificates = ({ name }) => {
  return (
    <div className="bg-royal-red mr-5 rounded-md mb-5">
      <div className="flex py-3 gap-2">
        <div className="pl-3 text-white text-2xl"><LiaCertificateSolid /></div>
        <div className="text-white text-sm pr-4">{name}</div>
      </div>

    </div>
  )
}

export default Certificates