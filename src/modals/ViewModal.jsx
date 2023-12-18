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
      <div>
        <button 
          className="rounded-md p-1 px-2 mb-3 bg-red text-sm text-white font-bold hover:transform hover:scale-125 transition-transform duration-100 fixed bottom-0 right-28 z-50" 
          onClick={onRequestClose}
        >
          CLOSE
        </button>
      </div>
      {children}
    </Modal>
  )
}

export default ViewModal