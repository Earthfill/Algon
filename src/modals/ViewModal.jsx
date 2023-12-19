import Modal from "react-modal";

const ViewModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          minWidth: "75%",
          minHeight: "30%",
          borderRadius: "2%",
          backgroundColor: "white",
          color: "white",
          overflowX: "hidden",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
        overlay: {
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        },
      }}
      contentLabel=""
    >
      <div className="flex gap-4 flex-col items-center justify-center h-full">
        <div>
          {children}
        </div>
        <div>
          <button 
            className="rounded-md p-1 px-2 bg-red text-sm text-white font-bold hover:scale-105 hover:transform transition:transform duration-300" 
            onClick={onRequestClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ViewModal